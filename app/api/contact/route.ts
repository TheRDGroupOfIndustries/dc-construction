import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message || !phone) {
      return NextResponse.json({ error: 'Please fill out all required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

  
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Message from ${name} via D&R Constructions Website`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #B91C1C; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Website Inquiry</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">You've received a new message from the contact form:</p>
            <div style="background-color: #f9f9f9; border-radius: 5px; padding: 15px; margin-top: 15px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #B91C1C;">${email}</a></p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Project Details:</strong></p>
              <p style="white-space: pre-wrap; font-style: italic;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f1f1f1; color: #666; padding: 15px; text-align: center; font-size: 12px;">
            This email was sent from the D & R Constructions website.
          </div>
        </div>
      `,
    };

   
    const senderMailOptions = {
      from: `"D & R Constructions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting D & R Constructions!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #B91C1C; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">We have received your message and appreciate you reaching out. Our team will review your project details and get back to you shortly.</p>
            <p>For your records, here is a copy of your submission:</p>
            <div style="background-color: #f9f9f9; border-radius: 5px; padding: 15px; margin-top: 15px; font-style: italic;">
              <p style="white-space: pre-wrap;">"${message}"</p>
            </div>
          </div>
          <div style="background-color: #f1f1f1; color: #666; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;"><strong>D & R Constructions</strong></p>
            <p style="margin: 5px 0 0 0;">Building Dreams, Designing Futures in Varanasi</p>
          </div>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(senderMailOptions)
    ]);

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}