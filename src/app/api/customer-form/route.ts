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
    const requiredFields = ['fullName', 'phoneNumber', 'emailAddress', 'vehicleType', 'condition', 'budgetRange', 'whenToBuy', 'paymentMethod', 'contactMethod', 'seriousness', 'consent'];
    
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
        <h2 style="color: #ff5c5c; border-bottom: 2px solid #ff5c5c; padding-bottom: 10px;">New Customer Car Request</h2>
        
        <h3 style="margin-top: 20px; color: #333;">Customer Details</h3>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
        <p><strong>Email:</strong> ${formData.emailAddress}</p>
        
        <h3 style="margin-top: 20px; color: #333;">Car Preferences</h3>
        <p><strong>Vehicle Type:</strong> ${formData.vehicleType}</p>
        <p><strong>Preferred Brands:</strong> ${Array.isArray(formData.preferredBrands) ? formData.preferredBrands.join(', ') : formData.preferredBrands}</p>
        <p><strong>Condition:</strong> ${formData.condition}</p>
        
        <h3 style="margin-top: 20px; color: #333;">Budget & Timeline</h3>
        <p><strong>Budget Range:</strong> ${formData.budgetRange}</p>
        <p><strong>When to Buy:</strong> ${formData.whenToBuy}</p>
        <p><strong>Payment Method:</strong> ${formData.paymentMethod}</p>
        
        <h3 style="margin-top: 20px; color: #333;">Contact Preferences</h3>
        <p><strong>Preferred Contact Method:</strong> ${formData.contactMethod}</p>
        
        <h3 style="margin-top: 20px; color: #333;">Buying Intent</h3>
        <p><strong>Seriousness:</strong> ${formData.seriousness}</p>
        <p><strong>Notes:</strong> ${formData.notes || 'None'}</p>
        
        ${formData.hasTradeIn === 'yes' ? `
          <h3 style="margin-top: 20px; color: #333;">Trade-In Details</h3>
          <p><strong>Make & Model:</strong> ${formData.tradeInMakeModel || 'Not provided'}</p>
          <p><strong>Mileage:</strong> ${formData.tradeInMileage || 'Not provided'}</p>
          <p><strong>Condition:</strong> ${formData.tradeInCondition || 'Not provided'}</p>
          <p><strong>Has Finance:</strong> ${formData.hasFinance || 'Not provided'}</p>
          ${formData.hasFinance === 'yes' ? `
            <p><strong>Finance House:</strong> ${formData.financeHouse || 'Not provided'}</p>
            <p><strong>Settlement Amount:</strong> ${formData.settlementAmount || 'Not provided'}</p>
          ` : ''}
        ` : '<h3 style="margin-top: 20px; color: #333;">No Trade-In</h3>'}
        
        <div style="margin-top: 30px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <p style="font-size: 12px; color: #666;">This email was sent from the Auto Reach customer form on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Auto Reach <onboarding@resend.dev>', // Replace with your verified domain
      to: 'sales@autoreachinnovations.co.za', // The requested email address
      subject: `New Car Request: ${formData.fullName}`,
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