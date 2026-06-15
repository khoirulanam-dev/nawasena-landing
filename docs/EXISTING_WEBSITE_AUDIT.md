# Existing Website Audit

Phase 0 audit for the existing PT. Nawasena International Group website refactor.

Source of truth: `PRD_Nawasena_Corporate_B2B_Website_Refactor.md`

Audit date: 2026-06-15

## Executive Summary

The repository is an existing production-oriented Vite and React single page application, not a Next.js application yet. The current website is a one-page corporate landing page for Indonesian Arabica green coffee beans with hash-anchor sections, static metadata in `index.html`, local public image assets, a WhatsApp-based sample request form, and Vercel Analytics.

The current implementation should be treated as the visual and content foundation for the progressive refactor. The PRD requires expansion into a broader B2B platform with crawlable routes, product and origin pages, News and Insights, secure admin CMS, Neon PostgreSQL, Drizzle ORM, richer forms, SEO expansion, redirects, and preview-deployment QA. Those target capabilities do not currently exist in the repository.

No destructive refactor has been started in this phase.

## Repository Status

- Current branch: `main`
- Remote tracking: `origin/main`
- Working tree at audit start: `PRD_Nawasena_Corporate_B2B_Website_Refactor.md` was untracked.
- Phase 0 output files added under `docs/`.
- Production branch caution: implementation should continue on a new branch, recommended by PRD as `refactor/corporate-b2b`.

## Technical Inventory

| Area | Current state |
| --- | --- |
| Framework | React SPA built with Vite |
| Framework versions | React `^19.2.4`, React DOM `^19.2.4`, Vite `^8.0.4` in `package.json`; lockfile resolved Vite build output reports `vite v8.0.8` |
| Package manager | npm, `package-lock.json` present |
| Language | JavaScript with JSX, no TypeScript |
| Build scripts | `npm run dev`, `npm run build`, `npm run lint`, `npm run preview` |
| Styling | Tailwind CSS `^3.4.19`, PostCSS, custom CSS in `src/index.css` |
| UI libraries | `react-icons` |
| Animation libraries | `framer-motion` installed but not used in current source; Swiper used for hero carousel; custom IntersectionObserver animations in `SmoothAnimations.jsx` |
| Carousel | `swiper` `^12.1.3` |
| Forms | Native React controlled form in `RequestSample.jsx`; submits by opening WhatsApp URL |
| Validation | Browser `required` fields only; no validation library |
| Database/storage | None found |
| API routes | None found |
| Middleware | None found |
| Environment variables | No `.env*` files found; no `import.meta.env`, `process.env`, or `VITE_` references found |
| Deployment config | No `vercel.json`; likely Vercel auto-detects Vite with npm build output |
| Analytics | `@vercel/analytics` imported in `src/main.jsx` with `<Analytics mode="production" />` |
| Security headers | None configured in repo |
| SEO files | `public/robots.txt`, `public/sitemap.xml`, metadata and JSON-LD in `index.html`, static `public/404.html` |
| Fonts | Local WOFF2 files for Inter and Playfair Display |

## Build, Lint, Test Baseline

| Command | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run build` | Passed |
| `npm test` | Not available; no test script exists |
| Type checking | Not available; project is JavaScript and has no typecheck script |

Build output:

- `dist/index.html`
- `dist/assets/index-CdQFmKh-.css`
- `dist/assets/index-BN94TcbS.js`

Note: `dist/` exists locally but is ignored by `.gitignore`, so generated build files should not be treated as source.

## Route Inventory

Current app routing is handled manually in `src/App.jsx` by checking `window.location.pathname`.

| URL | Purpose | Indexability | Metadata | Retain/update/redirect |
| --- | --- | --- | --- | --- |
| `/` | Main one-page landing page | Indexable via `index.html` robots and sitemap | Full static title, description, canonical, OG, Twitter, JSON-LD | Retain and progressively refactor into stronger B2B homepage |
| `/index.html` | Alternate entry path accepted by app | Not listed in sitemap; likely served by static host | Same `index.html` metadata | Retain during migration or redirect/canonicalize to `/` later |
| `/#home` | Hash anchor to hero | Same page | Same as `/` | Keep initially; later update nav to route-aware structure |
| `/#about` | Hash anchor to about section | Same page | Same as `/` | Keep as compatibility anchor during homepage refactor |
| `/#services` | Hash anchor to Incoterms service section | Same page | Same as `/` | Replace or map into `/export-services` later; keep anchor until redirect/internal links are settled |
| `/#products` | Hash anchor to product section | Same page | Same as `/` | Keep while adding `/products` and product detail pages |
| `/#request-sample` | Hash anchor to WhatsApp sample form | Same page | Same as `/` | Keep while adding `/sample-request` and `/request-quote` |
| `/#contact` | Hash anchor to footer contact | Same page | Same as `/` | Keep while adding `/contact` |
| Any other path | React renders `NotFound`; `public/404.html` also exists for static fallback | `public/404.html` has `noindex, follow`; React NotFound changes `document.title` only | No route-specific meta in React NotFound | Needs proper Vercel routing review before adding multi-page routes |

