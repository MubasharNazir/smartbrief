// Vercel serverless function to send email notifications
// This file should be placed in /api/send-notification.js for Vercel deployment

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, subject, html } = req.body;

    // Configure your email service (you'll need to set these environment variables)
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD // Your email password or app password
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: html
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      message: 'Notification sent successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send notification',
      error: error.message 
    });
  }
}
