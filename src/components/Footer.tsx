import Link from "next/link";
import { accountUrl } from "@/content/navigation";
import { Icon } from "./Icon";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-top container"><div><span className="eyebrow">THE CONVERSATION STARTS HERE</span><h2>A wider view begins with a better question.</h2></div><Link href="/contact" className="button button-gold">Contact Us <Icon name="arrow" size={18}/></Link></div>
    <div className="footer-grid container">
      <div className="footer-brand"><Link href="/" className="brand" aria-label="DWP Wyoming LLC home"><img src="/assets/logo.svg" alt="" width="48" height="48"/><span className="brand-words"><strong>DWP</strong><small>WYOMING LLC</small></span></Link><p>Wyoming-rooted. Globally minded.<br/>A modern perspective on business and connection.</p><small>dwpwyomingllc.com</small></div>
      <div><h3>Company</h3><Link href="/about">About</Link><Link href="/business">Business</Link><Link href="/services">Services</Link><Link href="/opportunities">Global Opportunities</Link><Link href="/contact">Contact</Link></div>
      <div><h3>Explore</h3><Link href="/business/development">Business Development</Link><Link href="/business/partnerships">Strategic Partnerships</Link><Link href="/services/corporate-solutions">Corporate Solutions</Link><Link href="/services/market-insights">Market Insights</Link><Link href="/business/global-assets">Global Assets</Link></div>
      <div><h3>Learn & account</h3><Link href="/learning/crypto">Crypto Learning</Link><Link href="/learning/crypto/custody-and-risk">Custody & Risk</Link><Link href="/learning/real-estate">Real Estate Learning</Link><Link href="/learning/real-estate/due-diligence">Property Due Diligence</Link><a href={accountUrl}>Client Login</a><a href={accountUrl}>Sign Up</a></div>
    </div>
    <div className="footer-bottom container"><p>© 2026 DWP Wyoming LLC. All rights reserved.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclosures">Disclosures</Link></div></div>
    <div className="footer-disclaimer container">Content is general business and educational information, not investment, legal, tax or real-estate advice. Illustrative visuals do not depict verified DWP personnel, offices or results.</div>
  </footer>;
}