Target routes from PRD are not implemented yet:

- `/products`, `/products/[slug]`
- `/origins`, `/origins/java-ijen`, `/origins/aceh-gayo`
- `/quality`
- `/processing`, `/processing/[slug]`
- `/export-services`
- `/news`, `/news/[slug]`, `/news/category/[slug]`, `/news/tag/[slug]`
- `/about`
- `/contact`
- `/request-quote`
- `/sample-request`
- `/privacy-policy`
- `/terms-and-conditions`
- Protected `/admin/*` routes

## Component Inventory

| Component/file | Current role | Classification | Notes |
| --- | --- | --- | --- |
| `src/App.jsx` | App composition and manual pathname fallback | Refactor | Needs real route architecture for PRD route tree; preserve existing section order during first migration |
| `src/main.jsx` | React root and Vercel Analytics | Keep with minor revision | Keep analytics unless replaced by approved analytics strategy |
| `src/components/Navbar.jsx` | Fixed nav with hash links and mobile menu | Refactor | Preserve logo/name and visual identity; expand nav per PRD and add emphasized Request a Quote CTA |
| `src/components/FloatingAction.jsx` | WhatsApp floating button and back-to-top | Keep with minor revision | Useful lead/contact affordance; reduce bounce animation if it harms UX/performance |
| `src/components/CoffeeScene3D.jsx` | CSS-based decorative coffee scene | Keep with minor revision | Brandful visual element; review mobile overlap and performance |
| `src/components/SmoothAnimations.jsx` | IntersectionObserver reveal and hover lift effects | Refactor | Broad DOM selectors can be brittle in routed app; keep pattern but scope more safely |
| `src/sections/Hero.jsx` | Hero carousel and CTA | Refactor | Reuse existing hero images; update headline/copy/CTA to PRD |
| `src/sections/About.jsx` | Company story, metrics, why choose Nawasena | Refactor | Contains unverifiable `250+ Partner Farmers`; PRD forbids unsupported claims, so verify or remove |
| `src/sections/Services.jsx` | EXW/FOB/CIF cards | Keep with minor revision | Reframe as Export Services flow; avoid overpromising documentation/logistics |
| `src/sections/Products.jsx` | Hard-coded product categories, modal product list, WhatsApp CTA | Refactor | Must become crawlable product listing/detail pages; preserve product data and images |
| `src/sections/RequestSample.jsx` | Controlled form that opens WhatsApp message | Refactor | Useful current lead flow; future must support qualified inquiry persistence and admin management |
| `src/sections/FAQ.jsx` | FAQ details list | Keep with minor revision | Keep content; later connect with FAQ schema per route where appropriate |
| `src/sections/Footer.jsx` | Contact, social links, map, quick links | Refactor | Add legal links, products, origins, news, export services, privacy, terms; fix `mailto:` mismatch |
| `src/sections/NotFound.jsx` | React-rendered 404 for unknown paths | Refactor | Needs route-aware 404 and metadata handling |
| `src/data/faqs.js` | Static FAQ data | Keep with minor revision | Can migrate to content/data layer later |

## Content and Claims Inventory

