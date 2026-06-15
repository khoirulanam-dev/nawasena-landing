# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Corporate B2B Website Refactor & SEO Expansion
### PT. Nawasena International Group

**Document status:** Approved for implementation  
**Target executor:** OpenAI Codex  
**Primary domain:** https://www.nawasenaint.web.id  
**Deployment platform:** Vercel  
**Project type:** Progressive refactor of an existing production website  
**Primary business objective:** Brand positioning, buyer trust, organic search visibility, and qualified B2B lead generation  
**Primary audience:** International coffee importers, roasters, distributors, wholesalers, coffee shop chains, and institutional buyers  
**Initial target origins:** Java Ijen and Aceh Gayo  

---

# 1. Executive Summary

PT. Nawasena International Group already has a working corporate landing page deployed to Vercel. This project must **not** rebuild the website from zero.

The objective is to progressively refactor the existing website into a stronger corporate B2B platform for Indonesian green coffee beans while retaining the current project foundation, existing visual identity, usable components, existing images, domain, deployment configuration, and existing content that remains relevant.

The expanded website must provide:

1. A stronger corporate B2B homepage.
2. Dedicated product and origin pages.
3. Transparent coffee specifications.
4. Harvest-season supply information.
5. Quality-control and export-service information.
6. A News & Insights section for SEO and topical authority.
7. A secure admin CMS.
8. Neon PostgreSQL integration for dynamic content.
9. Qualified buyer inquiry and quotation forms.
10. Complete technical SEO, structured data, sitemap, and performance optimization.
11. Safe production migration through Git branches and Vercel Preview Deployments.

The primary positioning is:

> **An Indonesian green coffee sourcing and export partner specializing in Java Ijen and Aceh Gayo for global roasters, importers, distributors, and wholesale buyers.**

---

# 2. Non-Negotiable Project Principles

Codex must follow these principles throughout implementation.

## 2.1 Do not rebuild from zero

Before writing or replacing major code, Codex must audit the existing repository.

Codex must identify:

- Existing framework and version.
- Existing route structure.
- Existing components.
- Existing reusable sections.
- Existing images and their locations.
- Existing typography, colors, spacing, and brand tokens.
- Existing metadata.
- Existing deployment configuration.
- Existing environment variables.
- Existing analytics.
- Existing API routes.
- Existing forms.
- Existing SEO-related files.
- Existing security controls.

The implementation must reuse working code where reasonable.

## 2.2 Preserve existing assets

Existing images must remain available and should be reused where relevant.

Do not delete or replace existing images merely to create a new design.

Existing images should be:

- Cataloged.
- Reassigned to appropriate sections.
- Renamed only when safe.
- Optimized with Next.js Image.
- Given descriptive alt text.
- Converted to WebP or AVIF where beneficial.
- Kept in `/public` during the first migration unless there is a clear technical reason to move them.

## 2.3 Preserve brand identity

Keep the current:

- Logo.
- Main color palette.
- Overall visual tone.
- Coffee-related visual identity.
- Existing design elements that still appear professional.

The refactor may improve hierarchy, typography, spacing, responsiveness, CTA placement, and information density without turning the site into an unrelated design.

## 2.4 Avoid production disruption

Do not make direct unreviewed changes to the production branch.

Recommended branch:

```bash
git checkout -b refactor/corporate-b2b
```

All major changes must be tested through Vercel Preview Deployment before merging into production.

## 2.5 Preserve indexed URLs

Existing public URLs must not be removed without evaluating their SEO value.

When a URL changes:

- Add a permanent 301 redirect.
- Preserve canonical behavior.
- Avoid redirect chains.
- Do not redirect unrelated pages to the homepage.

## 2.6 No unsupported business claims

Do not display unverified claims, certifications, countries served, buyer totals, capacity, or quality figures.

All numeric claims must be editable, source-backed, and include a verification date where appropriate.

---

# 3. Business Goals

## 3.1 Primary goals

1. Position PT. Nawasena International Group as a credible Indonesian green coffee B2B supplier and export partner.
2. Increase trust from international buyers.
3. Increase organic visibility for commercially relevant coffee keywords.
4. Build topical authority around:
   - Indonesian green coffee beans.
   - Java Ijen.
   - Aceh Gayo.
   - Indonesian specialty coffee.
   - Coffee grading.
   - Coffee processing.
   - Coffee export.
   - Wholesale coffee sourcing.
5. Generate qualified quotation and sample requests.
6. Make content and seasonal supply information manageable without source-code edits.

## 3.2 Secondary goals

1. Improve mobile usability.
2. Improve Core Web Vitals.
3. Improve crawlability and indexation.
4. Strengthen internal linking.
5. Support future CRM and n8n integration.
6. Support bilingual content.
7. Support future origin and product expansion.

---

# 4. Success Metrics

## 4.1 SEO metrics

- Growth in non-branded impressions.
- Growth in non-branded organic clicks.
- More indexed high-quality pages.
- Higher number of keywords in Top 10 and Top 20.
- Growth in organic landing pages receiving traffic.
- Growth in referring domains.
- Zero major indexing errors.
- Zero major structured-data errors.
- No accidental indexing of admin, preview, or draft pages.

## 4.2 Brand metrics

- Growth in searches for “Nawasena”.
- Growth in direct traffic.
- Growth in returning visitors.
- Growth in catalogue views or downloads.
- Growth in visits to About, Quality, and Export Services pages.
- Growth in LinkedIn or WhatsApp engagement from website visitors.

## 4.3 Business metrics

