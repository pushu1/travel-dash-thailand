import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { LeadEnquiry } from '@/types';

// In-memory lead cache for serverless environment persistence
const inMemoryLeads: LeadEnquiry[] = [];

function getStoragePath(): string {
  // Check if we are running in Vercel or local
  const isVercel = process.env.VERCEL === '1';
  if (isVercel) {
    return path.join('/tmp', 'travel_dash_leads.json');
  }
  return path.join(process.cwd(), 'data', 'leads.json');
}

function loadLeads(): LeadEnquiry[] {
  try {
    const filePath = getStoragePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('[Enquiry API] Could not read file storage, falling back to memory:', err);
  }
  return inMemoryLeads;
}

function saveLead(lead: LeadEnquiry): boolean {
  // Always update memory
  inMemoryLeads.unshift(lead);

  try {
    const filePath = getStoragePath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const currentLeads = loadLeads();
    // Deduplicate by ID
    const exists = currentLeads.some(l => l.id === lead.id);
    const updated = exists ? currentLeads : [lead, ...currentLeads];
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.warn('[Enquiry API] Could not persist to disk, retained in memory:', err);
    return true; // Still succeeded in memory
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      whatsappNumber,
      preferredDepartureDate,
      travellingWith,
      numberOfTravellers = '2 Travellers',
      selectedAddons = [],
      totalEstimatedPrice,
      source = 'Landing Page Hero Form',
    } = body;

    // Strict validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    if (!whatsappNumber || typeof whatsappNumber !== 'string') {
      errors.whatsappNumber = 'Please provide a valid WhatsApp number.';
    } else {
      const cleanedPhone = whatsappNumber.replace(/[^0-9+]/g, '');
      if (cleanedPhone.length < 10) {
        errors.whatsappNumber = 'Please provide a valid 10-digit WhatsApp phone number.';
      }
    }

    if (!preferredDepartureDate || typeof preferredDepartureDate !== 'string') {
      errors.preferredDepartureDate = 'Please select your preferred departure date.';
    }

    if (!travellingWith || typeof travellingWith !== 'string') {
      errors.travellingWith = 'Please specify who you are travelling with.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please correct the highlighted errors.',
          errors,
        },
        { status: 400 }
      );
    }

    // Generate unique Lead ID
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const leadId = `TD-THAI-${timestamp}-${randomSuffix}`;

    const newLead: LeadEnquiry = {
      id: leadId,
      fullName: fullName.trim(),
      whatsappNumber: whatsappNumber.trim(),
      preferredDepartureDate: preferredDepartureDate.trim(),
      travellingWith: travellingWith.trim(),
      numberOfTravellers: numberOfTravellers.trim(),
      selectedAddons,
      totalEstimatedPrice: totalEstimatedPrice || 122000,
      submittedAt: new Date().toISOString(),
      source,
      status: 'NEW',
    };

    saveLead(newLead);

    // Optional webhook forwarding (e.g. to CRM, Slack, Google Sheets, or Zapier if configured)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newLead),
        }).catch(err => console.warn('[Enquiry Webhook Forward Error]', err));
      } catch (e) {
        // Non-blocking
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been successfully registered!',
        leadId,
        lead: newLead,
        redirectUrl: `/thank-you-thailand?leadId=${encodeURIComponent(leadId)}&name=${encodeURIComponent(newLead.fullName)}&date=${encodeURIComponent(newLead.preferredDepartureDate)}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[Enquiry API Error]:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while saving your enquiry. Please try again or WhatsApp us directly.',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Endpoint to view or export leads
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format');
  const leads = loadLeads();

  if (format === 'csv') {
    const headers = ['Lead ID', 'Full Name', 'WhatsApp Number', 'Departure Date', 'Travelling With', 'Travellers', 'Submitted At', 'Status'];
    const rows = leads.map(l => [
      `"${l.id}"`,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.whatsappNumber.replace(/"/g, '""')}"`,
      `"${l.preferredDepartureDate.replace(/"/g, '""')}"`,
      `"${l.travellingWith.replace(/"/g, '""')}"`,
      `"${l.numberOfTravellers.replace(/"/g, '""')}"`,
      `"${l.submittedAt}"`,
      `"${l.status || 'NEW'}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="travel_dash_thailand_leads.csv"',
      },
    });
  }

  return NextResponse.json({
    success: true,
    totalCount: leads.length,
    leads,
  });
}
