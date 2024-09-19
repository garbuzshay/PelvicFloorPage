import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success?: boolean;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name, email,tel, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Environment variable
        pass: process.env.EMAIL_PASS, // Environment variable
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email
      subject: `New message from ${name}`,
      text: `You received a new message from:
      Name: ${name}
      Email: ${email}
      Phone: ${tel}
      Message: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
