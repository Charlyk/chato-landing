import { NextRequest, NextResponse } from "next/server";
import { createLead, LeadInput } from "@/lib/db";

interface LeadRequest {
  clinic_name?: string;
  city?: string;
  email?: string;
  phone?: string;
  has_website?: boolean;
  patient_volume?: string;
  pain_point?: string;
  conversation: Array<{ role: string; content: string }>;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadRequest = await request.json();

    // Validate required fields - need at least email OR phone
    if (!body.email && !body.phone) {
      return NextResponse.json(
        { error: "Email sau telefon este obligatoriu" },
        { status: 400 }
      );
    }

    // Validate conversation exists
    if (!body.conversation || !Array.isArray(body.conversation)) {
      return NextResponse.json(
        { error: "Conversația este obligatorie" },
        { status: 400 }
      );
    }

    const leadInput: LeadInput = {
      clinic_name: body.clinic_name,
      city: body.city,
      email: body.email,
      phone: body.phone,
      has_website: body.has_website,
      patient_volume: body.patient_volume,
      pain_point: body.pain_point,
      conversation: body.conversation,
    };

    const lead = await createLead(leadInput);

    return NextResponse.json({
      success: true,
      leadId: lead.id,
    });
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      { error: "Eroare la salvarea datelor. Te rog încearcă din nou." },
      { status: 500 }
    );
  }
}
