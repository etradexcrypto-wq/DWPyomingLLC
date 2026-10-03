"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { media } from "@/content/media";
import { accountUrl } from "@/content/navigation";
import { Icon } from "./Icon";

export function HeroMedia() {
  const [ready, setReady] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [motionAllowed, setMotionAllowed] = useState(true);
  const video = useRef<HTMLVideoElement>(null);
  const hero = useRef<HTMLElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 1650);
    const mq = matchMedia("(max-width: 700px)");
    const updateSource = () => { setPlaying(false); setVideoSrc(mq.matches ? "/assets/videos/hero-mobile.mp4" : "/assets/videos/hero-desktop.mp4"); };
    updateSource(); mq.addEventListener("change", updateSource);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    setMotionAllowed(!reduced && !saveData);
    return () => { clearTimeout(timeout); mq.removeEventListener("change", updateSource); };
  }, []);
  useEffect(() => {
    const node = hero.current;
    if (!node || !video.current || !motionAllowed) return;
    const player = video.current;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) player.play().catch(() => setPlaying(false)); else player.pause(); }, { threshold: 0.04 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [motionAllowed, videoSrc]);
  return <>
    <div className={`preloader ${ready ? "done" : ""}`} aria-hidden={ready}><img src="/assets/logo.svg" alt=""/><span>DWP WYOMING LLC</span><small>dwpwyomingllc.com</small><i className="preloader-line"/></div>
    <section className="hero" ref={hero} aria-label="DWP Wyoming LLC introduction">
      <div className="hero-media">
        {!posterFailed && <picture className="hero-poster"><source media="(max-width: 700px)" srcSet={media.heroMobile}/><img src={media.heroDesktop} alt="Illustrative executive boardroom overlooking a global business district" fetchPriority="high" onLoad={() => setReady(true)} onError={() => { setPosterFailed(true); setReady(true); }}/></picture>}
        {motionAllowed && videoSrc && <video key={videoSrc} ref={video} className={`hero-video ${playing ? "is-playing" : ""}`} src={videoSrc} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onPlaying={() => setPlaying(true)} onError={() => setPlaying(false)} />}
        <div className="hero-shade"/>
      </div>
      <div className="hero-content container"><div className="hero-copy">
        <span className="eyebrow hero-enter" style={{ animationDelay: ".08s" }}>DWP WYOMING LLC <span className="eyebrow-dash"/> A GLOBAL PERSPECTIVE</span>
        <h1 className="hero-enter" style={{ animationDelay: ".2s" }}>Building opportunities <em>across global markets.</em></h1>
        <p className="hero-enter" style={{ animationDelay: ".36s" }}>Rooted in Wyoming and looking outward, DWP brings a thoughtful perspective to business development, strategic relationships and a changing world.</p>
        <div className="hero-ctas hero-enter" style={{ animationDelay: ".5s" }}><Link href="/business" className="button button-gold">Explore Our Business <Icon name="arrow" size={18}/></Link><Link href="/contact" className="button button-ghost">Contact Us <Icon name="arrow" size={18}/></Link></div>
        <div className="hero-minor hero-enter" style={{ animationDelay: ".62s" }}><a href={accountUrl}>Client Login</a><span aria-hidden="true"/><a href={accountUrl}>Sign Up</a></div>
      </div></div>
      <div className="hero-edge container"><span>01 / THE PERSPECTIVE</span><a href="#home-intro">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>
  </>;
}
