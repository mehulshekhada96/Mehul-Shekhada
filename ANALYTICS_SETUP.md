# Analytics Setup Guide

## Overview

Your website now has analytics tracking set up with two options:

1. **Vercel Analytics** (Automatic - if deployed on Vercel)
2. **Google Analytics** (Optional - requires setup)

---

## 1. Vercel Analytics (Recommended - Easiest)

### ✅ Already Set Up!

Vercel Analytics is **automatically enabled** when you deploy to Vercel. No configuration needed!

### Features:
- ✅ Privacy-friendly (GDPR compliant)
- ✅ No cookies required
- ✅ Real-time visitor tracking
- ✅ Page views, unique visitors, top pages
- ✅ Speed insights (Core Web Vitals)
- ✅ Free forever

### How to View:
1. Deploy your site to Vercel
2. Go to your Vercel dashboard
3. Click on your project
4. Navigate to **Analytics** tab
5. View real-time and historical data

### For Local Development:
- Analytics only work in production (on Vercel)
- No data is collected during `npm run dev`

---

## 2. Google Analytics (Optional)

### Setup Steps:

#### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Start measuring"**
4. Create an account (e.g., "Mehul Shekhada Website")
5. Set up a property:
   - Property name: Your website name
   - Reporting time zone: Your timezone
   - Currency: Your currency
6. Choose **"Web"** as your platform
7. Enter your website URL
8. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

#### Step 2: Add to Environment Variables

Add your Google Analytics ID to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

#### Step 3: Restart Dev Server

```bash
npm run dev
```

#### Step 4: Deploy

When deploying to Vercel, add the environment variable:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `NEXT_PUBLIC_GA_ID` with your Google Analytics ID
3. Redeploy

### Features:
- ✅ Detailed visitor analytics
- ✅ Demographics and interests
- ✅ User behavior tracking
- ✅ Conversion tracking
- ✅ Real-time reports
- ✅ Free (up to 10M hits/month)

### Privacy Note:
Google Analytics uses cookies and may require a privacy policy/cookie consent banner depending on your location (GDPR, CCPA, etc.).

---

## 3. Alternative Analytics Options

If you want privacy-focused alternatives:

### Plausible Analytics
- Privacy-first, no cookies
- Simple dashboard
- Paid ($9/month)

### PostHog
- Open-source
- Product analytics
- Free tier available

### Umami
- Self-hosted
- Privacy-focused
- Free and open-source

---

## Current Setup

✅ **Vercel Analytics**: Enabled (works automatically on Vercel)
✅ **Google Analytics**: Ready (add `NEXT_PUBLIC_GA_ID` to enable)

---

## Testing

### Test Vercel Analytics:
1. Deploy to Vercel
2. Visit your site
3. Check Vercel dashboard → Analytics tab

### Test Google Analytics:
1. Add `NEXT_PUBLIC_GA_ID` to `.env.local`
2. Visit your site
3. Check Google Analytics dashboard → Realtime reports

---

## What Gets Tracked

### Vercel Analytics:
- Page views
- Unique visitors
- Top pages
- Referrers
- Countries
- Devices
- Browsers
- Performance metrics

### Google Analytics:
- Page views
- User sessions
- Bounce rate
- Average session duration
- Traffic sources
- Demographics
- User flow
- Events (customizable)

---

## Privacy & Compliance

### Vercel Analytics:
- ✅ GDPR compliant
- ✅ No cookies
- ✅ Privacy-friendly
- ✅ No personal data collection

### Google Analytics:
- ⚠️ Uses cookies
- ⚠️ May require cookie consent (GDPR/CCPA)
- ⚠️ Consider adding a privacy policy
- ✅ Can be configured for privacy

---

## Need Help?

- **Vercel Analytics**: [docs.vercel.com/analytics](https://vercel.com/docs/analytics)
- **Google Analytics**: [support.google.com/analytics](https://support.google.com/analytics)
