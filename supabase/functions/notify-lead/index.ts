const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, document } = await req.json();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const companyText = company || 'Not specified';

    // Store lead in database
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
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
      } else {
        console.log(`✅ Lead saved: ${name} (${email}) from ${companyText}`);
      }
    }

    // Build WhatsApp notification URL
    const whatsappMessage = `🚀 *New Lead Alert!*\n\n📄 *Document:* ${document || 'MVP Walkthrough'}\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n🏢 *Company:* ${companyText}\n🕐 *Time:* ${timestamp} IST`;
    const whatsappNumber = '4915563595530';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Build mailto link for email notification
    const emailSubject = encodeURIComponent(`🚀 New CivicGuard Lead: ${name}`);
    const emailBody = encodeURIComponent(`New Download Lead\n\nName: ${name}\nEmail: ${email}\nCompany: ${companyText}\nDocument: ${document || 'MVP Walkthrough'}\nTime: ${timestamp} IST`);
    const emailNotifyUrl = `mailto:sahilramteke001@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    console.log(`📧 Email notify URL generated for: sahilramteke001@gmail.com`);
    console.log(`📱 WhatsApp notify URL generated for: +${whatsappNumber}`);

    return new Response(JSON.stringify({
      success: true,
      message: 'Lead captured successfully',
      whatsappNotifyUrl: whatsappUrl,
      emailNotifyUrl: emailNotifyUrl,
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing lead:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