- Number of quotation requests.
- Number of sample requests.
- Number of qualified buyer inquiries.
- Inquiry country distribution.
- Requested volume.
- Requested origin and process.
- Conversion rate per commercial landing page.
- Response time to inquiries.

## 4.4 Technical metrics

- Lighthouse performance target: at least 85 on mobile for primary pages.
- Lighthouse SEO target: at least 95.
- Lighthouse accessibility target: at least 90.
- No critical security findings.
- No broken internal links.
- No production downtime during migration.
- No duplicate title or description on primary pages.

---

# 5. Target Users

## 5.1 International importer

Needs:

- Company credibility.
- Origin availability.
- Coffee specifications.
- Export capability.
- Incoterm and documentation information.
- Shipment and sample process.
- Contact and quotation access.

## 5.2 Specialty roaster

Needs:

- Origin and process.
- Taste profile.
- Variety.
- Altitude.
- Moisture.
- Defect count.
- Screen size.
- Sample availability.
- Minimum order quantity.
- Current crop availability.

## 5.3 Distributor or wholesaler

Needs:

- Supply capacity.
- Product consistency.
- Packaging options.
- Commercial volume.
- Lead time.
- Current availability.
- Reliable communication.

## 5.4 Local institutional buyer

Needs:

- Product comparison.
- Wholesale pricing inquiry.
- Company information.
- Shipping availability.
- Contact access.

## 5.5 Internal admin/editor

Needs:

- Secure login.
- Article management.
- Product management.
- Harvest and supply updates.
- Media management.
- Inquiry management.
- SEO fields.
- Audit trail.

---

# 6. Scope

## 6.1 In scope

- Audit of existing codebase.
- Progressive homepage refactor.
- Expanded navigation.
- Corporate B2B content sections.
- Dedicated product pages.
- Dedicated origin pages.
- Quality and processing pages.
- Export services page.
- News & Insights.
- Neon PostgreSQL.
- Drizzle ORM.
- Secure admin CMS.
- Product and supply data management.
- Article management.
- Image and media metadata.
- Quotation and inquiry forms.
- SEO metadata.
- Structured data.
- Sitemap.
- Robots.
- RSS.
- Redirect management.
- Analytics hooks.
- Security controls.
- Automated tests.
- Preview-deployment QA.
- Production migration documentation.

## 6.2 Out of scope for initial release

- Full e-commerce checkout.
- Online payment gateway.
- Buyer account portal.
- Real-time shipping rates.
- Automated export-document generation.
- Complete CRM replacement.
- Warehouse-management system.
- Inventory accounting.
- AI-generated article auto-publishing without review.
- Multi-vendor marketplace.
- Native mobile application.

These may be integrated later.

---

# 7. Existing Website Audit Requirement

Before implementation, Codex must create an audit report.

Recommended output file:

```text
docs/EXISTING_WEBSITE_AUDIT.md
```

The audit must include:

## 7.1 Technical inventory

- Framework.
- Framework version.
- Package manager.
- Build scripts.
- UI libraries.
- Animation libraries.
- Form libraries.
- Validation libraries.
- Existing database or storage integration.
- Current deployment configuration.
- Current environment variables.
- Current middleware.
- Current API routes.
- Current security headers.
- Current analytics.

## 7.2 Route inventory

For every current route:

- URL.
- Purpose.
- Indexability.
- Existing metadata.
- Whether it will be retained.
- Whether it will be updated.
- Whether it requires redirect.

## 7.3 Component inventory

Classify components as:

- Keep unchanged.
- Keep with minor revision.
- Refactor.
- Replace.
- Remove only if redundant.

## 7.4 Asset inventory

For every major existing image:

- Path.
- Dimensions.
- Format.
- File size.
- Current usage.
- Recommended future usage.
- Suggested alt text.
- Whether optimization is required.

## 7.5 SEO baseline

- Current title.
- Current description.
- Current headings.
- Canonical status.
- Sitemap status.
- Robots status.
- Structured data.
- Open Graph.
- Current internal links.
- Current indexable-page count.
- Broken links.
- Duplicate metadata.

Codex must not begin destructive refactoring before completing this audit.

---

# 8. Information Architecture

## 8.1 Main navigation

Recommended navigation:

```text
Home
Products
Origins
Quality
Export Services
News & Insights
About
Contact
Request a Quote
```

“Request a Quote” must be visually emphasized as the primary CTA.

## 8.2 Public route structure

```text
/
├── /products
│   └── /products/[slug]
├── /origins
│   ├── /origins/java-ijen
│   └── /origins/aceh-gayo
├── /quality
├── /processing
│   └── /processing/[slug]
├── /export-services
├── /news
│   ├── /news/[slug]
│   ├── /news/category/[slug]
│   └── /news/tag/[slug]
├── /about
├── /contact
├── /request-quote
├── /sample-request
├── /privacy-policy
└── /terms-and-conditions
```

## 8.3 Private routes

```text
/admin/login
/admin
/admin/articles
/admin/articles/new
/admin/articles/[id]
/admin/products
/admin/origins
/admin/supply
/admin/media
/admin/inquiries
/admin/redirects
/admin/settings
/admin/users
/admin/audit-logs
```

All `/admin` routes must be protected and noindexed.

---

# 9. Homepage Refactor Requirements

The homepage must use the existing website as its foundation.

## 9.1 Hero section

Retain an appropriate existing hero image if quality is sufficient.

Recommended headline:

> Indonesian Green Coffee Beans for Global Roasters and Importers

Recommended supporting copy:

