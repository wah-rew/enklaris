CREATE TABLE IF NOT EXISTS enklaris_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nama TEXT NOT NULL,
  email TEXT NOT NULL,
  nomor_wa TEXT,
  detail_kebutuhan TEXT,
  source TEXT DEFAULT 'enklaris_website',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE enklaris_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "enklaris_leads_insert" ON enklaris_leads
  FOR INSERT WITH CHECK (TRUE);

-- Lead validation (written by the scheduled review, not by the website)
ALTER TABLE enklaris_leads
  ADD COLUMN IF NOT EXISTS validation_note TEXT,
  ADD COLUMN IF NOT EXISTS validated_at TIMESTAMPTZ;
