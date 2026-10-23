"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const serviceLinks = [
  ["Interior painting", "#service-01"],
  ["Exterior painting", "#service-02"],
  ["Residential painting", "#service-03"],
  ["Commercial painting", "#service-04"],
  ["Roof & specialist coatings", "#service-05"],
] as const;

const mainLinks = [
  ["Home", "#home"],
  ["About us", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#quote"],
] as const;

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="footer-brand header-brand" href="#home" aria-label="Form and Finish Painting Studio, home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-wordmark"><span>FORM <b>&amp;</b> FINISH</span><small>PAINTING STUDIO</small></span>
        </a>

        <nav className="nav-desktop" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <div className="services-nav-wrap">
            <button className="services-toggle" type="button" aria-expanded={servicesOpen} aria-haspopup="true" onClick={() => setServicesOpen((open) => !open)}>
              Services <ChevronDown size={13} aria-hidden="true" />
            </button>
            <div className={`services-dropdown${servicesOpen ? " is-open" : ""}`} aria-hidden={!servicesOpen}>
              {serviceLinks.map(([label, href]) => (
                <a key={label} href={href} tabIndex={servicesOpen ? 0 : -1} onClick={() => setServicesOpen(false)}>
                  {label}<ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
              <a href="#services" tabIndex={servicesOpen ? 0 : -1} onClick={() => setServicesOpen(false)}>
                All services<ArrowRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
          <a href="#projects">Projects</a>
          <a href="#faqs">FAQs</a>
          <a href="#quote">Contact</a>
        </nav>

        <a className="nav-cta" href="#quote">Get a free quote <ArrowUpRight size={14} aria-hidden="true" /></a>
        <button className="mobile-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-panel${menuOpen ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {mainLinks.slice(0, 2).map(([label, href]) => <a key={label} href={href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>{label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
          <button className="mobile-services-toggle" type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)} tabIndex={menuOpen ? 0 : -1}>
            Services <ChevronDown size={19} aria-hidden="true" />
          </button>
          <div className={`mobile-services${servicesOpen ? " is-open" : ""}`} aria-hidden={!servicesOpen}>
            <div className="mobile-services-inner">
              {serviceLinks.map(([label, href]) => <a key={label} href={href} tabIndex={menuOpen && servicesOpen ? 0 : -1} onClick={closeMenu}>{label}</a>)}
              <a href="#services" tabIndex={menuOpen && servicesOpen ? 0 : -1} onClick={closeMenu}>All services</a>
            </div>
          </div>
          {mainLinks.slice(2).map(([label, href]) => <a key={label} href={href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>{label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
          <a href="#faqs" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>FAQs<ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
        <div className="mobile-menu-footer">
          <p>Painting for homes, workplaces and the spaces in between.</p>
          <a className="mobile-menu-cta" href="#quote" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Get a free quote <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </header>
  );
}
