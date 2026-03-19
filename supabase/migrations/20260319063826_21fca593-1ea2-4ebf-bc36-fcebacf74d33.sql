-- Create leads table for gated downloads
CREATE TABLE public.download_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  document TEXT NOT NULL DEFAULT 'MVP-Walkthrough',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.download_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (no auth required for lead capture)
CREATE POLICY "Anyone can submit a lead" ON public.download_leads
  FOR INSERT WITH CHECK (true);

-- No public reads for security
CREATE POLICY "No public reads" ON public.download_leads
  FOR SELECT USING (false);