> PT. Nawasena International Group supplies Indonesian Arabica green coffee beans from Java Ijen and Aceh Gayo for roasters, importers, distributors, and wholesale buyers.

Primary CTA:

```text
Request Current Availability
```

Secondary CTA:

```text
Explore Our Coffees
```

## 9.2 Corporate metrics

Display no more than four primary metrics above the fold or immediately after the hero.

Initial metrics:

- Current harvest supply capacity.
- Number of primary origins.
- Number of available variants.
- Number of processing methods.

Example:

```text
200+ MT
Current Harvest Supply Capacity

2
Primary Indonesian Origins

6
Available Coffee Variants

4
Processing Methods
```

The capacity must never be presented as timeless annual production.

Required supporting note:

> Figures are based on the current crop cycle and are subject to origin, lot specification, harvest conditions, and current availability.

Display:

- Crop cycle.
- Last verified date.

## 9.3 Featured origins

Display:

- Java Ijen.
- Aceh Gayo.

Each card must:

- Use an existing relevant image.
- Have a short factual description.
- Link to a dedicated origin page.
- Avoid opening only a modal.

## 9.4 Product portfolio

Retain existing coffee products but upgrade cards.

Each card should support:

- Product name.
- Origin.
- Process.
- Grade.
- Variety.
- Altitude.
- Moisture target.
- Screen size.
- Availability status.
- CTA to product detail.

Do not show a field if it is unknown or unverified.

## 9.5 Seasonal availability

Add a section titled:

```text
Current Harvest Availability
```

Support statuses:

- Available.
- Limited.
- By request.
- Upcoming.
- Out of season.
- Unavailable.

The status must be managed from admin and include a verification date.

## 9.6 Quality section

Include factual quality-control information:

- Moisture target.
- Defect count.
- Screen size.
- Grade.
- Lot-based specifications.
- Sample availability.
- Pre-shipment inspection.

Use existing images of beans, sorting, moisture meter, weighing, packaging, or laboratory work if available.

## 9.7 Export-service section

Display the buyer flow:

1. Inquiry.
2. Specification confirmation.
3. Sample evaluation.
4. Quotation.
5. Contract and payment.
6. Quality preparation.
7. Shipment.
8. Documentation.

## 9.8 Why Nawasena

Use differentiators that can be supported:

- Origin-focused sourcing.
- Transparent lot specifications.
- Flexible wholesale discussions.
- Sample support.
- Export communication support.
- Responsive buyer handling.

Do not use unverifiable superlatives such as “number one”, “largest”, or “best”.

## 9.9 Latest News & Insights

Display three latest published articles.

Each card:

- Featured image.
- Category.
- Title.
- Excerpt.
- Publication date.
- Reading time.
- Article link.

## 9.10 Lead CTA

Add a strong quotation CTA before the footer.

Example:

```text
Looking for Indonesian green coffee beans?
Request current availability, specifications, samples, and quotation.
```

## 9.11 Footer

Footer must include:

- Legal company name.
- Short company description.
- Products.
- Origins.
- News.
- Export services.
- Contact.
- Office location.
- Email.
- WhatsApp.
- LinkedIn.
- Privacy policy.
- Terms.
- Copyright year.

---

# 10. Harvest Capacity Requirements

## 10.1 Correct terminology

Use:

```text
Harvest Season Supply Capacity
```

or:

```text
Current Harvest Supply Capacity
```

Do not use “Annual Production Capacity” unless the company directly produces the entire stated capacity.

## 10.2 Required capacity attributes

Each capacity record must support:

- Crop cycle.
- Harvest label.
- Origin.
- Process.
- Grade.
- Capacity in metric tons.
- Capacity type.
- Valid-from date.
- Valid-until date.
- Availability status.
- Last-verified timestamp.
- Internal source note.
- Public disclaimer.
- Publication status.

## 10.3 Capacity types

Supported values:

- `seasonal_supply`
- `monthly_fulfillment`
- `available_inventory`
- `committed_capacity`
- `production_capacity`

Default public value for the current requirement:

```text
seasonal_supply
```

## 10.4 Display rule

The public site may show:

```text
200+ MT
Current Harvest Supply Capacity
Crop Cycle 2026/2027
Last Verified June 2026
```

Only after internal confirmation.

## 10.5 Disclaimer

Required:

> Supply figures are estimates based on the current sourcing network and crop cycle. Final availability depends on origin, process, grade, lot specification, harvest conditions, and prior allocation.

---

# 11. Product Requirements

## 11.1 Product listing page

The product listing page must support filtering by:

- Origin.
- Process.
- Grade.
- Availability.

No client-side-only content that prevents crawling.

## 11.2 Product detail page

Each product page should support:

- Product title.
- Slug.
- Short description.
- Long description.
- Origin.
- Region.
- Process.
- Variety.
- Altitude.
- Grade.
- Moisture.
- Screen size.
- Defect count.
- Harvest/crop cycle.
- Taste notes.
- Supply status.
- Packaging.
- MOQ, when approved for public display.
- Sample availability.
- Product images.
- Related origin.
- Related processing method.
- Related articles.
- Quotation CTA.

## 11.3 Product schema

Use valid `Product` structured data only when fields are factual.

Do not add fake prices or aggregate ratings.

If no public price exists, omit the offer price.

---

# 12. Origin Requirements

## 12.1 Initial origins

- Java Ijen.
- Aceh Gayo.

## 12.2 Origin page fields

- Origin name.
- Slug.
- Region.
- Province.
- Country.
- Geographic description.
- Altitude range.
- Typical varieties.
- Available processes.
- Typical profile.
- Harvest information.
- Current availability.
- Related products.
- Related articles.
- Existing origin images.
- Map or geographic visual when feasible.
- SEO title.
- SEO description.

