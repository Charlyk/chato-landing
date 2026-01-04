import { sql } from "@vercel/postgres";

export { sql };

export interface Lead {
  id: string;
  clinic_name: string | null;
  city: string | null;
  email: string | null;
  phone: string | null;
  has_website: boolean | null;
  patient_volume: string | null;
  pain_point: string | null;
  conversation: Array<{ role: string; content: string }>;
  created_at: Date;
}

export interface LeadInput {
  clinic_name?: string;
  city?: string;
  email?: string;
  phone?: string;
  has_website?: boolean;
  patient_volume?: string;
  pain_point?: string;
  conversation: Array<{ role: string; content: string }>;
}

export async function createLead(lead: LeadInput): Promise<Lead> {
  const result = await sql<Lead>`
    INSERT INTO leads (
      clinic_name,
      city,
      email,
      phone,
      has_website,
      patient_volume,
      pain_point,
      conversation
    ) VALUES (
      ${lead.clinic_name || null},
      ${lead.city || null},
      ${lead.email || null},
      ${lead.phone || null},
      ${lead.has_website ?? null},
      ${lead.patient_volume || null},
      ${lead.pain_point || null},
      ${JSON.stringify(lead.conversation)}
    )
    RETURNING *
  `;

  return result.rows[0];
}
