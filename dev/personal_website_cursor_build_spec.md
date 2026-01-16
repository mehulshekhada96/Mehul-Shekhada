# Personal Website – Full Build Specification (for Cursor)

## 1. Owner Profile (Confirmed)
- Name: Mehul Shekhada
- Profession: Senior MERN Stack Developer (3.5+ years)
- Current Focus: Building **SellerOS** (OMS + SaaS product)
- Skills: MERN Stack, Next.js, MongoDB, Node.js, SaaS Architecture, AI Agents
- Background: Product-based company experience, startup founder mindset
- Location: India
- Goal Phase: Transitioning from job → independent founder / SaaS builder

> Assumption: This website is meant to act as a **personal brand + founder credibility + future lead magnet**.

---

## 2. Primary Goals of the Website
1. Establish Mehul as a **credible SaaS founder & engineer**
2. Showcase SellerOS as a serious product initiative
3. Act as a trust page for:
   - Future clients
   - Investors / partners
   - Recruiters (optional)
4. Long-term: Enable content, leads, and authority

---

## 3. Target Audience
- Startup founders
- SMB / eCommerce operators (SellerOS users)
- Tech collaborators
- Product companies & recruiters (secondary)

---

## 4. Tech Stack (MANDATORY)
- Framework: **Next.js (App Router)**
- Language: TypeScript
- Styling: Tailwind CSS
- UI: shadcn/ui
- Animations: Framer Motion
- Icons: lucide-react
- SEO: next-seo or native metadata
- Deployment: Vercel

---

## 5. Design Language
- Theme: Dark, premium, founder-style
- Colors:
  - Background: Slate / Charcoal
  - Accent: Indigo / Electric blue
- Typography:
  - Headings: Bold, modern
  - Body: Clean, readable
- Layout:
  - Large spacing
  - Card-based sections
  - Minimal but confident

---

## 6. Site Structure (Pages)

### 6.1 Home (/)
**Hero Section**
- Headline: "I build scalable SaaS products & systems"
- Subtext: "MERN Stack Developer · SaaS Founder · Building SellerOS"
- CTA buttons:
  - "View Projects"
  - "Contact Me"

**About Preview**
- Short bio
- Years of experience
- Focus on systems thinking & products

**Skills Snapshot**
- MERN Stack
- SaaS Architecture
- AI Agents
- Scalable Backend Systems

**Featured Project**
- SellerOS (highlight card)

---

### 6.2 About (/about)
- Detailed journey:
  - Engineering background
  - Product-based company experience
  - Startup & SellerOS vision
- Philosophy:
  - Long-term thinking
  - Building leverage via software

---

### 6.3 Projects (/projects)
**SellerOS (Primary)**
- Description:
  - OMS + SaaS for sellers
  - AI-powered automation
- Status: Actively building

**Other Projects**
- API testing agent
- MongoDB upgrade assistant
- AI code comparison tool

Each project card should include:
- Problem
- Solution
- Tech stack
- Outcome / learning

---

### 6.4 Blog (/blog) [Scaffold Only]
- MDX support
- Future-ready (no content required now)
- Topics:
  - SaaS building
  - System design
  - Startup journey

---

### 6.5 Contact (/contact)
- Email CTA
- Social links:
  - GitHub
  - LinkedIn
- Simple contact form (optional)

---

## 7. SEO Requirements
- Proper metadata per page
- OpenGraph tags
- Twitter cards
- Sitemap + robots.txt

---

## 8. Performance & Quality
- Lighthouse score > 90
- Fully responsive
- Accessible (ARIA where needed)
- Clean folder structure

---

## 9. Folder Structure (Example)
```
/app
  /page.tsx
  /about/page.tsx
  /projects/page.tsx
  /blog/page.tsx
  /contact/page.tsx
/components
  Hero.tsx
  Navbar.tsx
  Footer.tsx
  ProjectCard.tsx
/lib
  seo.ts
```

---

## 10. Content Tone Rules
- Confident, not flashy
- Founder-first language
- Avoid corporate fluff
- Clear, sharp sentences

---

## 11. Assumptions (PLEASE CONFIRM)
1. Domain name not finalized
2. No personal photo required initially
3. No paid integrations yet (analytics can be added later)
4. Blog is future-ready only

---

## 12. Explicit Instruction to Cursor
> Build this website exactly as specified.
> Prioritize clean architecture, scalability, and readability.
> Do NOT over-design. Keep it premium and minimal.

---

## 13. Questions I Still Need Answered
1. Domain name (if any)?
2. Do you want your **real photo** on the site? (Yes/No)
3. Should the site position you more as:
   - A) Engineer
   - B) Founder
   - C) Engineer → Founder hybrid

---

**End of Document**