## 12.3 Content rule

Avoid generic copied origin descriptions.

Content should include Nawasena-specific sourcing context where available.

---

# 13. Quality and Processing Requirements

## 13.1 Quality page

The quality page should explain:

- Lot specification.
- Moisture.
- Screen size.
- Defect count.
- Grade.
- Sampling.
- Sorting.
- Pre-shipment check.
- Packaging.
- Traceability level currently available.

## 13.2 Processing pages

Initial processing methods:

- Natural.
- Natural anaerobic.
- Full washed.
- Semi-washed.

Each processing page:

- Explains the process.
- Explains likely impact on cup profile.
- Links to relevant products.
- Links to relevant articles.
- Avoids absolute taste guarantees.

---

# 14. Export Services Requirements

The export-services page should include:

- Buyer inquiry process.
- Product and specification matching.
- Sample procedure.
- Quotation procedure.
- Incoterm discussion.
- Payment-term discussion.
- Packaging options.
- Quality preparation.
- Shipping coordination.
- Export documentation support.
- Destination and logistics disclaimer.
- Contact CTA.

Do not promise services or documentation that the company cannot legally provide.

---

# 15. News & Insights Requirements

## 15.1 Purpose

The News & Insights section exists to:

- Build topical authority.
- Rank for informational and commercial-intent keywords.
- Support product and origin pages through internal linking.
- Show industry expertise.
- Build buyer trust.
- Support brand positioning.

## 15.2 Initial categories

- Buyer Guide.
- Coffee Origins.
- Processing.
- Quality & Grading.
- Export & Logistics.
- Market Insights.
- Harvest Updates.
- Company News.

## 15.3 Article fields

Each article must support:

- Internal ID.
- Title.
- Slug.
- Excerpt.
- Content.
- Featured image.
- Featured image alt text.
- Author.
- Category.
- Tags.
- Primary keyword.
- Secondary keywords.
- Meta title.
- Meta description.
- Canonical URL override.
- Open Graph title.
- Open Graph description.
- Open Graph image.
- Language.
- Translation-group ID.
- Status.
- Published time.
- Updated time.
- Scheduled time.
- References.
- Reading time.
- Related products.
- Related origins.
- Related articles.

## 15.4 Article statuses

- Draft.
- In review.
- Approved.
- Scheduled.
- Published.
- Archived.

## 15.5 Publishing workflow

```text
Draft → Review → Approved → Scheduled/Published → Updated/Archived
```

The admin must not accidentally expose drafts.

## 15.6 Article-page requirements

Each article page must contain:

- H1 title.
- Author.
- Published date.
- Updated date if applicable.
- Category.
- Featured image.
- Descriptive alt text.
- Main content.
- Sources or references where relevant.
- Related products.
- Related articles.
- Contextual CTA.
- Breadcrumb.
- Article structured data.

## 15.7 Content quality rule

Do not mass-publish low-value AI content.

Every article must include at least one useful original element, such as:

- Nawasena sourcing insight.
- Product specification.
- Original photograph.
- Internal experience.
- Buyer-oriented table.
- Quality-control explanation.
- Harvest context.
- Export workflow knowledge.
- Internal comparison.
- Company case study.

AI assistance is allowed, but publication requires human review.

## 15.8 Initial content clusters

### Buyer and import guide

- How to Import Green Coffee Beans from Indonesia.
- How to Choose an Indonesian Coffee Exporter.
- Green Coffee Sample Evaluation Guide.
- FOB vs CIF for Coffee Importers.
- Documents Commonly Required for Coffee Import.

### Java Ijen

- Java Ijen Coffee: Origin, Altitude, and Profile.
- Java Ijen Natural vs Full Washed.
- Java Ijen Green Coffee Beans for Roasters.
- Understanding Java Ijen Anaerobic Coffee.
- Java Ijen Harvest and Availability Guide.

### Aceh Gayo

- Aceh Gayo Coffee: Complete Buyer Guide.
- Aceh Gayo Full Washed vs Semi-Washed.
- Aceh Gayo Grade 1 Specifications.
- Gayo Varieties and Growing Altitude.
- How to Source Aceh Gayo Coffee in Bulk.

### Quality

- What Does Grade 1 Green Coffee Mean?
- Green Coffee Moisture Content Explained.
- Screen 17/18 Coffee Beans Explained.
- Understanding Coffee Defect Count.
- How Green Coffee Samples Are Evaluated.

### Processing

- Natural vs Washed vs Semi-Washed Coffee.
- How Anaerobic Coffee Is Processed.
- Indonesian Wet-Hulled Coffee Explained.
- Coffee Fermentation and Flavor Development.
- Choosing a Coffee Process for a Roast Profile.

---

# 16. Language and International SEO

## 16.1 Language strategy

English should be the primary language for international buyer acquisition.

The system must be translation-ready for Indonesian.

Recommended structure:

```text
/news/[slug]
/id/news/[slug]
```

Alternatively, retain the project’s existing i18n pattern if already implemented correctly.

## 16.2 Translation requirements

- Separate translated URLs.
- Separate metadata.
- Proper `hreflang`.
- `en`.
- `id`.
- `x-default`.
- No mixed-language article body.
- Translation relationship stored in database.

## 16.3 MVP rule

If full bilingual implementation would delay launch, English may launch first, but the database and route architecture must not block Indonesian translations later.

---

# 17. Admin CMS Requirements

## 17.1 Admin dashboard

Display:

