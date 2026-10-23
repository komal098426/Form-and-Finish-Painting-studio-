"use client";

import Image from "next/image";
import { ArrowUpRight, PaintRoller } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  size: string;
};

function ServiceCard({ service }: { service: Service }) {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const image = imageRef.current;
    const overlay = overlayRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const cta = ctaRef.current;

    // Set initial states for animated elements
    gsap.set([title, desc, cta], { y: 22, opacity: 0 });
    gsap.set(overlay, { opacity: 0 });

    let enterTl: gsap.core.Timeline | null = null;
    let leaveTl: gsap.core.Timeline | null = null;

    const onEnter = () => {
      if (leaveTl) leaveTl.kill();

      enterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Image zoom
      enterTl.to(image, { scale: 1.07, duration: 0.9, ease: "power2.out" }, 0);

      // Overlay fade in
      enterTl.to(overlay, { opacity: 1, duration: 0.45 }, 0);

      // Staggered text reveal
      enterTl.to(title, { y: 0, opacity: 1, duration: 0.52 }, 0.06);
      enterTl.to(desc,  { y: 0, opacity: 1, duration: 0.52 }, 0.14);
      enterTl.to(cta,   { y: 0, opacity: 1, duration: 0.44 }, 0.22);
    };

    const onLeave = () => {
      if (enterTl) enterTl.kill();

      leaveTl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      // Image restore
      leaveTl.to(image, { scale: 1.015, duration: 0.75, ease: "power2.inOut" }, 0);

      // Overlay hide
      leaveTl.to(overlay, { opacity: 0, duration: 0.4 }, 0);

      // Text retreat
      leaveTl.to([cta, desc, title], { y: 22, opacity: 0, duration: 0.35, stagger: 0.05 }, 0);
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      enterTl?.kill();
      leaveTl?.kill();
      // Reset to base state on unmount
      gsap.set([title, desc, cta], { clearProps: "all" });
      gsap.set(overlay, { clearProps: "all" });
    };
  }, []);

  return (
    <article
      ref={cardRef}
      id={`service-${service.number}`}
      className={`service-card service-card--${service.size}`}
    >
      {/* Background image wrapper — scale is driven by GSAP */}
      <div ref={imageRef} className="service-image-wrap">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          className="service-image"
          unoptimized
        />
      </div>

      {/* Base gradient shade (always visible) */}
      <div className="service-shade" />

      {/* Hover overlay — botanical green tint, faded in by GSAP */}
      <div ref={overlayRef} className="service-hover-overlay" aria-hidden="true" />

      {/* Top number + icon row */}
      <div className="service-topline">
        <span ref={numberRef}>{service.number}</span>
        <span className="service-ornament">
          <PaintRoller size={14} aria-hidden="true" />
        </span>
      </div>

      {/* Bottom content block */}
      <div className="service-content">
        <div>
          <h3 ref={titleRef}>{service.title}</h3>
          <p ref={descRef}>{service.description}</p>
        </div>
        <a
          ref={ctaRef}
          href="#quote"
          aria-label={`Discuss ${service.title.toLowerCase()}`}
          className="service-link"
        >
          Discuss this service{" "}
          <span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function ServiceCards({ services }: { services: Service[] }) {
  return (
    <div className="services-grid" data-reveal-group>
      {services.map((service) => (
        <ServiceCard key={service.number} service={service} />
      ))}
    </div>
  );
}
