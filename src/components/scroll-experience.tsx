"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExperience({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const heroWords = gsap.utils.toArray<HTMLElement>("[data-hero-word]", root);
      const heroCopy = gsap.utils.toArray<HTMLElement>("[data-hero-copy]", root);
      const heroImage = root.querySelector<HTMLElement>(".hero-image");

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.fromTo(heroWords, { autoAlpha: 0, yPercent: 115 }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1.12,
        stagger: 0.085,
      });
      intro.fromTo(heroCopy, { autoAlpha: 0, y: 15 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.1,
      }, "-=0.56");
      if (heroImage) {
        intro.fromTo(heroImage, { scale: 1.11 }, { scale: 1.02, duration: 1.8, ease: "power2.out" }, 0);
        if (window.matchMedia("(min-width: 768px)").matches) {
          gsap.to(heroImage, {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top top",
              end: "bottom top",
              scrub: 0.45,
            },
          });
        }
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]", root).forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 23 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]", root).forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(".service-card, .project-card, .value-item, .process-card, .faq-item");
        if (!items || items.length === 0) return;
        gsap.fromTo(items, { autoAlpha: 0, y: 27 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.78,
          stagger: 0.075,
          ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 84%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]", root).forEach((frame) => {
        gsap.fromTo(frame, { clipPath: "inset(0 0 0 13%)" }, {
          clipPath: "inset(0 0 0 0%)",
          duration: 1.15,
          ease: "power2.inOut",
          scrollTrigger: { trigger: frame, start: "top 83%", once: true },
        });
      });
    }, root);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 350);
    return () => {
      window.clearTimeout(refresh);
      context.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
