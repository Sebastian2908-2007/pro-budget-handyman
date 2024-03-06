import LeadEmail from '@/components/emails/LeadEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
//probudgethandyman@gmail.com
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const {email, name,phone,description} = await request.json();  
  try {
     await resend.emails.send({
      from:`sebastian@topdev.tech`, 
      //from: 'sebastian@topdev.tech',
      to:'sebastian@topdev.tech',
      subject: `Hot lead from ${name}`,
      react: LeadEmail({ email, name,phone,description }),
    });

    return NextResponse.json({success: 'email sent!'}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}