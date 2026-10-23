"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";

type Project = {
  title: string;
  category: string;
  scope: string;
  image: string;
  alt: string;
  size: "wide" | "tall" | "half";
};

const projects: Project[] = [
  {
    title: "Coastal Modern Residence",
    category: "Residential",
    scope: "Exterior mineral coating & architectural charcoal fascia",
    image: "/manus-storage/hero_fae2c9e6.webp",
    alt: "Contemporary Australian architectural residence with warm rendered walls and native landscaping",
    size: "wide",
  },
  {
    title: "Vaulted Living & Exposed Timber",
    category: "Interior",
    scope: "Matte warm-white wall finish & precision ceiling line work",
    image: "/manus-storage/interior_c161b793.webp",
    alt: "High-ceiling living room with warm-white lime-wash finished walls, natural oak details, and linen furnishings",
    size: "tall",
  },
  {
    title: "Weatherboard Estate Refresh",
    category: "Residential",
    scope: "Substrate repair, premium acrylic topcoats & porch framing",
    image: "/manus-storage/residential_6683453f.webp",
    alt: "Contemporary Australian weatherboard home with crisp white exterior and natural sandstone path",
    size: "half",
  },
  {
    title: "Boutique Creative Workspace",
    category: "Commercial",
    scope: "Low-VOC acoustic charcoal finishes & architectural framing",
    image: "/manus-storage/commercial_b66e07a8.webp",
    alt: "Bright commercial workplace with dark charcoal architectural walls and Sydney harbour views",
    size: "half",
  },
  {
    title: "Standing-Seam Metal Roof & Eaves",
    category: "Exterior",
    scope: "Thermal-reflective protective membrane & gutter detail",
    image: "/manus-storage/roof_ec8a5d01.webp",
    alt: "Australian coastal pavilion home with fresh charcoal coated metal roof and crisp white facade",
    size: "half",
  },
  {
    title: "Architectural Sealed Driveway",
    category: "Exterior",
    scope: "Penetrating satin sealer & driveway perimeter edge finish",
    image: "/manus-storage/driveway_e8c0b169.webp",
    alt: "Smooth pale-grey sealed driveway meeting landscaped residential garden",
    size: "half",
  },
  {
    title: "Precision Artisan Trim Finishing",
    category: "Interior",
    scope: "Surface preparation, micro-filling & hand-brushed timber lines",
    image: "/manus-storage/detail_83c9393a.webp",
    alt: "Close-up of careful artisan brushwork along freshly prepared warm-white wall and timber trim",
    size: "half",
  },
];

const filters = ["All", "Residential", "Commercial", "Interior", "Exterior"] as const;
type Filter = (typeof filters)[number];

export default function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const previousOverflow = useRef("");
  const allFiltered = projects.filter((project) => filter === "All" || project.category === filter);
  const visibleProjects = showAll ? allFiltered : allFiltered.slice(0, 4);
  const activeProject = activeIndex === null ? null : visibleProjects[activeIndex];

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const stepLightbox = useCallback((direction: number) => {
    setActiveIndex((index) => {
      if (index === null) return null;
      return (index + direction + visibleProjects.length) % visibleProjects.length;
    });
  }, [visibleProjects.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") stepLightbox(1);
      if (event.key === "ArrowLeft") stepLightbox(-1);
      if (event.key === "Tab") {
        const controls = document.querySelectorAll<HTMLElement>(".gallery-lightbox button:not([disabled])");
        if (controls.length < 2) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow.current;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, stepLightbox]);

  const openLightbox = (index: number, target: HTMLElement) => {
    triggerRef.current = target;
    setActiveIndex(index);
  };

  return (
    <div className="gallery-shell">
      <div className="gallery-toolbar">
        <div className="gallery-tabs" role="group" aria-label="Filter illustrative gallery images">
          {filters.map((item) => (
            <button key={item} type="button" className={`gallery-tab${filter === item ? " is-active" : ""}`} aria-pressed={filter === item} onClick={() => { setFilter(item); setActiveIndex(null); }}>
              {item}
            </button>
          ))}
        </div>
        <span className="gallery-count" aria-live="polite">{allFiltered.length} illustrative views</span>
      </div>

      <div className="gallery-grid">
        {visibleProjects.map((project, index) => (
          <article className={`project-card project-card--${project.size}`} key={project.title}>
            <button type="button" className="project-card-button" onClick={(event) => openLightbox(index, event.currentTarget)} aria-label={`Open illustrative image: ${project.title}`}>
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 600px) 50vw, (max-width: 850px) 58vw, 58vw" className="project-image" unoptimized />
              <span className="project-caption">
                <span>
                  <strong>{project.title}</strong>
                  <span className="project-scope">{project.scope}</span>
                  <small>{project.category} · Illustrative visual</small>
                </span>
                <span className="project-open-mark"><Expand size={14} aria-hidden="true" /></span>
              </span>
            </button>
          </article>
        ))}
      </div>

      <p className="illustrative-note"><span aria-hidden="true">✳</span> Illustrative imagery only. No photograph shown represents verified completed work by this business.</p>
      {!showAll && (
        <div className="gallery-cta">
          <button
            type="button"
            className="text-link"
            onClick={() => setShowAll(true)}
          >
            View all projects <span className="text-link-arrow"><ArrowUpRight size={17} aria-hidden="true" /></span>
          </button>
        </div>
      )}

      {activeProject && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}>
          <div className="lightbox-content">
            <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={closeLightbox} aria-label="Close image viewer"><X size={18} aria-hidden="true" /></button>
            <div className="lightbox-image-wrap">
              <Image src={activeProject.image} alt={activeProject.alt} fill sizes="90vw" className="lightbox-image" priority unoptimized />
            </div>
            <div className="lightbox-nav" aria-label="Image viewer controls">
              <button type="button" onClick={() => stepLightbox(-1)} aria-label="Previous illustrative image"><ArrowLeft size={17} aria-hidden="true" /></button>
              <button type="button" onClick={() => stepLightbox(1)} aria-label="Next illustrative image"><ArrowRight size={17} aria-hidden="true" /></button>
            </div>
            <div className="lightbox-copy">
              <span className="lightbox-counter">{String(activeIndex! + 1).padStart(2, "0")} / {String(visibleProjects.length).padStart(2, "0")}</span>
              <h3 id="lightbox-title">{activeProject.title}</h3>
              <p className="lightbox-scope">{activeProject.scope}</p>
              <p>{activeProject.category} · Illustrative image. This visual is not a verified company project.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
