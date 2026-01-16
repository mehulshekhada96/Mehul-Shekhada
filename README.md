# Mehul Shekhada - Personal Website

A modern, dark-themed personal website built with Next.js, showcasing my work as a SaaS founder and MERN Stack Developer.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Features

- 🎨 Dark, premium theme with indigo accents
- 📱 Fully responsive design
- ⚡ Optimized for performance (Lighthouse score > 90)
- 🔍 SEO optimized with metadata, sitemap, and robots.txt
- 🎭 Smooth animations with Framer Motion
- ♿ Accessible design with ARIA labels

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MehulShekhadaWeb
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /about          # About page
  /blog           # Blog page (scaffold)
  /contact        # Contact page
  /projects       # Projects page
  layout.tsx      # Root layout
  page.tsx        # Home page
  globals.css     # Global styles
  sitemap.ts      # Sitemap generation
  robots.ts       # Robots.txt generation
/components
  Footer.tsx      # Footer component
  Hero.tsx        # Hero section
  Navbar.tsx      # Navigation bar
  ProjectCard.tsx # Project card component
/lib
  seo.ts          # SEO utilities
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key (for contact form)
RESEND_API_KEY=re_your_api_key_here

# Contact Email (optional - defaults to mehulshekhada96@gmail.com)
CONTACT_EMAIL=mehulshekhada96@gmail.com

# Site URL (for sitemap and SEO)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Notes:**
- Get your Resend API key from [https://resend.com](https://resend.com) (free tier: 100 emails/day)
- See `CONTACT_FORM_SETUP.md` for contact form setup
- See `ANALYTICS_SETUP.md` for analytics setup (Vercel Analytics works automatically on Vercel)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

The site will be live at `https://your-project.vercel.app`

## Customization

### Update Personal Information

- Edit content in `/app/page.tsx` (Home page)
- Update `/app/about/page.tsx` (About page)
- Modify `/app/projects/page.tsx` (Projects)
- Update social links in `/components/Footer.tsx` and `/app/contact/page.tsx`

### Update Colors

Edit the CSS variables in `/app/globals.css`:

```css
:root {
  --background: 222.2 84% 4.9%;  /* Dark slate background */
  --primary: 217.2 91.2% 59.8%;  /* Indigo accent */
  /* ... */
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

ISC

---

Built with ❤️ by Mehul Shekhada
