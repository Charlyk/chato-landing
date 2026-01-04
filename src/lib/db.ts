import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

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
  const result = await pool.query<Lead>(
    `INSERT INTO leads (
      clinic_name,
      city,
      email,
      phone,
      has_website,
      patient_volume,
      pain_point,
      conversation
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *`,
    [
      lead.clinic_name || null,
      lead.city || null,
      lead.email || null,
      lead.phone || null,
      lead.has_website ?? null,
      lead.patient_volume || null,
      lead.pain_point || null,
      JSON.stringify(lead.conversation),
    ]
  );

  return result.rows[0];
}

export async function getLeads(): Promise<Lead[]> {
  const result = await pool.query<Lead>(
    "SELECT * FROM leads ORDER BY created_at DESC"
  );
  return result.rows;
}
