# Arvind Kumar — Engineering Portfolio

A responsive React + Vite portfolio designed to generate full-time, part-time, contract and freelance opportunities.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Important: personalize before publishing

Edit `src/main.jsx` and update the `PROFILE` object:

- Email and LinkedIn are already configured.
- Your resume PDF is included in `public/Arvind-Kumar-Resume.pdf`.
- Replace the resume PDF if you later update your CV.

## Review your content

Before publishing, verify:
- Verify every project detail and achievement before sharing widely.
- Confirm the public GitHub repository and LinkedIn profile are accessible.
- The eQ Technologic dates are listed as Aug 2022 – Apr 2026.

The contact form submits enquiries directly to Formspree using the configured endpoint. No email application needs to open.

## Contact form behavior

The enquiry form sends the visitor's name, email, opportunity type and message to Formspree. The interface displays a success message after a successful submission and an error message if the request fails. Make sure the Formspree form is active and its email-verification/setup steps are complete.

## Free deployment

Recommended: Vercel or Netlify.

1. Push this project to a GitHub repository.
2. Import the repository into Vercel or Netlify.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy and use the free generated URL.

## Vercel Web Analytics

This project includes the `@vercel/analytics` React component. In the Vercel dashboard, open this project, select **Analytics**, and enable **Web Analytics**. Then deploy this version. After real visitors arrive, the dashboard can show page views, top pages, referrers, and aggregate visitor/device/location information. Analytics does not collect data during local development.

Custom event tracking (for example, counting resume-download clicks or successful enquiry submissions as named events) is not included because Vercel currently limits custom events to Pro and Enterprise plans. The Hobby plan still supports basic Web Analytics.
