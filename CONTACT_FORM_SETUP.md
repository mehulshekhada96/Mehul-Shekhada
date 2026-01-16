# Contact Form Setup Guide

## Overview

The contact form is now fully functional and will send emails to your inbox when someone submits a message.

## Setup Instructions

### 1. Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=mehulshekhada96@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Important:** The `.env.local` file is already in `.gitignore` and won't be committed to git.

### 3. Verify Your Domain (Optional but Recommended)

For production, you should verify your domain with Resend:
1. Go to Resend dashboard → Domains
2. Add your domain
3. Update the `from` field in `/app/api/contact/route.ts` to use your verified domain

For now, it uses `onboarding@resend.dev` which works for testing.

### 4. Test the Form

1. Start your dev server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email inbox

## Features

- ✅ Form validation (client and server-side)
- ✅ Success/error messages
- ✅ Loading states
- ✅ Email sent to your inbox
- ✅ Reply-to set to sender's email
- ✅ Spam protection (basic validation)

## Troubleshooting

### Emails not sending?

1. Check that `RESEND_API_KEY` is set in `.env.local`
2. Verify the API key is correct in Resend dashboard
3. Check browser console for errors
4. Check server logs for API errors

### For Production (Vercel)

1. Add environment variables in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add `RESEND_API_KEY` and `CONTACT_EMAIL`
2. Redeploy your site

## Alternative Email Services

If you prefer a different service, you can replace Resend with:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer (with Gmail/SMTP)

Just update the `/app/api/contact/route.ts` file accordingly.
