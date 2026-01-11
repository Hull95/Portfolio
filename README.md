This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Setup

This project includes a contact form with email functionality using Resend. To set it up:

1. **Get a Resend API Key:**
   - Sign up at [https://resend.com](https://resend.com)
   - Create an API key in your dashboard
   - Copy the API key

2. **Create Environment Variables:**
   - Copy `env.example` to `.env.local`
   - Add your Resend API key: `RESEND_API_KEY=your_key_here`
   - Add your email: `CONTACT_EMAIL=your-email@example.com`

3. **Verify Your Domain (Optional):**
   - In Resend dashboard, verify your domain for custom "from" addresses
   - Update the `from` field in `src/app/api/contact/route.ts`

4. **Test the Form:**
   - Run the development server
   - Navigate to the Contact section
   - Fill out and submit the form

The form includes validation for:
- Required fields (name, surname, email, phone, description)
- Email format validation
- Phone number format (+38324234324)
- Description character limit (250 characters)

## SEO Optimization

This portfolio is fully optimized for search engines (Google, Bing, etc.) with the following features:

### ✅ Implemented SEO Features

1. **Meta Tags & Open Graph**
   - Complete metadata with title, description, and keywords
   - Open Graph tags for social media sharing (Facebook, LinkedIn)
   - Twitter Card tags for Twitter sharing
   - Canonical URLs to prevent duplicate content

2. **Structured Data (JSON-LD)**
   - Person schema for better Google Knowledge Graph
   - Portfolio/CreativeWork schema
   - Website schema with search functionality

3. **Sitemap & Robots.txt**
   - Automatic sitemap generation at `/sitemap.xml`
   - Robots.txt at `/robots.txt` for search engine crawlers
   - Proper indexing directives

4. **Performance Optimizations**
   - Image optimization with Next.js Image component
   - AVIF and WebP format support
   - Compression enabled
   - Security headers configured

5. **Accessibility & Best Practices**
   - Semantic HTML structure
   - Proper alt text for images
   - Mobile-responsive design
   - Fast loading times

### 🚀 Setup for Production

1. **Set Environment Variables:**
   ```bash
   # In .env.local
   NEXT_PUBLIC_SITE_URL=https://stefanwebdev.com
   RESEND_API_KEY=your_key_here
   CONTACT_EMAIL=your-email@example.com
   ```

2. **Verify Your Domain:**
   - After deploying, verify your domain in Google Search Console
   - Submit your sitemap: `https://stefanwebdev.com/sitemap.xml`
   - Add Google verification code to `src/app/layout.tsx` (metadata.verification.google)

3. **Social Media Profiles:**
   - Update social media links in `src/components/StructuredData.tsx`
   - Add your actual Twitter handle in `src/app/layout.tsx` (metadata.twitter.creator)

4. **Test Your SEO:**
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Check [PageSpeed Insights](https://pagespeed.web.dev/)
   - Validate with [Schema Markup Validator](https://validator.schema.org/)

### 📊 Post-Deployment Checklist

- [ ] Add `NEXT_PUBLIC_SITE_URL` to production environment variables
- [ ] Verify domain in Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Update social media links in StructuredData.tsx
- [ ] Test all meta tags with [Meta Tags Checker](https://metatags.io/)
- [ ] Verify Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Check mobile-friendliness with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
