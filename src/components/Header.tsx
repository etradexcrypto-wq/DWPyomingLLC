"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { accountUrl, navigation } from "@/content/navigation";
import { Icon } from "./Icon";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const desktopOpeners = useRef<Record<string, HTMLButtonElement | null>>({});
  const mobileTrigger = useRef<HTMLButtonElement>(null);

  useEffect(() => { 
    setActive(null); 
    setMobileOpen(false); 
    setMobileGroup(null); 
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const target = event.target instanceof Element ? event.target : null;
      if (mobileOpen && target?.closest(".mobile-panel, .mobile-trigger")) mobileTrigger.current?.focus();
      else if (active && target?.closest(".mega-menu, .nav-group")) desktopOpeners.current[active]?.focus();
      setActive(null); setMobileOpen(false);
    };
    const onOutside = (event: PointerEvent) => { if (header.current && !header.current.contains(event.target as Node)) setActive(null); };
    
    window.addEventListener("scroll", onScroll, { passive: true }); 
    document.addEventListener("keydown", onKey); 
    document.addEventListener("pointerdown", onOutside); 
    onScroll();
    
    return () => { 
      window.removeEventListener("scroll", onScroll); 
      document.removeEventListener("keydown", onKey); 
      document.removeEventListener("pointerdown", onOutside); 
    };
  }, [active, mobileOpen]);

  useEffect(() => { 
    document.body.classList.toggle("menu-is-open", mobileOpen); 
    return () => document.body.classList.remove("menu-is-open"); 
  }, [mobileOpen]);

  // Smartsupp Script Content
  const smartsuppScript = `
    var _smartsupp = _smartsupp || {};
    _smartsupp.key = '1f693a9c06819c29038660de9265248bcc4bce88';
    window.smartsupp||(function(d) {
      var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
      s=d.getElementsByTagName('script')[0];c=d.createElement('script');
      c.type='text/javascript';c.charset='utf-8';c.async=true;
      c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
    })(document);
  `;

  return (
    <header className={`site-header ${scrolled || active || mobileOpen ? "is-solid" : ""}`} ref={header} onMouseLeave={() => setActive(null)}>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="DWP Wyoming LLC home" onClick={() => setActive(null)}>
          <img src="/assets/logo.svg" alt="" width="44" height="44" />
          <span className="brand-words"><strong>DWP</strong><small>WYOMING LLC</small></span>
        </Link>
        
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" className={pathname === "/" ? "nav-current" : ""}>Home</Link>
          {navigation.map(group => (
            <div className="nav-group" key={group.label} onMouseEnter={() => setActive(group.label)} onFocus={event => { if (event.target.tagName === "A") setActive(group.label); }}>
              <Link href={group.href} className={pathname === group.href || pathname.startsWith(group.href + "/") ? "nav-current" : ""} aria-current={pathname === group.href ? "page" : undefined}>{group.label}</Link>
              <button ref={node => { desktopOpeners.current[group.label] = node; }} type="button" aria-label={`Open ${group.label} menu`} aria-expanded={active === group.label} aria-controls={`menu-${group.label.replaceAll(" ", "-")}`} onClick={() => setActive(group.label)}><Icon name="chevron" size={13}/></button>
            </div>
          ))}
          <Link href="/contact" className={pathname === "/contact" ? "nav-current" : ""}>Contact</Link>
        </nav>

        <div className="nav-actions">
          <LanguageSelector/>
          <ThemeToggle/>
          <a className="login-link" href={accountUrl}>Login</a>
          <a className="nav-signup" href={accountUrl}>Sign Up <Icon name="arrow" size={15}/></a>
        </div>

        <button ref={mobileTrigger} className="mobile-trigger" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? "close" : "menu"} size={26}/>
        </button>
      </div>

      {navigation.map(group => (
        <div key={group.label} className={`mega-menu ${active === group.label ? "open" : ""}`} id={`menu-${group.label.replaceAll(" ", "-")}`} inert={active !== group.label} aria-hidden={active !== group.label}>
          <div className="mega-inner">
            <div className="mega-intro">
              <span className="eyebrow">{group.eyebrow}</span>
              <h2>{group.label}</h2>
              <p>{group.intro}</p>
              <Link href={group.href} onClick={() => setActive(null)}>Explore overview <Icon name="arrow" size={18}/></Link>
            </div>
            <div className="mega-links">
              {group.links.map(link => (
                <Link href={link.href} key={link.label + link.href} onClick={() => setActive(null)}>
                  <span><strong>{link.label}</strong><small>{link.description}</small></span>
                  <Icon name="arrow" size={18}/>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div id="mobile-navigation" className={`mobile-panel ${mobileOpen ? "open" : ""}`} inert={!mobileOpen} aria-hidden={!mobileOpen}>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          {navigation.map(group => (
            <div className="mobile-group" key={group.label}>
              <div className="mobile-group-row">
                <Link href={group.href} onClick={() => setMobileOpen(false)}>{group.label}</Link>
                <button type="button" aria-label={`Show ${group.label} pages`} aria-expanded={mobileGroup === group.label} onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}>
                  <Icon name="chevron" size={19}/>
                </button>
              </div>
              <div className={`mobile-submenu ${mobileGroup === group.label ? "open" : ""}`} inert={mobileGroup !== group.label}>
                {group.links.map(link => (
                  <Link href={link.href} key={link.label + link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}<Icon name="arrow" size={16}/>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <a href={accountUrl}>Client Login</a>
          <a href={accountUrl} className="mobile-account">Sign Up <Icon name="arrow" size={18}/></a>
        </nav>
        <div className="mobile-utilities">
          <LanguageSelector/>
          <ThemeToggle/>
        </div>
      </div>

      {/* Smartsupp Live Chat Script Injection */}
      <div dangerouslySetInnerHTML={{ __html: `<script type="text/javascript">${smartsuppScript}</script>` }} />
      <noscript>Powered by <a href="https://www.smartsupp.com" target="_blank">Smartsupp</a></noscript>

    </header>
  );
}