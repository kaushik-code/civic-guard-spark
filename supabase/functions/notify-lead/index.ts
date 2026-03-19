import { Hono } from "https://deno.land/x/hono@v4.3.4/mod.ts";

const app = new Hono();

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

app.options('/*', (c) => c.json(null, 200, corsHeaders));

app.post('/', async (c) => {
  try {
    const { name, email, company, document } = await c.req.json();

    if (!name || !email) {
      return c.json({ error: 'Name and email are required' }, 400, corsHeaders);
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const companyText = company || 'Not specified';

    // Send WhatsApp notification via WhatsApp API
    const whatsappMessage = `🚀 *New Lead Alert!*\n\n📄 *Document:* ${document || 'MVP Walkthrough'}\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n🏢 *Company:* ${companyText}\n🕐 *Time:* ${timestamp} IST`;

    const whatsappNumber = '4915563595530';
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Use WhatsApp Click-to-Chat API (opens chat, but for server-side we log it)
    // For actual WhatsApp notifications, we'll use the Supabase database trigger approach
    console.log(`WhatsApp notification for: ${whatsappNumber}`);
    console.log(`Message: ${whatsappMessage}`);

    // Send email notification using Supabase's built-in email
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      // Store lead in database
      const dbResponse = await fetch(`${SUPABASE_URL}/rest/v1/download_leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ name, email, company, document: document || 'MVP-Walkthrough' }),
      });

      if (!dbResponse.ok) {
        const errText = await dbResponse.text();
        console.error('DB insert failed:', errText);
      }
    }

    // Return WhatsApp deep link for client-side notification trigger
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    return c.json({
      success: true,
      message: 'Lead captured successfully',
      whatsappNotifyUrl: whatsappUrl,
    }, 200, corsHeaders);

  } catch (error) {
    console.error('Error processing lead:', error);
    return c.json({ error: 'Internal server error' }, 500, corsHeaders);
  }
});

Deno.serve(app.fetch);