| Claim/content | Location | Status |
| --- | --- | --- |
| Java Ijen and Aceh Gayo origins | Hero, Products, metadata, FAQ | Aligns with PRD initial origins |
| Product names and descriptions | `Products.jsx`, `RequestSample.jsx`, JSON-LD ItemList | Preserve and verify specs before publishing as detail pages |
| EXW, FOB, CIF support | `Services.jsx`, FAQ JSON-LD | Needs business/legal verification before expanded export-services page |
| `250+ Partner Farmers` | `About.jsx` | Unverified from repository; must not be displayed unless source-backed |
| Sustainable/ethical sourcing wording | `About.jsx` | Needs verification or softer factual wording |
| Email `export@nawasenaint.web.id` | Metadata, footer visible text | Retain if confirmed |
| Footer link `mailto:info@nawasena.com` | `Footer.jsx` | Mismatch with visible export email; should be corrected in implementation |
| Phone/WhatsApp `+62 817-7935-6312` | Metadata, forms, footer | Retain if confirmed |
| Office address in Jember | Metadata, footer, map | Needs confirmation from business owner |

## Asset Inventory

All existing images should remain available during the first migration. Current source prefers `.webp` in JSX and keeps `.avif` alternatives in `public/images`.

| Asset | Dimensions | Size | Current usage | Recommended future usage | Suggested alt text | Optimization |
| --- | ---: | ---: | --- | --- | --- | --- |
| `/public/images/hero-1.webp` | 1280x720 | 72984B | Hero slide, OG/Twitter image, 404 background | Keep as homepage hero or OG image | Indonesian Arabica green coffee beans prepared for export | Already optimized; keep preload for hero |
| `/public/images/hero-1.avif` | 1280x720 | 69525B | Available alternative | Use in future image component/source set | Indonesian Arabica green coffee beans prepared for export | Already optimized |
| `/public/images/hero2.webp` | 1080x1080 | 49818B | Hero slide | Keep as secondary hero/origin visual | Premium Indonesian green coffee beans for wholesale buyers | Already optimized |
| `/public/images/hero2.avif` | 1080x1080 | 37293B | Available alternative | Use in future source set | Premium Indonesian green coffee beans for wholesale buyers | Already optimized |
| `/public/images/about-main.webp` | 960x1280 | 98418B | About image grid | Keep for About/Quality section | Close-up of Indonesian Arabica coffee beans | Already optimized |
| `/public/images/about-main.avif` | 960x1280 | 95776B | Available alternative | Use in future source set | Close-up of Indonesian Arabica coffee beans | Already optimized |
| `/public/images/about1.webp` | 1080x1080 | 85642B | Not referenced in current source | Candidate for About, News, or origin imagery | Nawasena coffee sourcing activity | Already optimized |
| `/public/images/about1.avif` | 1080x1080 | 77927B | Not referenced | Candidate alternative | Nawasena coffee sourcing activity | Already optimized |
| `/public/images/about2.webp` | 780x1040 | 224318B | About image grid | Keep for sourcing/farmer context if accurate | Indonesian coffee farmers and origin partners | Could review compression; largest portrait among about images |
| `/public/images/about2.avif` | 780x1040 | 202180B | Available alternative | Use in future source set | Indonesian coffee farmers and origin partners | Could review compression |
| `/public/images/about3.webp` | 960x1280 | 60898B | Why Nawasena image | Keep for quality/processing section | Green coffee processing and quality control | Already optimized |
| `/public/images/about3.avif` | 960x1280 | 57319B | Available alternative | Use in future source set | Green coffee processing and quality control | Already optimized |
| `/public/images/full-wash.webp` | 960x1280 | 129578B | Java Ijen Full Wash product | Product detail/listing | Java Ijen full washed Arabica green coffee beans | Already optimized |
| `/public/images/full-wash.avif` | 960x1280 | 130568B | Alternative | Future source set | Java Ijen full washed Arabica green coffee beans | Already optimized |
| `/public/images/semi-wash.webp` | 960x1280 | 182048B | Java Ijen Semi Wash product | Product detail/listing | Java Ijen semi-washed Arabica green coffee beans | Review compression |
| `/public/images/semi-wash.avif` | 960x1280 | 181403B | Alternative | Future source set | Java Ijen semi-washed Arabica green coffee beans | Review compression |
| `/public/images/natural-clasic.webp` | 960x1280 | 119288B | Java Ijen Natural Classic product | Product detail/listing | Java Ijen natural classic Arabica green coffee beans | Already optimized; consider spelling consistency `classic` |
| `/public/images/natural-clasic.avif` | 960x1280 | 121831B | Alternative | Future source set | Java Ijen natural classic Arabica green coffee beans | Already optimized |
| `/public/images/natural-anaerob.webp` | 960x1280 | 136796B | Java Ijen category and product | Featured product/origin | Java Ijen natural anaerobic Arabica green coffee beans | Already optimized; consider naming consistency `anaerobic` |
| `/public/images/natural-anaerob.avif` | 960x1280 | 142176B | Alternative | Future source set | Java Ijen natural anaerobic Arabica green coffee beans | Already optimized |
| `/public/images/Java-Natural-Anaerob.webp` | 720x1280 | 137140B | Single variety Java product | Product detail/listing | Single variety Java natural anaerobic Arabica green coffee beans | Already optimized; consider lowercase filename later only if safe |
| `/public/images/Java-Natural-Anaerob.avif` | 720x1280 | 139969B | Alternative | Future source set | Single variety Java natural anaerobic Arabica green coffee beans | Already optimized |
| `/public/images/orange-bourbon.webp` | 720x1280 | 133876B | Orange Bourbon product | Product detail/listing | Orange Bourbon natural anaerobic Arabica green coffee beans | Already optimized |
| `/public/images/orange-bourbon.avif` | 720x1280 | 137834B | Alternative | Future source set | Orange Bourbon natural anaerobic Arabica green coffee beans | Already optimized |
| `/public/images/honey-ijen.webp` | 960x1280 | 105412B | Java Ijen Honey product | Product detail/listing | Java Ijen honey process Arabica green coffee beans | Already optimized |
| `/public/images/honey-ijen.avif` | 960x1280 | 109843B | Alternative | Future source set | Java Ijen honey process Arabica green coffee beans | Already optimized |
| `/public/images/gayo-fullwashed.webp` | 720x1280 | 59632B | Aceh Gayo category and product | Origin/product detail | Aceh Gayo full washed Arabica green coffee beans | Already optimized |
| `/public/images/gayo-fullwashed.avif` | 720x1280 | 62633B | Alternative | Future source set | Aceh Gayo full washed Arabica green coffee beans | Already optimized |
| `/public/images/gayo-semiwash.webp` | 720x1280 | 68974B | Aceh Gayo Semi Washed product | Product detail/listing | Aceh Gayo semi-washed Arabica green coffee beans | Already optimized |
| `/public/images/gayo-semiwash.avif` | 720x1280 | 72373B | Alternative | Future source set | Aceh Gayo semi-washed Arabica green coffee beans | Already optimized |
| `/public/images/gayo-naturalclasic.webp` | 955x1280 | 87728B | Aceh Gayo Natural Classic product | Product detail/listing | Aceh Gayo natural classic Arabica green coffee beans | Already optimized; consider spelling consistency |
| `/public/images/gayo-naturalclasic.avif` | 955x1280 | 92988B | Alternative | Future source set | Aceh Gayo natural classic Arabica green coffee beans | Already optimized |
| `/public/images/gayo-wine.webp` | 1280x901 | 104624B | Aceh Gayo Wine Strong product | Product detail/listing | Aceh Gayo wine process Arabica green coffee beans | Already optimized |
| `/public/images/gayo-wine.avif` | 1280x901 | 108850B | Alternative | Future source set | Aceh Gayo wine process Arabica green coffee beans | Already optimized |
| `/public/images/farmer-exwork.webp` | 1600x695 | 37250B | EXW service card | Export services or sourcing flow | Coffee sourcing partner for EXW export discussion | Already optimized |
| `/public/images/farmer-exwork.avif` | 1600x695 | 29679B | Alternative | Future source set | Coffee sourcing partner for EXW export discussion | Already optimized |
| `/public/images/port.webp` | 1600x1067 | 213982B | FOB service card | Export services/logistics visual | Port logistics for Indonesian coffee export | Review compression |
| `/public/images/port.avif` | 1600x1067 | 210229B | Alternative | Future source set | Port logistics for Indonesian coffee export | Review compression |
| `/public/images/cif.webp` | 918x551 | 68728B | CIF service card | Export services/logistics visual | Freight and insurance discussion for coffee export | Already optimized |
| `/public/images/cif.avif` | 918x551 | 73944B | Alternative | Future source set | Freight and insurance discussion for coffee export | Already optimized |
| `/public/images/kopi-1.webp` | 900x1600 | 123268B | Not referenced | Candidate for product, quality, or article imagery | Indonesian green coffee beans sample lot | Already optimized |
| `/public/images/kopi-1.avif` | 900x1600 | 122701B | Not referenced | Future source set | Indonesian green coffee beans sample lot | Already optimized |
| `/public/icon.jpeg` | 1042x1042 | 54113B | Favicon link | Keep as existing logo/icon unless brand update is approved | PT. Nawasena International Group icon | Already optimized |
| `/public/icon.png` | 1042x1042 | 126922B | Apple touch icon, schema logo | Keep as schema/logo asset | PT. Nawasena International Group logo icon | Already optimized |
| `/public/favicon.svg` | SVG | 9522B | Present, not referenced in `index.html` | Candidate favicon alternative | PT. Nawasena International Group favicon | Review usage |
| `/public/icons.svg` | SVG | 5031B | Present, not referenced in current source | Keep until icon usage is confirmed | Icon sprite | Unused currently |
| `src/assets/hero.png` | 343x361 | 44919B | Not referenced | Candidate remove only after confirming no historical use | Nawasena hero illustration or legacy asset | Unused currently |
| `src/assets/vite.svg` | SVG | 8709B | Not referenced | Candidate remove after migration cleanup | Vite logo | Unused template asset |

