"use client";

import { useEffect, useRef, useState } from "react";
import { media } from "../content/media";
import { Icon } from "./Icon";
import { MediaImage } from "./MediaImage";

const slides = [
  { title: "Global Business", body: "The value of seeing a business question from more than one market perspective.", image: media.opportunityGallery, alt: "International port and urban logistics district at golden hour" },
  { title: "Strategic Partnerships", body: "Productive relationships begin with alignment, clarity and respect for different expertise.", image: media.opportunityStrategy, alt: "Professionals arranging collaboration materials around a table" },
  { title: "Business Development", body: "A considered path can help turn an early idea into a more defined conversation.", image: media.opportunityDevelopment, alt: "Architectural staircase rising through a contemporary office" },
  { title: "Connected Opportunities", body: "New possibilities emerge where people, industries and geographies meet.", image: media.opportunityConnection, alt: "International airport and city lights at night" }
];

export function OpportunityCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const move = (delta: number) => setCurrent(i => (i + delta + slides.length) % slides.length);
  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => { if (document.visibilityState === "visible") move(1); }, 6500);
    return () => clearInterval(timer);
  }, [paused]);
  return <section className="gallery-section dark-section" id="opportunity-gallery" aria-label="Global opportunities gallery">
    <div className="container gallery-heading"><div><span className="eyebrow">FOUR PERSPECTIVES</span><h2>Opportunity looks different <em>from every angle.</em></h2></div><p>Explore the people, structures and places that shape modern business conversations.</p></div>
    <div className="gallery-stage container" tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Global opportunities" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false); }} onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }} onTouchStart={event => { startX.current = event.touches[0].clientX; }} onTouchEnd={event => { if (startX.current !== null) { const delta = event.changedTouches[0].clientX - startX.current; if (Math.abs(delta) > 45) move(delta < 0 ? 1 : -1); startX.current = null; } }}>
      <div className="gallery-track" style={{ transform: `translateX(-${current * 100}%)` }}>{slides.map((slide, index) => <article className="gallery-slide" key={slide.title} aria-hidden={index !== current}><MediaImage src={slide.image} alt={slide.alt} className="gallery-image"/><div className="gallery-gradient"/><div className="gallery-copy"><span>0{index + 1} / 0{slides.length}</span><h3>{slide.title}</h3><p>{slide.body}</p></div></article>)}</div>
      <div className="gallery-controls"><div className="gallery-dots" aria-label="Choose slide">{slides.map((slide, index) => <button type="button" key={slide.title} aria-label={`Show slide ${index + 1}: ${slide.title}`} aria-current={current === index ? "true" : undefined} onClick={() => setCurrent(index)} className={current === index ? "active" : ""}/>)}</div><div><button type="button" onClick={() => move(-1)} aria-label="Previous slide"><Icon name="arrow" size={20} className="flip-icon"/></button><button type="button" onClick={() => move(1)} aria-label="Next slide"><Icon name="arrow" size={20}/></button></div></div>
    </div>
  </section>;
}
