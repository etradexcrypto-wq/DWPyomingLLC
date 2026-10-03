import Link from "next/link";
import type { PageSpec } from "../content/pages";
import { media } from "../content/media";
import { Icon } from "./Icon";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";
import { VisualCard } from "./VisualCard";

function RelatedLink({ page }: { page: PageSpec }) {
  if (page.path === "/learning/crypto") return <Link className="text-link" href="/learning/crypto/custody-and-risk">Read the custody guide <Icon name="arrow" size={19}/></Link>;
  if (page.path === "/learning/real-estate") return <Link className="text-link" href="/learning/real-estate/due-diligence">Read the due-diligence guide <Icon name="arrow" size={19}/></Link>;
  if (page.path.startsWith("/learning/crypto/")) return <Link className="text-link" href="/learning/crypto">Back to Crypto Learning <Icon name="arrow" size={19}/></Link>;
  if (page.path.startsWith("/learning/real-estate/")) return <Link className="text-link" href="/learning/real-estate">Back to Real Estate Learning <Icon name="arrow" size={19}/></Link>;
  return <Link className="text-link" href="/contact">Start a conversation <Icon name="arrow" size={19}/></Link>;
}

export function EditorialPage({ page }: { page: PageSpec }) {
  const isNotice = ["/privacy", "/terms", "/disclosures"].includes(page.path);
  return <main id="main-content">
    <section className={`page-hero ${isNotice ? "notice-hero" : ""}`}>
      <div className="page-hero-visual">{page.image ? <MediaImage src={media[page.image]} alt={page.imageAlt || "Editorial business scene"} className="page-hero-image" priority/> : <div className={`notice-art notice-${page.path.slice(1)}`} aria-hidden="true"><Icon name={page.path === "/privacy" ? "shield" : page.path === "/terms" ? "document" : "globe"} size={160}/></div>}</div><div className="page-hero-shade"/>
      <div className="container page-hero-content"><span className="eyebrow page-enter">DWP WYOMING LLC / {page.eyebrow}</span><h1 className="page-enter">{page.title}</h1><p className="page-enter">{page.summary}</p><div className="page-hero-actions page-enter"><a href="#page-story" className="button button-gold">Explore the story <Icon name="arrow" size={18}/></a><Link href="/contact" className="button button-ghost">Contact Us</Link></div></div>
      <div className="page-hero-index container"><span>INSIGHT / {page.eyebrow}</span><span>DWP WYOMING LLC</span></div>
    </section>
    <section className="editorial-intro section-pad" id="page-story"><div className="container editorial-grid"><Reveal><div className="section-index"><span className="rule"/> THE PERSPECTIVE</div><h2>{page.introTitle}</h2></Reveal><Reveal delay={130}><div className="editorial-prose">{page.intro.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div></Reveal></div></section>
    <section className="page-cards section-pad section-muted"><div className="container"><Reveal><span className="eyebrow dark-eyebrow">EXPLORE THE DETAILS</span><div className="section-head"><h2>{page.cardsTitle}</h2><span className="fine-line"/></div></Reveal><div className="visual-card-grid">{page.cards.map((card, i) => <Reveal key={card.title} delay={i * 85}><VisualCard card={card} index={i}/></Reveal>)}</div></div></section>
    <section className="editorial-end dark-section section-pad"><div className="container editorial-end-grid"><Reveal><div className="section-index"><span className="rule"/> THE NEXT CONVERSATION</div><h2>{page.closingTitle}</h2></Reveal><Reveal delay={120}><p>{page.closing}</p><RelatedLink page={page}/></Reveal></div></section>
  </main>;
}