## Product Inventory

Current products are hard-coded in `src/sections/Products.jsx` and duplicated as options in `src/sections/RequestSample.jsx`.

Java Ijen:

- Green Bean Arabica Full Wash Grade 1
- Green Bean Arabica Semi Wash Grade 1
- Green Bean Arabica Natural Classic Grade 1
- Green Bean Arabica Natural Anaerob Specialty
- Single Variety Java Natural Anaerob Specialty
- Single Variety Orange Bourbon Natural Anaerob Specialty
- Arabica Java Ijen Honey

Aceh Gayo:

- Arabica Aceh Gayo Full Washed
- Arabica Aceh Gayo Semi Washed
- Arabica Aceh Gayo Natural Classic
- Arabica Aceh Gayo Wine Strong

Missing PRD fields in current products:

- Slug
- Process as structured field
- Grade as structured field for all products
- Variety
- Altitude
- Moisture target
- Screen size
- Defect count
- Harvest/crop cycle
- Taste notes
- Supply status
- Packaging
- MOQ
- Sample availability
- Related origin/processing/articles
- SEO metadata
- Verification status

## Form Inventory

### Request Sample

File: `src/sections/RequestSample.jsx`

Current fields:

- Name, required
- Company, optional
- Type, required
- Country, required
- Alamat/address, required
- Product Sample, required
- Quantity, required

