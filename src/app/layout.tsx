import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { media } from "../content/media";
import "./globals.css";

const origin = "https://dwpwyomingllc.com";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: "DWP Wyoming LLC | Global Business Perspective", template: "%s | DWP Wyoming LLC" },
  description: "DWP Wyoming LLC explores business development, strategic relationships, global opportunities and informed market conversations.",
  applicationName: "DWP Wyoming LLC",
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon.svg", type: "image/svg+xml" }, { url: "/assets/favicon.png", type: "image/png" }], apple: "/assets/favicon.png" },
  openGraph: { type: "website", siteName: "DWP Wyoming LLC", locale: "en_US", title: "DWP Wyoming LLC | Global Business Perspective", description: "A Wyoming-rooted corporate platform with a global perspective on business and connection.", url: origin, images: [{ url: media.heroDesktop, width: 1280, height: 720, alt: "DWP Wyoming LLC corporate outlook" }] },
  twitter: { card: "summary_large_image", title: "DWP Wyoming LLC", description: "A wider view of business and global connection.", images: [media.heroDesktop] },
  alternates: { canonical: origin },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "DWP Wyoming LLC", url: origin, logo: `${origin}/assets/logo.svg` };
  return <html lang="en"><head><meta name="theme-color" content="#0c0b0a"/><link rel="preload" href={media.heroDesktop} as="image" media="(min-width: 701px)"/><link rel="preload" href={media.heroMobile} as="image" media="(max-width: 700px)"/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}/></head><body><a href="#main-content" className="skip-link">Skip to content</a><Header/>{children}<Footer/></body></html>;
}
