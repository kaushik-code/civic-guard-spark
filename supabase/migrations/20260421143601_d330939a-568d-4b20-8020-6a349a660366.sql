CREATE TABLE public.call_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  preferred_date DATE,
  preferred_slot TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.call_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a call request"
ON public.call_requests
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "No public reads on call requests"
ON public.call_requests
FOR SELECT
TO public
USING (false);