Submission behavior:

- Prevents default submit.
- Builds a WhatsApp message.
- Opens `https://wa.me/6281779356312?...` in a new tab.
- No server persistence.
- No anti-spam protection.
- No admin inquiry management.
- No privacy consent checkbox.
- No analytics event instrumentation found.

### Product Inquiry

File: `src/sections/Products.jsx`

Behavior:

- Each product modal card has a WhatsApp CTA with product name.
- No form fields besides message text.
- No server persistence.

## Metadata and SEO Baseline

Current metadata is static in `index.html`.

| SEO item | Current state |
| --- | --- |
| Title | `Indonesian Arabica Green Coffee Beans Exporter | PT. Nawasena International Group` |
| Description | Present and relevant to Indonesian Arabica green coffee beans, Java Ijen, Aceh Gayo |
| Keywords meta | Present |
| Robots meta | `index, follow` on homepage |
| Canonical | `https://www.nawasenaint.web.id/` |
| Open Graph | Present for website, site name, title, description, URL, image |
| Twitter card | Present as `summary_large_image` |
| JSON-LD | Organization, LocalBusiness, ItemList, FAQPage |
| Sitemap | `public/sitemap.xml` contains only homepage |
| Robots | Allows all and points to sitemap |
| 404 | Static `public/404.html` has `noindex, follow`; React NotFound only changes document title |
| Internal links | Hash links for sections and external links to WhatsApp, LinkedIn, Instagram, Google Maps |
| Indexable page count | 1 indexable URL in sitemap |
| Structured data risk | FAQ JSON-LD is manually duplicated from FAQ content; product ItemList has names only; claims need verification |
| Duplicate metadata | All current paths that serve SPA shell would share homepage metadata unless handled by static 404 or future routing |

