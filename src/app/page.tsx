import type { Metadata } from "next";
import Link from "next/link";
import { HeroMedia } from "../components/HeroMedia";
import { Icon } from "../components/Icon";
import { MediaImage } from "../components/MediaImage";
import { Reveal } from "../components/Reveal";
import { VisualCard } from "../components/VisualCard";
import { media } from "../content/media";
import { accountUrl } from "../content/navigation";

export const metadata: Metadata = { 
  title: { absolute: "DWP Wyoming LLC | Global Business & Corporate Perspective" }, 
  description: "DWP Wyoming LLC connects a Wyoming foundation with global business development, strategic relationships and a measured perspective on emerging markets.", 
  alternates: { canonical: "https://dwpwyomingllc.com/" } 
};

// Updated Focus Cards with Unsplash Images
const focus = [
  { 
    title: "Business Development", 
    body: "Give an idea context, direction and the right questions before the next move.", 
    imageSrc: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "growth", // Kept for the small number icon, but main art is now image
    href: "/business/development" 
  },
  { 
    title: "Strategic Relationships", 
    body: "Explore what happens when clarity and shared purpose come first.", 
    imageSrc: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    icon: "link",
    href: "/business/partnerships" 
  },
  { 
    title: "Corporate Solutions", 
    body: "Bring people, process and information into a more useful structure.", 
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: "building",
    href: "/services/corporate-solutions" 
  },
  { 
    title: "Market Perspective", 
    body: "Stay curious about the signals shaping a changing business environment.", 
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    icon: "chart",
    href: "/services/market-insights" 
  }
];

export default function Home() {
  return <main id="main-content">
    <HeroMedia/>
    <section className="home-intro section-pad" id="home-intro">
      <div className="container home-intro-grid">
        <Reveal>
          <span className="eyebrow dark-eyebrow">THE DWP PERSPECTIVE</span>
          <h2>Rooted in one place. <em>Looking beyond borders.</em></h2>
        </Reveal>
        <Reveal delay={150}>
          <p>The most meaningful opportunities are built through informed conversation. DWP Wyoming LLC approaches business with a local foundation and an openness to the people, ideas and changing conditions that shape markets around the world.</p>
          <Link href="/about" className="text-link">Discover our perspective <Icon name="arrow" size={19}/></Link>
        </Reveal>
      </div>
    </section>

    <section className="home-focus section-pad section-muted">
      <div className="container">
        <Reveal>
          <span className="eyebrow dark-eyebrow">01 / WHAT WE EXPLORE</span>
          <div className="section-head">
            <h2>Business has more than <em>one horizon.</em></h2>
            <p>Four interconnected themes. Each one begins with context rather than a promise.</p>
          </div>
        </Reveal>
        <div className="visual-card-grid four-up">
          {focus.map((card, i) => (
            <Reveal key={card.title} delay={i * 70}>
              <VisualCard card={card} index={i}/>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="home-feature dark-section">
      <div className="feature-photo">
        <MediaImage src={media.homeBoardroom} alt="Executives in a thoughtful boardroom discussion" className="feature-image"/>
      </div>
      <div className="feature-copy">
        <Reveal>
          <span className="eyebrow">02 / THE CONVERSATION</span>
          <h2>Good decisions start <em>around the table.</em></h2>
          <p>Different experience. Better questions. A structured exchange can reveal the real shape of an opportunity before anyone decides what comes next.</p>
          <Link href="/business" className="button button-outline">Explore Business <Icon name="arrow" size={18}/></Link>
        </Reveal>
      </div>
    </section>

    <section className="home-global section-pad">
      <div className="container global-grid">
        <Reveal>
          <div className="global-art" aria-hidden="true">
            <div className="global-ring ring-one"/>
            <div className="global-ring ring-two"/>
            <Icon name="globe" size={135}/>
            <span className="global-point point-one"/>
            <span className="global-point point-two"/>
            <span className="global-point point-three"/>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="eyebrow dark-eyebrow">03 / A WIDER LENS</span>
          <h2>Connected to a wider business environment.</h2>
          <p>From Wyoming to international centers of commerce, we look for perspective that makes conversations more informed and more useful. Global thinking is not a claim of offices everywhere; it is a commitment to ask better questions across boundaries.</p>
          <Link href="/opportunities" className="text-link">Explore Global Opportunities <Icon name="arrow" size={19}/></Link>
        </Reveal>
      </div>
    </section>

    <section className="home-mobile dark-section">
      <div className="mobile-copy">
        <Reveal>
          <span className="eyebrow">04 / WORK IN MOTION</span>
          <h2>Business at <em>your fingertips.</em></h2>
          <p>Read, connect and continue the conversation wherever your work takes you. Existing clients can access the separate DWP application when they need it.</p>
          <a href={accountUrl} className="button button-gold">Client Login <Icon name="arrow" size={18}/></a>
        </Reveal>
      </div>
      <MediaImage src={media.mobileBusiness} alt="Professional working with phone and laptop while traveling" className="mobile-photo"/>
    </section>

    <section className="learning-preview section-pad section-muted">
      <div className="container">
        <Reveal>
          <span className="eyebrow dark-eyebrow">05 / LEARN WITH CONTEXT</span>
          <div className="section-head">
            <h2>Two fields. <em>Different questions.</em></h2>
            <p>Explore foundational ideas without mistaking educational content for personal advice.</p>
          </div>
        </Reveal>
        <div className="learning-preview-grid">
          <Reveal>
            {/* Updated Crypto Tile with Image */}
            <Link href="/learning/crypto" className="learning-tile crypto-tile">
              <div className="tile-art">
                 <img 
                  src="https://images.unsplash.com/photo-1716279083176-60af7a63cb03?ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTcyOTg1NDI2NXw&ixlib=rb-4.0.3" 
                  alt="Crypto networks" 
                  className="tile-image"
                />
              </div>
              <span>THE DIGITAL LANDSCAPE</span>
              <h3>Crypto Learning</h3>
              <p>Networks, ownership, custody and volatility—explained without the hype.</p>
              <span className="text-link">Explore the guide <Icon name="arrow" size={18}/></span>
            </Link>
          </Reveal>
          <Reveal delay={100}>
            {/* Updated Real Estate Tile with Image */}
            <Link href="/learning/real-estate" className="learning-tile property-tile">
              <div className="tile-art">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" 
                  alt="Real estate buildings" 
                  className="tile-image"
                />
              </div>
              <span>THE BUILT ENVIRONMENT</span>
              <h3>Real Estate Learning</h3>
              <p>Place, property condition, economics and the importance of local diligence.</p>
              <span className="text-link">Explore the guide <Icon name="arrow" size={18}/></span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="experience-note section-pad">
      <div className="container experience-grid">
        <Reveal>
          <span className="eyebrow dark-eyebrow">CLIENT EXPERIENCE</span>
          <h2>Trust is earned in the work.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p>We will share client experiences here only when genuine feedback has been provided and permission to publish it has been confirmed. No invented testimonial stands in for a real relationship.</p>
          <span className="experience-label">VERIFIED STORIES / PENDING OWNER APPROVAL</span>
        </Reveal>
      </div>
    </section>
  </main>;
}