- Published articles.
- Draft articles.
- Scheduled articles.
- Current crop cycle.
- Current harvest supply capacity.
- Product availability summary.
- New inquiries.
- Unread inquiries.
- Recent content changes.
- Recent admin activity.

## 17.2 Article management

Admin must support:

- Create.
- Edit.
- Preview.
- Review.
- Approve.
- Schedule.
- Publish.
- Unpublish.
- Archive.
- Duplicate.
- Delete with confirmation.
- SEO preview.
- Slug validation.
- Featured image selection.
- Related-content selection.

## 17.3 Product management

Admin must support:

- Create.
- Edit.
- Publish.
- Unpublish.
- Product specifications.
- Availability.
- Crop cycle.
- Related origin.
- Images.
- SEO fields.

## 17.4 Origin management

Admin must support:

- Create.
- Edit.
- Publish.
- Unpublish.
- Origin information.
- Images.
- Related products.
- SEO fields.

## 17.5 Harvest and supply management

Admin must support:

- Crop-cycle creation.
- Capacity values.
- Origin allocation.
- Process.
- Grade.
- Availability.
- Verification date.
- Public note.
- Internal source note.
- Publication toggle.

## 17.6 Media management

MVP requirements:

- Reuse existing `/public` assets.
- Store media metadata in database.
- Upload new article media to supported object storage.
- Save URL.
- Save alt text.
- Save caption.
- Save dimensions.
- Save MIME type.
- Save file size.
- Prevent unsafe file types.
- Prevent oversized uploads.

## 17.7 Inquiry management

Admin must support:

- List inquiries.
- View details.
- Status update.
- Internal note.
- Export CSV.
- Mark spam.
- Mark contacted.
- Mark qualified.
- Mark closed.

## 17.8 Redirect management

Admin or configuration must support:

- Source path.
- Destination path.
- Redirect type.
- Active status.
- Notes.
- Created timestamp.

Only authorized admin users may edit redirects.

## 17.9 User roles

Minimum roles:

- `super_admin`
- `admin`
- `editor`

Permissions:

### Super admin

- All access.
- User management.
- Settings.
- Redirects.
- Audit logs.

### Admin

- Content, products, origins, supply, inquiries.
- Publish access.
- No super-admin deletion.

### Editor

- Create and edit articles.
- Submit for review.
- Cannot publish unless explicitly permitted.
- No settings access.

---

# 18. Database Architecture

## 18.1 Database

Use:

```text
Neon PostgreSQL
```

## 18.2 ORM

Use:

```text
Drizzle ORM
```

Reuse an existing ORM only if the current repository already has a stable implementation and replacing it would add unnecessary risk.

## 18.3 Core tables

Recommended tables:

```text
users
authors
articles
article_translations
categories
tags
article_tags
article_products
article_origins
products
product_translations
product_specs
origins
origin_translations
processing_methods
supply_capacities
media
inquiries
inquiry_notes
redirects
site_settings
audit_logs
```

## 18.4 Supply capacity schema

Recommended fields:

```text
id
origin_id
crop_cycle
harvest_label
capacity_mt
capacity_type
process
grade
availability_status
valid_from
valid_until
last_verified_at
internal_source_note
public_note
is_published
created_at
updated_at
```

## 18.5 Article schema

Recommended fields:

```text
id
translation_group_id
language
title
slug
excerpt
content_json
content_html
featured_image_id
author_id
category_id
primary_keyword
meta_title
meta_description
canonical_url
og_title
og_description
og_image_id
status
scheduled_at
published_at
updated_at
created_at
created_by
updated_by
```

## 18.6 Product schema

Recommended fields:

```text
id
slug
origin_id
processing_method_id
name
short_description
description
variety
altitude_min
altitude_max
grade
moisture_max
screen_size
defect_min
defect_max
taste_notes
packaging
moq
crop_cycle
availability_status
featured_image_id
is_published
meta_title
meta_description
created_at
updated_at
```

## 18.7 Inquiry schema

Recommended fields:

```text
id
company_name
contact_name
email
whatsapp
country
buyer_type
origin_interest
process_interest
required_volume
volume_unit
target_price
preferred_incoterm
destination_port
message
source_page
utm_source
utm_medium
utm_campaign
status
internal_note
created_at
updated_at
```

## 18.8 Migration requirements

Codex must:

- Create versioned migrations.
- Avoid destructive production migrations.
- Provide rollback guidance.
- Add indexes.
- Add unique constraints.
- Add foreign keys.
- Add timestamps.
- Add status enums or validated text values.
- Document migration order.

---

# 19. Media Storage

## 19.1 Existing images

Existing public images remain in `/public` for the initial release unless current architecture differs.

## 19.2 New uploads

Preferred options:

1. Vercel Blob.
2. Cloudflare R2.
3. Existing project storage if already configured and stable.

The implementation must abstract media URLs so storage can change later.

## 19.3 Database rule

Do not store raw image binary data in Neon.

Store:

- URL.
- Key/path.
- Alt text.
- Caption.
- Width.
- Height.
- MIME type.
- File size.
- Uploaded-by user.
- Created timestamp.

---

# 20. Authentication and Authorization

Codex must inspect whether authentication already exists.

If authentication exists:

- Reuse it if secure.
- Add role-based authorization.
- Do not duplicate auth systems.

If authentication does not exist:

- Implement a secure server-side solution compatible with Next.js and Vercel.
- Auth.js or Better Auth is acceptable.
- Prefer email/password or email-link access for internal staff.
- Store password hashes only with a modern secure algorithm if passwords are used.
- Add session expiration.
- Add secure cookies.
- Add CSRF protection where relevant.
- Add rate limiting on login.
- Add audit logs for login events.
- Prevent public registration.