Broken link observations from repository scan:

- Footer email anchor uses `mailto:info@nawasena.com` while visible text says `export@nawasenaint.web.id`.
- Hash links exist for current sections and are valid in the single-page app.
- Unknown paths render NotFound in React, but production host behavior needs Vercel verification.

## Analytics Inventory

Current analytics:

- `@vercel/analytics` dependency.
- `<Analytics mode="production" />` in `src/main.jsx`.

No Google Analytics, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag, custom events, or conversion tracking found.

## API and Data Inventory

No API routes, server code, database schema, ORM, CMS, authentication, or storage integration are present.

Static data exists in:

- `src/data/faqs.js`
- Hard-coded arrays inside `Products.jsx`
- Hard-coded arrays inside `RequestSample.jsx`
- Hard-coded `incoterms` inside `Services.jsx`
- JSON-LD inside `index.html`

## Vercel and Deployment Inventory

No `vercel.json` exists in the repository.

Likely current Vercel settings:

- Framework preset: Vite or other static build auto-detection.
- Build command: `npm run build`.
- Output directory: `dist`.
- Install command: default npm install.

Unverified from repository:

- Production branch configured in Vercel.
- Environment variables configured in Vercel dashboard.
- Redirects/rewrites configured in Vercel dashboard.
- Custom domain and DNS settings.
- Vercel Analytics project settings.
- Preview deployment protection settings.

## Items to Preserve

- Existing domain and production deployment strategy.
- Current logo/icon assets: `icon.jpeg`, `icon.png`, `favicon.svg`.
- Current local fonts.
- Coffee visual identity: dark brown, coffee tan, green accent, warm background.
- Hero imagery and coffee-product imagery.
- Java Ijen and Aceh Gayo product catalogue as source content.
- WhatsApp contact pathway as a fallback lead channel.
- Vercel Analytics unless replaced by an approved measurement plan.
- Existing SEO verification meta tag unless Search Console ownership changes.

## Items to Revise

- Manual pathname routing into a route architecture that supports crawlable pages.
- Static metadata into per-route metadata.
- Product modal UX into crawlable listing and detail pages.
- Sample request form into persisted inquiry flow with privacy and anti-spam controls.
- Services section into full export-services flow.
- Footer legal/navigation completeness.
- Unverified claims and superlatives.
- Image alt text consistency.
- Sitemap to include all indexable routes.
- Robots and noindex behavior for admin, drafts, and previews.
- Structured data per page.
- Security headers.
- Vercel redirects and route fallbacks.

## Items Potentially Redundant or Unused

These should not be removed until after migration review:

- `src/assets/vite.svg`: template asset, unused.
- `src/assets/hero.png`: unused in current source.
- `/public/images/about1.*`: not referenced in current source.
- `/public/images/kopi-1.*`: not referenced in current source.
- `/public/icons.svg`: present but not referenced in current source.
- `framer-motion`: dependency installed but no import found in current source.

## Assumptions Not Verifiable From Repository

- The live production website exactly matches this repository and latest build.
- The active Vercel project uses `main` as production branch.
- Vercel dashboard does not define hidden environment variables, redirects, headers, or build overrides.
- All current business claims are approved and factual.
- `250+ Partner Farmers` is source-backed.
- EXW, FOB, and CIF support are legally and operationally confirmed.
- Phone, email, address, LinkedIn, Instagram, and Google Maps embed are current.
- The 200+ MT current harvest supply capacity referenced in the PRD has been internally confirmed.
- Product specifications such as grade, moisture, screen size, defect count, altitude, and availability are available from business records.
- Admin CMS user roles, audit requirements, and editorial workflow details are finalized.

