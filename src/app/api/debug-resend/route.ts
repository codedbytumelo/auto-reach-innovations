import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST() {
  try {
    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({
        success: false,
        error: 'API key not found in environment variables',
        hasKey: false
      });
    }
    
    // Try to initialize Resend
    const resend = new Resend(apiKey);
    
    // Try to get domains (this tests if the API key is valid)
    const { data, error } = await resend.domains.list();
    
    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        hasKey: true,
        keyValid: false
      });
    }
    
    // Try to send a test email
    const emailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tmokalane80@gmail.com', // Using the email from your form
      subject: 'Test Email from Auto Reach',
      html: '<p>This is a test email to verify the email configuration is working.</p>',
    });
    
    if (emailResult.error) {
      return NextResponse.json({
        success: false,
        error: emailResult.error.message,
        hasKey: true,
        keyValid: true,
        emailSent: false
      });
    }
    
    return NextResponse.json({
      success: true,
      hasKey: true,
      keyValid: true,
      emailSent: true,
      domains: Array.isArray((data as any)) ? (data as any).length : 0,
      emailId: emailResult.data?.id
    });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      hasKey: !!process.env.RESEND_API_KEY
    });
  }
}