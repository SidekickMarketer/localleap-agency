# LocalLeap Marketing Agency - Complete Business in a Box

A complete solo marketing agency business targeting $50,000/month, serving local small businesses.

Built with **Next.js 15, Tailwind CSS, Sanity CMS** - designed to scale and reuse across future projects.

## Quick Start

```bash
# Install dependencies
cd ~/localleap-agency/website && npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## One-Command Deploy to Vercel

```bash
cd ~/localleap-agency/website && npx vercel --prod
```

Or connect to GitHub and deploy automatically.

---

## Project Structure

```
localleap-agency/
├── website/                      # Next.js application
│   ├── src/
│   │   ├── app/                  # App router pages
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── layout.tsx       # Root layout
│   │   │   └── studio/          # Sanity Studio (at /studio)
│   │   ├── components/
│   │   │   ├── ui/              # Reusable UI components
│   │   │   ├── sections/        # Page sections (Hero, Pricing, etc.)
│   │   │   └── layout/          # Header, Footer
│   │   ├── lib/                 # Utilities, config
│   │   ├── sanity/
│   │   │   ├── schemas/         # Content schemas
│   │   │   └── lib/             # Sanity client, queries
│   │   └── types/               # TypeScript types
│   ├── sanity.config.ts         # Sanity configuration
│   └── .env.example             # Environment template
└── docs/                         # Business documentation
    ├── BUSINESS-PLAN.md
    ├── OPERATIONS-GUIDE.md
    ├── EMAIL-TEMPLATES.md
    └── CLIENT-CONTRACT-TEMPLATE.md
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **Tailwind CSS 4** | Utility-first CSS |
| **Sanity CMS** | Headless content management |
| **TypeScript** | Type safety |
| **Lucide React** | Icons |
| **Vercel** | Hosting & deployment |

---

## Setting Up Sanity CMS

### 1. Create a Sanity Project

```bash
# From the website folder
cd ~/localleap-agency/website
npx sanity init --env

# Follow prompts:
# - Create new project
# - Name: LocalLeap (or your agency name)
# - Dataset: production
# - Project output path: (press enter to skip)
```

### 2. Update Environment Variables

Copy the project ID from the output and update `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Access Sanity Studio

Run `npm run dev` and go to `http://localhost:3000/studio`

The studio lets you edit:
- Homepage content (hero, CTAs, etc.)
- Services
- Case studies
- Testimonials
- Pricing tiers
- FAQs
- Blog posts

### 4. Deploy Sanity Studio

The studio deploys with your Next.js app. No separate deployment needed.

---

## Customizing the Site

### Change Agency Name & Branding

Edit `src/lib/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Your Agency Name',
  description: 'Your tagline here',
  url: 'https://your-domain.com',
  // ...
};
```

### Change Colors

Edit `src/app/globals.css`:

```css
@theme inline {
  --color-primary-500: #your-color;
  --color-accent-500: #your-accent;
}
```

### Add/Remove Sections

Edit `src/app/page.tsx` to reorder or remove sections:

```tsx
export default async function Home() {
  return (
    <>
      <Hero content={content.hero} />
      <Services services={content.services} />
      {/* Add or remove sections here */}
    </>
  );
}
```

---

## Reusing This Template

This template is designed to be cloned for multiple client projects:

1. **Fork the repo** or copy the website folder
2. **Update branding** in `src/lib/config.ts`
3. **Create new Sanity project** for each client
4. **Customize colors** in `globals.css`
5. **Deploy to Vercel** under client's domain

Each project gets its own:
- Sanity project (separate content)
- Vercel deployment
- Custom domain

---

## UI Components

Pre-built, reusable components in `src/components/ui/`:

```tsx
import { Button, Card, Section, Badge, Input } from '@/components/ui';

// Buttons with variants
<Button href="/contact" variant="primary" size="lg">Get Started</Button>
<Button variant="secondary">Learn More</Button>

// Cards
<Card hover={true} padding="lg">
  <CardTitle>Title</CardTitle>
  <CardDescription>Description</CardDescription>
</Card>

// Page sections
<Section background="gray" id="services">
  <SectionHeader title="Our Services" titleHighlight="For You" />
</Section>

// Form inputs
<Input label="Email" type="email" error={errors.email} />
```

---

## Page Sections

Pre-built sections in `src/components/sections/`:

- `Hero` - Main banner with CTAs
- `TrustBadges` - Client logos
- `Problems` - Pain points
- `Services` - Service cards
- `Results` - Stats + case studies
- `Process` - How it works steps
- `Pricing` - Pricing tiers
- `Testimonials` - Client quotes
- `FAQ` - Expandable questions
- `Contact` - Lead capture form

All sections accept props for customization or can pull from Sanity.

---

## Connect the Contact Form

### Option 1: Vercel Forms (Easiest)

Forms work automatically when deployed to Vercel.

### Option 2: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get endpoint
3. Update `src/components/sections/contact.tsx`

### Option 3: Custom API Route

Create `src/app/api/contact/route.ts` for custom handling.

---

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run lint

# Deploy to Vercel
npx vercel --prod
```

---

## Business Documentation

All business strategy and operations docs are in `/docs`:

| Document | Purpose |
|----------|---------|
| `BUSINESS-PLAN.md` | Revenue model, pricing, target market |
| `OPERATIONS-GUIDE.md` | Daily routines, SOPs, client management |
| `EMAIL-TEMPLATES.md` | Cold outreach sequences, scripts |
| `CLIENT-CONTRACT-TEMPLATE.md` | Service agreement template |

---

## The $50K/Month Model

| Revenue Stream | Monthly Target |
|----------------|---------------|
| Retainer clients (12-15) | $32,000 |
| One-time projects | $6,000 |
| White-label work | $7,000 |
| Affiliate income | $3,000 |
| Digital products | $2,000 |
| **Total** | **$50,000** |

See `docs/BUSINESS-PLAN.md` for full breakdown.

---

## Recommended Tools Stack

| Tool | Cost | Purpose |
|------|------|---------|
| GoHighLevel | $97/mo | CRM, email, SMS, scheduling |
| Apollo.io | $49/mo | Lead data |
| Instantly.ai | $37/mo | Cold email |
| Canva Pro | $13/mo | Design |
| ChatGPT Plus | $20/mo | AI assistant |
| **Total** | ~$300/mo | |

---

## Timeline to $50K/Month

| Phase | Timeframe | Revenue |
|-------|-----------|---------|
| Foundation | Month 1-2 | $0-3K |
| First clients | Month 3-4 | $5-8K |
| Momentum | Month 5-6 | $12-18K |
| Scale | Month 7-9 | $22-30K |
| Target | Month 10-12 | $35-50K |

---

## Support

For Next.js: [nextjs.org/docs](https://nextjs.org/docs)
For Sanity: [sanity.io/docs](https://sanity.io/docs)
For Tailwind: [tailwindcss.com/docs](https://tailwindcss.com/docs)
For Vercel: [vercel.com/docs](https://vercel.com/docs)

---

Built for one purpose: **to help you build a profitable marketing agency.**

Now go get your first client.
