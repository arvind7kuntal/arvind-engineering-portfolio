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

The contact form opens a pre-filled email addressed to arvind7kuntal@gmail.com.

## Contact form behavior

The enquiry form opens the visitor's default email application with a pre-filled message (`mailto:`). It does not save submissions to a database or send them to a server. For reliable enquiries from every device, connect a form backend/provider (for example Formspree or a small serverless endpoint) before launch.

## Free deployment

Recommended: Vercel or Netlify.

1. Push this project to a GitHub repository.
2. Import the repository into Vercel or Netlify.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy and use the free generated URL.
