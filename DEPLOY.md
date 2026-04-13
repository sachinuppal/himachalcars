# Himachal Cars: Deployment Guide

## Quick Deploy to Vercel (Fastest, 5 minutes)

### Step 1: Push to GitHub

```bash
cd himachalcars-app
git init
git add .
git commit -m "Initial commit: Himachal Cars MVP"
gh repo create himachalcars --private --source=. --push
```

Or create a repo manually at github.com/new and push.

### Step 2: Deploy on Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repo
3. Vercel auto-detects Next.js, no config needed
4. Add Environment Variables:
   - `RESEND_API_KEY` = your Resend API key (get free at https://resend.com/signup)
   - `ADMIN_EMAIL` = vikramkashyap980@gmail.com
   - `NEXT_PUBLIC_SITE_URL` = https://himachalcars.com
5. Click Deploy
6. Your site is live at yourproject.vercel.app in ~60 seconds

### Step 3: Connect Domain (himachalcars.com)

1. In Vercel dashboard > your project > Settings > Domains
2. Add `himachalcars.com` and `www.himachalcars.com`
3. Vercel shows you DNS records to add
4. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add A record: @ -> 76.76.21.21
   - Add CNAME: www -> cname.vercel-dns.com
5. SSL is automatic

### Step 4: Set Up Resend (Email Notifications)

1. Sign up at https://resend.com (free: 3000 emails/month)
2. Add and verify your domain: himachalcars.com
   - Go to Resend > Domains > Add Domain
   - Add the DNS records Resend provides (SPF, DKIM)
3. Create an API key
4. Add it to Vercel environment variables as RESEND_API_KEY
5. Redeploy

## Alternative: Deploy to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Init project
railway init

# Deploy
railway up

# Add environment variables
railway variables set RESEND_API_KEY=re_xxx
railway variables set ADMIN_EMAIL=vikramkashyap980@gmail.com
railway variables set NEXT_PUBLIC_SITE_URL=https://himachalcars.com

# Add custom domain
railway domain
```

## Local Development

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your values
npm run dev
# Open http://localhost:3000
```

## What Works Without Any Config

Even without Resend API key, the site fully works:
- All pages render
- Booking form submits and shows confirmation
- WhatsApp deep links work
- Call buttons work
- All 32 pages are statically generated

The only thing that requires the Resend API key is email notifications.
WhatsApp notifications to admin use wa.me deep links (no API needed).
