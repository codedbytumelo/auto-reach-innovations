import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function POST(request: NextRequest) {
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, { headers: corsHeaders });
  }

  try {
    const body = await request.json();
    const {
      dealershipName,
      contactPerson,
      email,
      phone,
      location,
      dealershipType,
      brands,
      salesVolume,
      lookingFor,
      message
    } = body;

    // Validate required fields
    const requiredFields = ['dealershipName', 'contactPerson', 'email', 'phone', 'location', 'lookingFor'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400, headers: corsHeaders }
      );
    }

    const html = `
      <h2>New Dealer Partnership Application: ${dealershipName}</h2>
      <p><strong>Contact Person:</strong> ${contactPerson}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${location}</p>
      
      <h3>Dealership Details</h3>
      <ul>
        <li>Type: ${dealershipType}</li>
        <li>Brands: ${brands || 'Not specified'}</li>
        <li>Average Sales Volume: ${salesVolume || 'Not specified'}</li>
      </ul>
      
      <h3>Looking For</h3>
      <p>${lookingFor || 'Not specified'}</p>
      
      ${message ? `<h3>Additional Message</h3><p>${message}</p>` : ''}
    `;

    const result = await sendEmail({
      to: 'sales@autoreachinnovations.co.za',
      subject: `New Dealer Application: ${dealershipName}`,
      html,
      text: `Dealer application from ${dealershipName} (${contactPerson}, ${email})`
    });

    if (result.success) {
      return NextResponse.json({ success: true }, { headers: corsHeaders });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500, headers: corsHeaders }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}