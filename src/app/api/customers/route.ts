import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function POST(req: NextRequest) {
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return NextResponse.json({}, { headers: corsHeaders });
  }

  try {
    const formData = await req.json();

    // Validate required fields
    const requiredFields = ['fullName', 'phoneNumber', 'emailAddress', 'vehicleType', 'condition', 'budgetRange', 'whenToBuy', 'paymentMethod', 'contactMethod', 'seriousness', 'consent'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400, headers: corsHeaders }
      );
    }

    const emailHtml = `
      <h2>New Car Request from ${formData.fullName}</h2>
      <p><strong>Email:</strong> ${formData.emailAddress}</p>
      <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
      
      <h3>Car Preferences</h3>
      <p><strong>Vehicle Type:</strong> ${formData.vehicleType}</p>
      <p><strong>Brands:</strong> ${formData.preferredBrands || 'Not specified'}</p>
      <p><strong>Condition:</strong> ${formData.condition}</p>
      
      <h3>Budget & Timeline</h3>
      <p><strong>Budget:</strong> ${formData.budgetRange}</p>
      <p><strong>When to Buy:</strong> ${formData.whenToBuy}</p>
      <p><strong>Payment Method:</strong> ${formData.paymentMethod}</p>
      
      <h3>Trade-In</h3>
      <p><strong>Has Trade-In:</strong> ${formData.hasTradeIn}</p>
      ${formData.hasTradeIn === 'yes' ? `
        <p><strong>Make & Model:</strong> ${formData.tradeInMakeModel}</p>
        <p><strong>Mileage:</strong> ${formData.tradeInMileage}</p>
        <p><strong>Condition:</strong> ${formData.tradeInCondition}</p>
        <p><strong>Has Finance:</strong> ${formData.hasFinance}</p>
        ${formData.hasFinance === 'yes' ? `
          <p><strong>Finance House:</strong> ${formData.financeHouse}</p>
          <p><strong>Settlement Amount:</strong> ${formData.settlementAmount}</p>
        ` : ''}
      ` : ''}
      
      <h3>Contact Preferences</h3>
      <p><strong>Preferred Contact Method:</strong> ${formData.contactMethod}</p>
      <p><strong>Buying Intent:</strong> ${formData.seriousness}</p>
      
      <h3>Notes</h3>
      <p>${formData.notes}</p>
    `;

    const result = await sendEmail({
      to: 'sales@autoreachinnovations.co.za',
      subject: `New Car Request: ${formData.fullName}`,
      html: emailHtml,
      text: `Car request from ${formData.fullName} (${formData.emailAddress}, ${formData.phoneNumber})`
    });

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Email sent successfully' }, { headers: corsHeaders });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500, headers: corsHeaders }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500, headers: corsHeaders }
    );
  }
}