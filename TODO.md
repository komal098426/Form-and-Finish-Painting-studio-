# Website outcomes

Status: complete in Preview; the website remains unpublished and frontend-only.

## [x] 1. Brand, navigation, hero, and trust
- Provide a complete polished homepage for the premium Australian residential and commercial painting service.
- Use a distinctive original luxury identity and a tasteful temporary wordmark where the real company name was not supplied. Do not copy the reference design.
- Provide premium sticky responsive navigation with Home, About Us, Services dropdown, Projects/Gallery, Contact, and a prominent “Get a Free Quote” action; include an animated accessible mobile menu, scroll-state styling, and working anchor navigation.
- Provide a cinematic image-led hero featuring “Exceptional Painting. Beautifully Finished.”, supporting service copy, dual calls to action, restrained text and image reveals, an elegant scroll cue, and benefit-led trust points without unsupported credentials.
- Use service benefits such as professional workmanship, attention to detail, materials and finishes, residential/commercial capability, and customer-focused service without inventing facts.

## [x] 2. About and service catalogue
- Add an editorial About section with illustrative photography, an introduction to the studio’s painting approach, and an anchored quote call to action.
- Present Interior Painting; Exterior Painting; Residential Painting; Commercial Painting; Roof Painting; Epoxy Flooring; Driveway Painting; Surface Preparation and Repainting; and Professional Finishing and Protective Coatings.
- Present each service with relevant imagery, concise copy, a hover treatment, and a CTA. Use varied visual composition rather than a repetitive grid of identical cards.

## [x] 3. Portfolio and imagery provenance
- Add an asymmetric, filterable portfolio/gallery with Residential, Commercial, Interior, and Exterior categories where appropriate; large image crops; reveal and hover effects; a keyboard-accessible lightbox; and a “View All Projects” CTA.
- Use only verified company project photographs as actual completed work. If project imagery is unverified or unavailable, use custom-generated or sourced photography as illustrative placeholder imagery and clearly label it as illustrative rather than completed client work. Never imply that illustrative imagery is an actual company project.

## [x] 4. Benefits, process, testimonials, and FAQs
- Add concise, benefit-focused “Why Choose Us” content without fabricated metrics, guarantees, awards, or unsupported claims.
- Present the customer journey in sequence: Initial Enquiry; Property Assessment; Quote and Planning; Surface Preparation; Professional Painting; Final Inspection.
- Include genuine testimonials only if verified. Otherwise, provide a clearly labelled placeholder and do not invent customer names, reviews, or ratings.
- Add a keyboard-accessible FAQ accordion about residential and commercial work; interior and exterior painting; preparing a property; timelines; quotes and estimates; and arranging an assessment.

## [x] 5. Quote form, CTA, and footer
- Add a strong final quote CTA with a concise supporting message and a prominent “Get a Free Quote” action.
- Provide Full Name, Email Address, Phone Number, Property Type, Painting Service Required, Property Location, and Project Description fields.
- Implement accessible client-side validation, clear focus and error states, and a professional local success state that explicitly confirms no request was sent because no submission integration is connected. Do not claim that a quote was submitted to the company.
- Provide a premium footer with branding, a short description, quick navigation, service links, privacy and relevant links, and contact/social details only when verified. Clearly mark unavailable business details as placeholders; do not invent the business address, phone, email, service area, or social accounts.

## [x] 6. Original content and factual safeguards
- Use https://omniapainting.com.au/ as business/content reference and inspiration only; do not copy its design or present its company-specific contact information, address, location, social accounts, or claims as belonging to this new business unless explicitly verified for it.
- Do not invent company credentials, licences, years in business, reviews or ratings, awards, warranties or guarantees, statistics, address, phone, email, or service area. Use clearly marked placeholders for unverified facts.

## [x] 7. Frontend architecture and motion
- Use Next.js App Router, React, TypeScript, Tailwind CSS, GSAP and GSAP ScrollTrigger, Framer Motion only where it provides a distinct genuine benefit without duplicating GSAP, and Lucide React.
- Prefer Server Components and use Client Components for interactivity and motion only. Keep code reusable and maintainable.
- Use coordinated GSAP timelines with correct setup and cleanup. Include purposeful text/element reveals, a text-splitting alternative, selected image masks/parallax, section reveals, and tasteful navigation, buttons, accordion, gallery, and mobile-menu motion. Avoid duplicate ScrollTriggers, hydration errors, memory leaks, flashes, layout shifts, excessive animation, heavy smooth-scroll libraries, and unnecessary mobile pinning.
- Preserve usable native touch, keyboard, and scrolling behavior; respect reduced-motion preferences; ensure content remains readable when animation is disabled.

## [x] 8. Responsive design, accessibility, performance, and SEO
- Deliver intentional layouts for large desktop, standard laptop, tablet, and mobile, adapting typography, spacing, image crops, navigation, and animation rather than merely shrinking desktop. Avoid horizontal overflow, broken layout, clipped text, or unusable navigation.
- Use semantic HTML and heading hierarchy; sufficient contrast; keyboard access and visible focus; accessible form labels; descriptive alt text; optimized images; lazy loading for below-the-fold media; stable layouts; and minimal unnecessary JavaScript.
- Add page title, meta description, Open Graph metadata, and other supported local-business SEO only where company details are verified.

## [x] 9. Project constraints and delivery state
- Frontend only: do not build a backend, database, authentication system, admin dashboard, or API. Use realistic placeholder content and local/static data; keep the architecture easy to connect to a backend later.
- Provide a working Preview and project source. Do not publish the website unless explicitly asked.
- Test and refine navigation, buttons, accordions, gallery filters/lightbox, quote form validation and explicit non-submission success behavior, and desktop/tablet/mobile responsiveness; resolve errors and broken layouts before delivery.
