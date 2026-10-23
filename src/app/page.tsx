import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brush,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Layers3,
  PaintRoller,
  Ruler,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import ScrollExperience from "@/components/scroll-experience";
import ProjectGallery from "@/components/project-gallery";
import FAQAccordion from "@/components/faq-accordion";
import QuoteForm from "@/components/quote-form";
import ServiceCards from "@/components/service-cards";

const services = [
  {
    number: "01",
    title: "Interior painting",
    description: "A considered refresh for the rooms you live, work and gather in.",
    image: "/manus-storage/interior_c161b793.webp",
    alt: "Warm, light-filled living room with carefully finished pale walls",
    size: "large",
  },
  {
    number: "02",
    title: "Exterior painting",
    description: "Thoughtful colour and coating choices for the outside of your property.",
    image: "/manus-storage/residential_6683453f.webp",
    alt: "Australian home with a freshly painted light exterior and garden planting",
    size: "wide",
  },
  {
    number: "03",
    title: "Residential painting",
    description: "A practical approach to protecting, preparing and refreshing your home.",
    image: "/manus-storage/hero_fae2c9e6.webp",
    alt: "Contemporary coastal-style house with an ivory facade and native planting",
    size: "wide",
  },
  {
    number: "04",
    title: "Epoxy flooring",
    description: "A seamless-looking coating concept for garages and selected work areas.",
    image: "/manus-storage/epoxy_7973b4bb.webp",
    alt: "Clean modern garage with a smooth, light-grey epoxy-style floor finish",
    size: "large",
  },
  {
    number: "05",
    title: "Professional finishing & protective coatings",
    description: "Finish options considered for the substrate, setting and intended use.",
    image: "/manus-storage/epoxy_7973b4bb.webp",
    alt: "Durable-looking coated surface in a bright residential garage",
    size: "wide",
  },
];

const values = [
  {
    number: "01",
    icon: Ruler,
    title: "Preparation before paint",
    copy: "A good-looking result begins with understanding the substrate, protecting adjacent surfaces and preparing each area for its finish.",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Materials with a purpose",
    copy: "Paint and coating choices should be considered against the surface, setting and way the space is used.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "A clear path through the work",
    copy: "A straightforward enquiry, a considered scope and clear next steps make it easier to plan around your property.",
  },
];