Admin access must be invite-only or manually provisioned.

---

# 21. Quotation and Sample Request Requirements

## 21.1 Request quotation form

Fields:

- Company name.
- Contact name.
- Country.
- Buyer type.
- Email.
- WhatsApp.
- Coffee origin.
- Process.
- Required volume.
- Target price, optional.
- Preferred Incoterm.
- Destination port.
- Message.
- Consent checkbox.

## 21.2 Sample request form

Fields:

- Company name.
- Contact name.
- Country.
- Buyer type.
- Email.
- WhatsApp.
- Product.
- Intended use.
- Estimated commercial requirement.
- Courier-account availability.
- Message.
- Consent checkbox.

## 21.3 Form requirements

- Server-side validation.
- Client-side validation.
- Zod schema.
- Rate limiting.
- Honeypot.
- Spam prevention.
- Secure storage.
- Success state.
- Failure state.
- Email notification.
- Optional n8n webhook.
- UTM tracking.
- Source-page tracking.
- Privacy notice.

Do not expose internal webhook secrets to the browser.

---

# 22. Technical SEO Requirements

## 22.1 Metadata

Every indexable page must have:

- Unique title.
- Unique meta description.
- Canonical URL.
- Open Graph title.
- Open Graph description.
- Open Graph image.
- Twitter/X card.
- Index/follow directive.

## 22.2 Headings

- One clear H1 per page.
- Logical H2 and H3 hierarchy.
- No headings used purely for visual styling.

## 22.3 Structured data

Implement appropriate schema:

- `Organization`.
- `WebSite`.
- `BreadcrumbList`.
- `Product`.
- `Article` or `BlogPosting`.
- `Person`.
- `AboutPage`.
- `ContactPage`.
- `FAQPage` only when actual FAQ content exists.

No fake reviews, ratings, pricing, certifications, or unsupported data.

## 22.4 Sitemap

Generate:

- Main sitemap.
- Article sitemap.
- Product sitemap.
- Origin sitemap.

Include only canonical published pages.

Exclude:

- Admin.
- Draft.
- Preview.
- API routes.
- Internal search.
- Empty filters.

## 22.5 Robots

Create a valid `robots.txt`.

Disallow or noindex:

- `/admin`
- `/api`
- Preview URLs
- Draft URLs
- Internal utility routes

Do not block required CSS, JS, or images.

## 22.6 RSS

Provide an RSS feed for published News & Insights articles.

## 22.7 Internal linking

Each article should link naturally to relevant:

- Products.
- Origins.
- Processing pages.
- Export services.
- Related articles.

Each product and origin page should link back to relevant educational content.

## 22.8 Redirects

- Use 301 for permanent route changes.
- Avoid chains.
- Avoid loops.
- Preserve query parameters where relevant.
- Add tests for key redirects.

## 22.9 Image SEO

- Descriptive filenames when safe.
- Accurate alt text.
- Width and height.
- Responsive sizes.
- WebP/AVIF when beneficial.
- Lazy load non-critical images.
- Priority-load only primary hero imagery.

---

# 23. Performance Requirements

## 23.1 Rendering strategy

Use:

- Static generation for stable corporate pages.
- Incremental static regeneration where suitable.
- Server components by default.
- Client components only when interaction requires them.
- Server-side metadata generation.
- Cached database reads for public pages.

## 23.2 JavaScript

Avoid excessive client-side JavaScript.

Do not convert static content sections into client components without reason.

## 23.3 Images

- Use `next/image`.
- Correct `sizes`.
- Prevent layout shift.
- Avoid uncompressed hero images.
- Avoid loading all gallery images immediately.

## 23.4 Fonts

- Reuse current fonts if suitable.
- Use `next/font`.
- Limit font weights.
- Avoid unnecessary third-party font requests.

## 23.5 Animations

Existing animations may remain only if they:

- Do not degrade Core Web Vitals.
- Respect reduced-motion preferences.
- Do not block interaction.
- Do not create layout instability.

---

# 24. Accessibility Requirements

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus states.
- Adequate contrast.
- Form labels.
- Accessible validation errors.
- Descriptive button labels.
- Alt text.
- Reduced-motion support.
- Accessible dialogs.
- Accessible dropdowns.
- No information conveyed only by color.
- Skip-to-content link.
- Proper language attribute.

---

# 25. Security Requirements

## 25.1 General

Apply controls aligned with OWASP Top 10.

## 25.2 Required controls

- Server-side authorization checks.
- Input validation.
- Output encoding.
- Parameterized database queries through ORM.
- CSRF protection where relevant.
- Secure cookies.
- Session expiration.
- Rate limiting.
- Login throttling.
- File-upload validation.
- Content security policy.
- Security headers.
- No secret exposure in client bundle.
- No raw stack traces in production.
- Audit logs for administrative actions.
- Sanitization of rich-text content.
- Protection against stored XSS.
- Protection against open redirects.
- Protection against slug/path traversal.
- Protection against mass assignment.
- Protection against unauthorized draft access.

## 25.3 Rich text

If TipTap, Editor.js, or similar is used:

- Store structured content.
- Sanitize generated HTML.
- Allowlist supported elements.
- Block scripts.
- Block unsafe iframes.
- Block inline event handlers.
- Validate links.

## 25.4 Environment variables

Create `.env.example`.

Expected variables may include:

