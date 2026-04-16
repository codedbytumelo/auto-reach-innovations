import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error',
          details: 'Email service is not properly configured'
        },
        { status: 500 }
      );
    }

    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['dealershipName', 'contactPerson', 'email', 'phone', 'location'];
    
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { 
            success: false, 
            message: `Missing required field: ${field}`,
            details: `Please provide a value for ${field}`
          },
          { status: 400 }
        );
      }
    }
    
    // Format the email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h2 style="color: #ff5c5c; border-bottom: 2px solid #ff5c5c; padding-bottom: 10px;">New Dealership Partnership Request</h2>
        
        <h3 style="margin-top: 20px; color: #333;">Dealership Details</h3>
        <p><strong>Dealership Name:</strong> ${formData.dealershipName}</p>
        <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Location:</strong> ${formData.location}</p>
        <p><strong>Dealership Type:</strong> ${formData.dealershipType}</p>
        <p><strong>Brands:</strong> ${formData.brands || 'Not specified'}</p>
        <p><strong>Sales Volume:</strong> ${formData.salesVolume || 'Not specified'}</p>
        <p><strong>Looking For:</strong> ${formData.lookingFor || 'Not specified'}</p>
        <p><strong>Message:</strong> ${formData.message || 'No message'}</p>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <p style="font-size: 12px; color: #666;">This email was sent from the Auto Reach dealership form on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Auto Reach <onboarding@resend.dev>', // Replace with your verified domain
      to: 'sales@autoreachinnovations.co.za', // The requested email address
      subject: `New Dealership Request: ${formData.dealershipName}`,
      html: emailContent,
    });
    
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email',
          details: error.message || 'Unknown email service error'
        },
        { status: 500 }
      );
    }
    
    console.log('Email sent successfully:', data);
    
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Server error',
        details: error instanceof Error ? error.message : 'Unknown server error'
      },
      { status: 500 }
    );
  }
}