const process = [
  ["01", "Initial enquiry", "Tell us about the property, the spaces involved and what you would like to change."],
  ["02", "Property assessment", "Review the surfaces, access, preparation needs and scope of the work."],
  ["03", "Quote & planning", "Discuss the proposed work, material considerations and a suitable schedule."],
  ["04", "Surface preparation", "Protect surrounding areas and prepare the surfaces before the finish coats."],
  ["05", "Professional painting", "Apply the selected paint or coating system with care at each stage."],
  ["06", "Final inspection", "Walk through the completed scope and identify any final details to address."],
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ScrollExperience>
        <main id="main-content">
          <section className="hero-section" id="home" aria-labelledby="hero-title">
            <div className="hero-media" aria-hidden="true">
              <Image
                src="/hero-interior.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="hero-image"
                unoptimized
              />
              <div className="hero-shade" />
            </div>
            <div className="hero-content page-shell">
              <div className="hero-inner-between">
                <p className="eyebrow hero-eyebrow" data-hero-copy>
                  <span className="eyebrow-dot" /> Residential &amp; commercial painting
                </p>
                <h1 className="hero-title" id="hero-title">
                  <span className="hero-line"><span data-hero-word>Exceptional</span> <span data-hero-word>painting.</span></span>
                  <span className="hero-line hero-line-accent"><span data-hero-word>Beautifully</span> <span data-hero-word>finished.</span></span>
                </h1>
                <p className="hero-description" data-hero-copy>
                  Considered painting for homes and workplaces—from careful preparation to a finish that feels right in its setting.
                </p>
                <div className="hero-actions" data-hero-copy>
                  <a className="hero-btn hero-btn-amber" href="#quote">
                    Get a free quote <ArrowUpRight aria-hidden="true" size={13} />
                  </a>
                  <a className="hero-btn hero-btn-forest" href="#projects">
                    Explore our projects <ArrowRight aria-hidden="true" size={13} />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-bottom page-shell">
              <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
                <span className="scroll-cue-ring"><ArrowDown size={15} aria-hidden="true" /></span>
                <span>Scroll to explore</span>
              </a>
              <p className="hero-caption">A considered finish starts before the first coat.</p>
            </div>
            <span className="hero-side-note" aria-hidden="true">FORM &amp; FINISH — PAINTING STUDIO</span>
          </section>

          <section className="intro-band" aria-label="Painting services">
            <div className="intro-band-inner page-shell" data-reveal>
              <p className="intro-band-label">A considered approach</p>
              <p className="intro-band-text">Colour sets the mood. <span>Preparation and detail shape the finish.</span></p>
              <div className="intro-band-services" aria-label="Service types">
                <span>Interiors</span><i /> <span>Exteriors</span><i /> <span>Specialist coatings</span>
              </div>
            </div>
          </section>

          <section className="about-section section-pad" id="about" aria-labelledby="about-heading">
            <div className="about-grid page-shell">
              <div className="about-visual" data-image-reveal>
                <div className="image-frame about-image-frame">
                  <Image
                    src="/manus-storage/interior_c161b793.webp"
                    alt="Quiet, sunlit interior with warm-white walls and natural timber finishes"
                    fill
                    sizes="(max-width: 760px) 100vw, 49vw"
                    className="cover-image"
                    unoptimized
                  />
                </div>
                <div className="image-index"><span>01</span><span>Light, colour &amp; considered detail</span></div>
                <div className="about-badge" data-reveal>
                  <span className="about-badge-label">PREPARATION &amp; FINISH</span>
                  <p className="about-badge-text">Substrate craft before colour</p>
                </div>
              </div>
              <div className="about-copy">
                <p className="section-kicker" data-reveal><span className="kicker-line" />A little about our approach</p>
                <h2 className="display-heading about-heading" id="about-heading" data-reveal>
                  The colour draws you in. <em>The finish makes it feel complete.</em>
                </h2>
                <p className="body-copy about-lede" data-reveal>
                  Painting is more than choosing a shade. It is the care taken with the surfaces, the preparation behind each coat and the details that bring a room or facade together.
                </p>
                <p className="body-copy" data-reveal>
                  Form &amp; Finish is a temporary studio identity for this website concept. The content is designed to introduce the service experience while business details are confirmed.
                </p>
                <a className="text-link" href="#quote" data-reveal>
                  Tell us about your space <span className="text-link-arrow"><ArrowUpRight size={17} aria-hidden="true" /></span>
                </a>
                <div className="about-footnote" data-reveal>
                  <span className="about-footnote-mark"><Check size={13} aria-hidden="true" /></span>
                  <span>For homes, commercial spaces and the surfaces between.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="services-section section-pad" id="services" aria-labelledby="services-heading">
            <div className="page-shell">
              <div className="section-heading-row services-heading-row">
                <div>
                  <p className="section-kicker section-kicker-light" data-reveal><span className="kicker-line" />What we do</p>
                  <h2 className="display-heading section-heading-light" id="services-heading" data-reveal>
                    A finish for <em>every surface.</em>
                  </h2>
                </div>
                <p className="section-aside section-aside-light" data-reveal>
                  From interior refreshes to hard-wearing coatings, the right approach begins with the surface and how you use the space.
                </p>
              </div>
              <p className="services-note" data-reveal>Service descriptions are indicative. Scope and suitability are confirmed for each property. All photography on this page is illustrative and does not represent verified company projects.</p>
              <ServiceCards services={services} />
              <div className="services-bottom-note" data-reveal>
                <Brush size={17} aria-hidden="true" /> <span>Surface condition, access and coating suitability are discussed before work is scoped.</span>
              </div>
            </div>
          </section>

          <section className="projects-section section-pad" id="projects" aria-labelledby="projects-heading">
            <div className="page-shell">
              <div className="section-heading-row projects-heading-row">
                <div>
                  <p className="section-kicker" data-reveal><span className="kicker-line" />A visual direction</p>
                  <h2 className="display-heading" id="projects-heading" data-reveal>
                    Spaces, surfaces <em>&amp; possibilities.</em>
                  </h2>
                </div>
                <p className="section-aside" data-reveal>
                  Explore a few visual cues for the work. These photographs are illustrative placeholders—not a record of completed client projects.
                </p>
              </div>
              <ProjectGallery />
            </div>
          </section>

          <section className="approach-section section-pad" id="approach" aria-labelledby="approach-heading">
            <div className="page-shell approach-grid">
              <div className="approach-heading-block">
                <p className="section-kicker section-kicker-light" data-reveal><span className="kicker-line" />Why a considered approach matters</p>
                <h2 className="display-heading section-heading-light" id="approach-heading" data-reveal>
                  The details are <em>the difference.</em>
                </h2>
                <p className="approach-statement" data-reveal>Good preparation is quiet work. Its value shows in the finish.</p>
                <div className="approach-mark" aria-hidden="true"><Layers3 size={30} strokeWidth={1} /><span>From surface to finish</span></div>
              </div>
              <div className="values-list" data-reveal-group>
                {values.map(({ number, icon: Icon, title, copy }) => (
                  <article className="value-item" key={number}>
                    <span className="value-number">{number}</span>
                    <span className="value-icon"><Icon size={19} strokeWidth={1.4} aria-hidden="true" /></span>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                    <ArrowUpRight className="value-arrow" size={18} aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="process-section section-pad" id="process" aria-labelledby="process-heading">
            <div className="page-shell">
              <div className="section-heading-row process-heading-row">
                <div>
                  <p className="section-kicker" data-reveal><span className="kicker-line" />A clear path through the work</p>
                  <h2 className="display-heading" id="process-heading" data-reveal>
                    From enquiry <em>to final detail.</em>
                  </h2>
                </div>
                <p className="section-aside" data-reveal>
                  Every property is different. This simple sequence shows how an enquiry can move from first conversation to a final walkthrough.
                </p>
              </div>
              <div className="process-grid" data-reveal-group>
                {process.map(([number, title, copy], index) => (
                  <article className="process-card" key={number}>
                    <span className="process-number">{number}</span>
                    <span className="process-dot" aria-hidden="true"><span /></span>
                    <div className="process-copy"><h3>{title}</h3><p>{copy}</p></div>
                    {index < process.length - 1 && <span className="process-connector" aria-hidden="true" />}
                  </article>
                ))}
              </div>
              <div className="process-note" data-reveal><Sparkles size={16} aria-hidden="true" /> Scope and timing are discussed after the property is assessed.</div>
            </div>
          </section>

          <section className="testimonial-section section-pad" id="testimonials" aria-labelledby="testimonial-heading">
            <div className="page-shell testimonial-layout" data-reveal>
              <div className="testimonial-label"><span className="testimonial-symbol">“</span><p className="section-kicker">Client voices</p></div>
              <div className="testimonial-content">
                <h2 className="display-heading" id="testimonial-heading">A good finish should speak <em>for itself.</em></h2>
                <p className="testimonial-placeholder">Verified customer feedback will be added here once it is available.</p>
                <span className="placeholder-label"><span /> VERIFIED TESTIMONIAL PLACEHOLDER</span>
              </div>
              <div className="testimonial-side-note">No customer names, reviews or ratings have been invented for this preview.</div>
            </div>
          </section>

          <section className="faq-section section-pad" id="faqs" aria-labelledby="faq-heading">
            <div className="page-shell faq-layout">
              <div className="faq-intro">
                <p className="section-kicker" data-reveal><span className="kicker-line" />A few useful notes</p>
                <h2 className="display-heading" id="faq-heading" data-reveal>
                  Good to <em>know.</em>
                </h2>
                <p className="body-copy" data-reveal>
                  Every property and surface is different. These answers set out the kinds of questions worth discussing before a project begins.
                </p>
                <a href="#quote" className="text-link" data-reveal>Ask about your property <span className="text-link-arrow"><ArrowUpRight size={17} aria-hidden="true" /></span></a>
                <div className="faq-aside-icon" aria-hidden="true"><CheckCircle2 size={23} strokeWidth={1.2} /><span>Helpful, not one-size-fits-all.</span></div>
              </div>
              <FAQAccordion />
            </div>
          </section>

          <section className="quote-section section-pad" id="quote" aria-labelledby="quote-heading">
            <div className="page-shell quote-layout">
              <div className="quote-intro">
                <p className="section-kicker section-kicker-light" data-reveal><span className="kicker-line" />Start a conversation</p>
                <h2 className="display-heading section-heading-light" id="quote-heading" data-reveal>
                  Tell us about <em>your space.</em>
                </h2>
                <p className="quote-lede" data-reveal>Share a little about your property and the painting work you have in mind.</p>
                <div className="quote-note" data-reveal>
                  <span className="quote-note-icon"><Check size={15} aria-hidden="true" /></span>
                  <span>This preview form is not connected to a business inbox. Your details will not be sent.</span>
                </div>
                <div className="quote-contact-placeholder" data-reveal>
                  <span className="quote-placeholder-mark"><PaintRoller size={17} aria-hidden="true" /></span>
                  <div><span>Contact details</span><p>To be confirmed by the business</p></div>
                </div>
              </div>
              <QuoteForm />
            </div>
          </section>

          <section className="closing-section" aria-labelledby="closing-heading">
            <div className="closing-inner page-shell" data-reveal>
              <div><p className="section-kicker"><span className="kicker-line" />A fresh perspective starts here</p><h2 className="display-heading" id="closing-heading">Ready for a <em>better finish?</em></h2></div>
              <a className="button button-dark" href="#quote">Request a free quote <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </section>
        </main>
        <footer className="site-footer" id="contact">
          <div className="footer-top page-shell">
            <a href="#home" className="footer-brand" aria-label="Form and Finish, back to top">
              <span className="brand-mark footer-brand-mark" aria-hidden="true"><i /><i /><i /></span>
              <span className="brand-wordmark"><span>FORM <b>&amp;</b> FINISH</span><small>PAINTING STUDIO</small></span>
            </a>
            <p className="footer-intro">A considered approach to painting, from the first surface check to the final detail.</p>
            <a className="footer-up" href="#home" aria-label="Back to top"><ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="footer-rule page-shell" />
          <div className="footer-bottom page-shell">
            <p>© {new Date().getFullYear()} Form &amp; Finish <span>—</span> Temporary brand concept. Business details to be confirmed.</p>
            <nav aria-label="Footer navigation"><a href="#services">Services</a><a href="#service-01">Interior painting</a><a href="#service-02">Exterior painting</a><a href="#projects">Projects</a><a href="#faqs">FAQs</a><a href="#quote">Get a quote</a><a href="#privacy-note">Privacy information</a></nav>
            <span className="footer-status"><span /> Preview concept</span>
          </div>
          <p className="footer-privacy page-shell" id="privacy-note">Privacy information: this preview form does not send or store enquiry details. Add the business’s privacy policy before the form is connected or the site launches.</p>
        </footer>
      </ScrollExperience>
    </>
  );
}