```env
DATABASE_URL=
DATABASE_URL_UNPOOLED=
AUTH_SECRET=
AUTH_URL=
BLOB_READ_WRITE_TOKEN=
INQUIRY_NOTIFICATION_EMAIL=
N8N_WEBHOOK_URL=
N8N_WEBHOOK_SECRET=
NEXT_PUBLIC_SITE_URL=https://www.nawasenaint.web.id
```

Do not commit real secrets.

---

# 26. Analytics and Monitoring

## 26.1 Analytics

Reuse existing analytics if already configured.

Otherwise support:

- Vercel Analytics.
- Google Analytics 4.
- Google Search Console verification.

## 26.2 Events

Track:

- Quote CTA click.
- Sample CTA click.
- WhatsApp click.
- Email click.
- Quote form start.
- Quote form submit.
- Sample form submit.
- Product view.
- Origin view.
- Article view.
- Catalogue download.
- External LinkedIn click.

## 26.3 Privacy

Do not collect unnecessary personal data.

Provide privacy-policy disclosure for forms and analytics.

---

# 27. UI and Design Requirements

## 27.1 Design direction

The website should feel:

- Corporate.
- Premium.
- Trustworthy.
- Agricultural but modern.
- Suitable for international B2B buyers.
- Data-rich without feeling crowded.

## 27.2 Existing design retention

Retain:

- Brand colors.
- Logo.
- Appropriate existing photography.
- Useful card styles.
- Existing layout sections that remain effective.

Improve:

- Spacing.
- Typography hierarchy.
- Data presentation.
- CTA visibility.
- Mobile navigation.
- Section flow.
- Footer depth.
- Content density.
- B2B credibility.

## 27.3 Data presentation

Metrics must include context.

Bad:

```text
200+ MT
```

Good:

```text
200+ MT
Current Harvest Supply Capacity
Crop Cycle 2026/2027
Last verified June 2026
```

---

# 28. Content Governance

## 28.1 Data ownership

Every public operational metric must have:

- Internal owner.
- Verification date.
- Source note.
- Publication status.

## 28.2 Review cadence

Recommended:

- Capacity: review monthly during active harvest period.
- Availability: review weekly or whenever stock changes.
- Product specifications: review per lot.
- Company details: review quarterly.
- Legal pages: review annually.
- Articles: review at least annually or when facts change.

## 28.3 Stale-data behavior

If capacity or availability is outdated:

- Show “Contact us for current availability.”
- Do not continue showing a stale status as current.
- Optionally hide the figure after a configured expiration date.

---

# 29. Migration and Rollout Plan

## Phase 0 — Audit

Deliverables:

- Existing website audit.
- Route inventory.
- Component inventory.
- Asset inventory.
- SEO baseline.
- Risk register.
- Migration plan.

Acceptance:

- No destructive changes.
- All existing assets cataloged.
- Current behavior documented.

## Phase 1 — Homepage and corporate shell

Deliverables:

- Updated navigation.
- Refactored homepage.
- Corporate metrics.
- Featured origins.
- Improved products.
- Quality.
- Export flow.
- Latest news placeholder.
- Updated footer.
- Responsive layout.

Acceptance:

- Existing brand retained.
- Existing images reused.
- No broken homepage behavior.
- Mobile responsive.
- Primary CTAs functional.

## Phase 2 — Corporate pages

Deliverables:

- Products index.
- Product detail.
- Origins index.
- Origin detail.
- Quality.
- Processing.
- Export services.
- About.
- Contact.
- Request quote.
- Sample request.

Acceptance:

- Unique metadata.
- Internal links.
- Valid mobile layouts.
- No duplicated primary content.

## Phase 3 — Database and admin

Deliverables:

- Neon setup.
- Drizzle schema.
- Migrations.
- Authentication.
- Roles.
- Article admin.
- Product admin.
- Origin admin.
- Supply admin.
- Inquiry admin.
- Audit logs.

Acceptance:

- Unauthorized users cannot access admin.
- Admin CRUD works.
- Migrations work on a clean database.
- Production-safe migration instructions exist.

## Phase 4 — News and SEO

Deliverables:

- News index.
- Article pages.
- Categories.
- Tags.
- Author pages or author sections.
- Article workflow.
- Metadata.
- Structured data.
- Sitemap.
- RSS.
- Redirects.
- Internal linking.

Acceptance:

- Drafts not publicly accessible.
- Scheduled publishing works.
- Published articles appear in sitemap.
- Article schema validates.
- Canonicals are correct.

## Phase 5 — QA and production rollout

Deliverables:

- Test report.
- Lighthouse report.
- Security review.
- Redirect test.
- Broken-link test.
- Database backup plan.
- Rollback plan.
- Deployment guide.

Acceptance:

- Vercel Preview approved.
- No critical errors.
- No critical security findings.
- No accidental URL loss.
- Production deployment succeeds without downtime.

---

# 30. Testing Requirements

## 30.1 Unit tests

Test:

- Slug generation.
- SEO metadata generation.
- Capacity display logic.
- Stale-data logic.
- Form validation.
- Role permissions.
- Article-status transitions.
- Redirect validation.
- Rich-text sanitization.

## 30.2 Integration tests

Test:

- Database CRUD.
- Admin login.
- Article publishing.
- Product publishing.
- Supply updates.
- Inquiry submission.
- Email/webhook notification.
- Media upload.
- Sitemap generation.

## 30.3 End-to-end tests

Critical flows:

