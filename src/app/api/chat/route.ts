import { NextRequest, NextResponse } from "next/server";
import { anthropic } from "@/lib/anthropic";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: Message[];
}

interface LeadData {
  clinic_name?: string;
  city?: string;
  email?: string;
  phone?: string;
  has_website?: boolean;
  patient_volume?: string;
  pain_point?: string;
}

// Parse and extract lead data from response
function parseLeadData(text: string): { cleanText: string; leadData: LeadData | null } {
  const leadDataRegex = /<!--LEAD_DATA\s*([\s\S]*?)\s*LEAD_DATA-->/;
  const match = text.match(leadDataRegex);

  if (!match) {
    return { cleanText: text, leadData: null };
  }

  // Remove the lead data block from the visible text
  const cleanText = text.replace(leadDataRegex, "").trim();

  try {
    const leadData = JSON.parse(match[1].trim()) as LeadData;
    return { cleanText, leadData };
  } catch (error) {
    console.error("Failed to parse lead data JSON:", error);
    return { cleanText, leadData: null };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Parse lead data from response
    const { cleanText, leadData } = parseLeadData(assistantMessage);

    return NextResponse.json({
      response: cleanText,
      leadData: leadData,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error: "Momentan am o problemă tehnică. Te rog încearcă din nou.",
      },
      { status: 500 }
    );
  }
}
