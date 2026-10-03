export const accountUrl = "https://app.dwpwyomingllc.com";

export type NavItem = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href: string; eyebrow: string; intro: string; links: NavItem[] };

export const navigation: NavGroup[] = [
  { label: "About", href: "/about", eyebrow: "OUR PERSPECTIVE", intro: "A Wyoming foundation with a wider view of business.", links: [
    { label: "Company & Values", href: "/about", description: "What shapes our approach" },
    { label: "Get in Touch", href: "/contact", description: "Begin a conversation" }
  ] },
  { label: "Business", href: "/business", eyebrow: "BUSINESS THEMES", intro: "A considered path from possibility to working relationship.", links: [
    { label: "Business Overview", href: "/business", description: "Our areas of interest" },
    { label: "Development", href: "/business/development", description: "Define, explore and align" },
    { label: "Strategic Partnerships", href: "/business/partnerships", description: "Build on shared purpose" },
    { label: "Global Assets", href: "/business/global-assets", description: "Understand the wider landscape" }
  ] },
  { label: "Services", href: "/services", eyebrow: "WAYS OF THINKING", intro: "Clear process and context for complex questions.", links: [
    { label: "Services Overview", href: "/services", description: "Start with understanding" },
    { label: "Corporate Solutions", href: "/services/corporate-solutions", description: "Structure the conversation" },
    { label: "Market Insights", href: "/services/market-insights", description: "Interrogate the signals" }
  ] },
  { label: "Global Opportunities", href: "/opportunities", eyebrow: "BEYOND BORDERS", intro: "From a local foundation to an international perspective.", links: [
    { label: "Explore Opportunities", href: "/opportunities", description: "A global business lens" },
    { label: "Wyoming to the World", href: "/opportunities#wyoming-world", description: "Our visual story" },
    { label: "Opportunity Gallery", href: "/opportunities#opportunity-gallery", description: "Four perspectives" }
  ] },
  { label: "Learning", href: "/learning/crypto", eyebrow: "LEARN WITH CONTEXT", intro: "Two distinct guides for two very different environments.", links: [
    { label: "Crypto Learning", href: "/learning/crypto", description: "Networks, assets and volatility" },
    { label: "Custody & Risk", href: "/learning/crypto/custody-and-risk", description: "Control and safeguards" },
    { label: "Real Estate Learning", href: "/learning/real-estate", description: "Places, property and economics" },
    { label: "Property Due Diligence", href: "/learning/real-estate/due-diligence", description: "Examine the details" }
  ] }
];