1. Visitor opens homepage.
2. Visitor opens product.
3. Visitor opens origin.
4. Visitor submits quotation request.
5. Admin logs in.
6. Editor creates an article.
7. Admin reviews and publishes.
8. Published article appears publicly.
9. Sitemap includes article.
10. Draft URL remains inaccessible.
11. Admin updates harvest capacity.
12. Homepage displays updated verified metric.

Use Playwright if compatible with current project.

## 30.4 SEO tests

- One H1.
- Unique title.
- Unique description.
- Canonical.
- Open Graph.
- Structured data.
- Sitemap inclusion.
- Robots behavior.
- Noindex behavior.
- Redirect status.

## 30.5 Security tests

- Unauthenticated admin access.
- Unauthorized role action.
- Stored XSS attempt.
- Malicious link insertion.
- File upload bypass.
- CSRF attempt.
- Rate-limit behavior.
- SQL injection payload.
- Open redirect.
- Draft content exposure.
- Secret leakage.

---

# 31. Acceptance Criteria

The project is accepted only when all critical criteria are met.

## 31.1 Existing website preservation

- Existing production foundation remains.
- Existing useful images remain.
- Existing logo and brand colors remain.
- No unnecessary full rewrite.
- No accidental deletion of public content.

## 31.2 Homepage

- Hero communicates B2B positioning.
- Metrics include crop cycle and verification context.
- Products link to dedicated pages.
- Origins link to dedicated pages.
- Quality and export information exist.
- News section exists.
- Quote CTA works.
- Footer is complete.

## 31.3 Capacity

- 200+ MT is not shown as timeless annual production.
- Capacity is labeled as harvest-season or current-harvest supply.
- Crop cycle is shown.
- Verification date is shown.
- Disclaimer is shown.
- Admin can update it.

## 31.4 News

- Admin can create and publish articles.
- Drafts remain private.
- Articles have metadata.
- Articles have structured data.
- Articles appear in sitemap.
- Articles link to products and origins.

## 31.5 Admin

- Protected.
- Role-based.
- Audited.
- Responsive.
- No public registration.
- Secure session behavior.

## 31.6 SEO

- Unique metadata.
- Canonicals.
- Sitemap.
- Robots.
- RSS.
- Structured data.
- Internal linking.
- Redirect support.
- No accidental duplicate pages.

## 31.7 Performance

- No excessive client JavaScript.
- Images optimized.
- Mobile usable.
- No major layout shifts.
- Lighthouse targets substantially met.

## 31.8 Security

- No critical OWASP finding.
- Secrets remain server-side.
- Rich text sanitized.
- Forms rate-limited.
- Admin authorization enforced server-side.

---

# 32. Codex Execution Rules

Codex must work in the following order:

1. Inspect repository.
2. Produce audit.
3. Produce implementation plan.
4. Identify reusable components and assets.
5. Create branch.
6. Add database schema and migrations.
7. Refactor incrementally.
8. Add tests with each module.
9. Validate build.
10. Validate lint.
11. Validate type checking.
12. Run tests.
13. Produce Vercel deployment notes.
14. Produce final implementation report.

Codex must not:

- Rewrite the entire project without justification.
- Replace existing images unnecessarily.
- Delete routes without redirects.
- Hard-code unverified data.
- Expose admin APIs publicly.
- Publish AI content automatically.
- Store secrets in source code.
- disable security controls to make tests pass.
- Use mock data silently in production.
- Claim completion when build or tests fail.

---

# 33. Required Documentation Deliverables

Codex should create:

```text
docs/EXISTING_WEBSITE_AUDIT.md
docs/IMPLEMENTATION_PLAN.md
docs/DATABASE_SCHEMA.md
docs/ADMIN_CMS_GUIDE.md
docs/SEO_IMPLEMENTATION.md
docs/CONTENT_GOVERNANCE.md
docs/DEPLOYMENT_AND_ROLLBACK.md
docs/SECURITY_REVIEW.md
docs/TEST_REPORT.md
docs/FINAL_IMPLEMENTATION_REPORT.md
```

Also update:

```text
README.md
.env.example
```

---

# 34. Final Definition of Done

The refactor is complete when:

1. The existing website has been upgraded rather than rebuilt from scratch.
2. Existing images and brand identity are retained and optimized.
3. The homepage functions as a corporate B2B homepage.
4. Product, origin, quality, export, and News pages are available.
5. Capacity is correctly represented per harvest season or crop cycle.
6. Neon and the admin CMS are operational.
7. Articles, products, origins, and supply data can be maintained from admin.
8. Quotation and sample inquiries are stored securely.
9. SEO foundations are complete.
10. Structured data validates.
11. Sitemap and RSS work.
12. Admin and draft pages are not indexable.
13. Tests pass.
14. Build passes.
15. Type checking passes.
16. Vercel Preview has been reviewed.
17. Production migration and rollback steps are documented.
18. No critical security vulnerabilities remain.
19. No important existing public URL is lost.
20. The website clearly positions Nawasena as an Indonesian green coffee B2B sourcing and export partner.

---

# 35. Initial Instruction for Codex

Codex should begin with the following task:

> Audit the existing Nawasena website repository before changing the architecture. Identify the existing framework, routes, components, reusable UI, images, metadata, forms, analytics, deployment setup, and security controls. Produce `docs/EXISTING_WEBSITE_AUDIT.md` and `docs/IMPLEMENTATION_PLAN.md`. Do not rebuild the project from zero, delete existing assets, or modify production directly. The final system must progressively refactor the existing Vercel-deployed website into a corporate B2B green coffee platform with Neon-backed admin CMS, News & Insights, harvest-season supply data, product and origin pages, buyer inquiry forms, and complete technical SEO.
