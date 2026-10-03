import type { MediaKey } from "./media";

// Updated Card type to support external image URLs
export type Card = { 
  title: string; 
  body: string; 
  icon: string; 
  href?: string; 
  image?: MediaKey; 
  imageSrc?: string; // New field for external URLs
};

export type PageSpec = {
  path: string;
  eyebrow: string;
  title: string;
  summary: string;
  image?: MediaKey;
  imageAlt?: string;
  introTitle: string;
  intro: string[];
  cardsTitle: string;
  cards: Card[];
  closingTitle: string;
  closing: string;
  accent?: "dark" | "light";
};

export const pages: Record<string, PageSpec> = {
  about: {
    path: "/about", eyebrow: "THE COMPANY", title: "Grounded in Wyoming. Open to the world.",
    summary: "DWP Wyoming LLC brings a measured, modern perspective to business relationships, market awareness and opportunities across borders.",
    image: "aboutFoundation", imageAlt: "Historic barn beneath the Grand Teton mountains in Wyoming",
    introTitle: "A clear point of view matters.",
    intro: [
      "DWP Wyoming LLC is presented here as a platform for thoughtful business development and professional connection. Its Wyoming identity is a starting point, while its outlook considers how people, markets and ideas intersect internationally.",
      "Our public website introduces the themes that shape those conversations: structured thinking, constructive relationships, changing markets and an interest in emerging technology. Each engagement requires its own facts, scope and appropriate professional expertise.",
      "We would rather describe an approach carefully than attach unsupported numbers, claims or credentials to it. This site is an introduction—not a statement that any regulated service, specific partnership or investment product is available."
    ],
    cardsTitle: "Principles we return to",
    cards: [
      { 
        title: "Integrity", 
        body: "Straightforward communication and clear expectations before any work begins.", 
        icon: "shield",
        imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        title: "Strategy", 
        body: "A preference for considered steps over reactive decisions.", 
        icon: "plan",
        imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        title: "Perspective", 
        body: "The ability to see local circumstances within a wider business context.", 
        icon: "globe",
        imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        title: "Partnership", 
        body: "Productive relationships built on listening, fit and mutual understanding.", 
        icon: "link",
        imageSrc: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
      }
    ],
    closingTitle: "The next chapter begins with a conversation.", closing: "If your priorities connect with our areas of interest, tell us what you are exploring and we can begin with the right questions."
  },
  business: {
    path: "/business", eyebrow: "BUSINESS", title: "Ideas become stronger in the right company.",
    summary: "A connected perspective on development, partnerships and the changing landscape of global assets.",
    image: "businessOverview", imageAlt: "Executives discussing a global business map in an office",
    introTitle: "Connection with direction.",
    intro: [
      "Business progress rarely follows a straight line. It calls for a clear understanding of the objective, the people involved and the conditions around a decision. DWP's public business themes reflect that practical starting point.",
      "From emerging opportunities to established categories, we favor a broad lens: careful research, useful introductions and structured discussion. The pages below explain those themes without implying a transaction or offering a financial product."
    ],
    cardsTitle: "Explore our business themes",
    cards: [
      { 
        title: "Business Development", 
        body: "How an opportunity is defined, tested and moved forward in deliberate stages.", 
        icon: "growth", 
        href: "/business/development",
        imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Strategic Partnerships", 
        body: "The importance of alignment, responsibilities and trust in collaboration.", 
        icon: "link", 
        href: "/business/partnerships",
        imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Global Assets", 
        body: "A broader vocabulary for understanding traditional and emerging categories.", 
        icon: "globe", 
        href: "/business/global-assets",
        imageSrc: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "A wider business conversation.", closing: "The most useful beginning is often a better question. Explore the specific areas above or start a direct conversation."
  },
  "business/development": {
    path: "/business/development", eyebrow: "BUSINESS / DEVELOPMENT", title: "Progress begins with a better brief.",
    summary: "A practical framework for turning early-stage possibilities into well-understood next steps.",
    image: "businessDevelopment", imageAlt: "Business team reviewing an expansion roadmap in an office",
    introTitle: "From possibility to a defined path.",
    intro: [
      "Development starts by naming the opportunity clearly. Who is it for? What problem does it address? Which assumptions still need evidence? Without those answers, momentum can look like progress while adding little clarity.",
      "A disciplined conversation then considers stakeholders, timing and constraints. A useful plan does not promise an outcome; it helps people understand dependencies, sequence conversations and decide what deserves further investigation.",
      "DWP's interest in business development is anchored in that process-oriented view. This page describes a way of thinking, not a guarantee of introductions, projects or growth."
    ],
    cardsTitle: "A considered sequence",
    cards: [
      { 
        title: "Define", 
        body: "Write down the objective, decision-maker and assumptions to examine.", 
        icon: "plan",
        imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Explore", 
        body: "Gather context and relevant perspectives before narrowing choices.", 
        icon: "search",
        imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Align", 
        body: "Clarify responsibilities and potential next steps with the right people.", 
        icon: "link",
        imageSrc: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Clarity is a competitive advantage.", closing: "Bring us the context, not just the headline, and we can have a more productive first discussion."
  },
  "business/partnerships": {
    path: "/business/partnerships", eyebrow: "BUSINESS / PARTNERSHIPS", title: "The strongest connections have a shared purpose.",
    summary: "A thoughtful approach to professional relationships across disciplines and geographies.",
    image: "businessPartnerships", imageAlt: "Business professionals collaborating around a laptop",
    introTitle: "Alignment before announcement.",
    intro: [
      "A valuable relationship is more than a familiar logo or an introduction. It rests on compatible aims, an honest understanding of capabilities and a clear view of who is responsible for what.",
      "Different organizations bring different ways of working. Listening first helps surface whether their timelines, values and expectations can support a constructive relationship. Good collaboration also makes room for independent judgment when it is needed.",
      "References to partnerships on this site describe a business theme; they do not assert that DWP has a named partner, signed alliance or formal arrangement."
    ],
    cardsTitle: "What we look for in collaboration",
    cards: [
      { 
        title: "Shared intent", 
        body: "A common definition of the problem and what a useful outcome would mean.", 
        icon: "target",
        imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Clear roles", 
        body: "An understanding of boundaries, expertise and accountabilities.", 
        icon: "plan",
        imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Durable trust", 
        body: "Candor and reliability through routine work, not just at the outset.", 
        icon: "shield",
        imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Relationships are built, not declared.", closing: "If you see a potential area of alignment, introduce the idea and the people behind it."
  },
  "business/global-assets": {
    path: "/business/global-assets", eyebrow: "BUSINESS / ASSETS", title: "A broad view of a changing landscape.",
    summary: "Traditional categories and digital developments belong in one informed conversation, not in competing headlines.",
    image: "businessGlobalAssets", imageAlt: "Brass globe and business materials on a dark executive desk",
    introTitle: "Context before conclusions.",
    intro: [
      "Global assets span many categories with different ownership structures, liquidity, time horizons and risks. The labels alone tell only part of the story; the underlying terms and the purpose of an exposure matter more.",
      "Digital assets add another layer of technology and operational questions. Their volatility, custody arrangements and legal treatment can vary substantially. This website acknowledges the category as part of a broader business environment, not as a recommendation to buy or sell anything.",
      "DWP does not publish client holdings, assets under management or performance information here. No investment management or advisory service is represented by this page."
    ],
    cardsTitle: "A balanced lens",
    cards: [
      { 
        title: "Structures", 
        body: "Understand what an asset actually represents and how it is held.", 
        icon: "layers",
        imageSrc: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Risks", 
        body: "Consider liquidity, counterparties, operations and changing rules.", 
        icon: "shield",
        imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Relevance", 
        body: "Separate broad market interest from a decision appropriate to a specific person.", 
        icon: "target",
        imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Keep the conversation grounded.", closing: "Our Learning pages explain concepts in plain language; qualified independent advisers can address personal decisions."
  },
  services: {
    path: "/services", eyebrow: "SERVICES", title: "Thoughtful structure for complex conversations.",
    summary: "Explore corporate organization and market-awareness themes that support more informed discussion.",
    image: "servicesOverview", imageAlt: "Professionals working together in a contemporary office",
    introTitle: "Support starts with understanding.",
    intro: [
      "Businesses face different challenges at different moments. Some need to define a collaboration model; others need a clearer picture of the environment around a possible decision.",
      "These pages describe the areas DWP wants to discuss publicly. Scope, responsibilities and any engagement terms must be agreed separately. We do not use a website headline as a substitute for a specific proposal or professional advice."
    ],
    cardsTitle: "Areas of focus",
    cards: [
      { 
        title: "Corporate Solutions", 
        body: "Organizing people, process and information around a business objective.", 
        icon: "building", 
        href: "/services/corporate-solutions",
        imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Market Insights", 
        body: "A disciplined way to interpret signals without mistaking them for certainty.", 
        icon: "chart", 
        href: "/services/market-insights",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "The right scope is specific.", closing: "Share the context of your question and we can discuss whether a next conversation makes sense."
  },
  "services/corporate-solutions": {
    path: "/services/corporate-solutions", eyebrow: "SERVICES / CORPORATE", title: "Make the way forward easier to see.",
    summary: "Corporate questions benefit from a clear objective, a useful process and the right participants.",
    image: "servicesCorporate", imageAlt: "Architectural model and planning documents in a modern office",
    introTitle: "Structure supports good decisions.",
    intro: [
      "A corporate challenge often arrives with competing timelines and incomplete information. Before selecting a path, it helps to identify the decision, the people affected and the evidence still missing.",
      "An effective working structure might distinguish discovery from evaluation, define roles and record what has been agreed. This can reduce friction without pretending that every issue has a single template answer.",
      "Legal, tax, financial and regulatory matters require appropriately qualified independent professionals. This website does not represent DWP as providing those regulated services."
    ],
    cardsTitle: "A useful working model",
    cards: [
      { 
        title: "Frame the question", 
        body: "Start with the decision to be made, rather than a favored answer.", 
        icon: "target",
        imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Map the people", 
        body: "Bring in the right expertise and clarify who decides what.", 
        icon: "link",
        imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Document the path", 
        body: "Make assumptions and next steps understandable to everyone involved.", 
        icon: "plan",
        imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Practical starts are often simple.", closing: "A short, well-framed conversation can reveal which issues deserve more detailed work."
  },
  "services/market-insights": {
    path: "/services/market-insights", eyebrow: "SERVICES / MARKET CONTEXT", title: "See the signals. Question the story.",
    summary: "Market awareness is less about prediction than about understanding what is changing and why.",
    image: "servicesMarket", imageAlt: "Analyst viewing abstract market visuals in a quiet office",
    introTitle: "Information needs interpretation.",
    intro: [
      "A headline, a chart and a long-term trend are not the same thing. Each has a time frame, a source and limits. Useful market conversations ask what data can show, what it cannot show and which assumptions are hiding behind a conclusion.",
      "The mix of technology, policy, capital and real-world activity keeps shifting. Watching these factors together can inform better questions about timing and business fit, without creating certainty about what happens next.",
      "Any market examples here are educational context only. They are not research reports, personalized recommendations, price forecasts or a claim of investment-advisory activity."
    ],
    cardsTitle: "Three habits of perspective",
    cards: [
      { 
        title: "Check the source", 
        body: "Separate verified data from an attractive narrative or an isolated opinion.", 
        icon: "search",
        imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Consider the horizon", 
        body: "Short-term movements and structural change require different lenses.", 
        icon: "chart",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Keep uncertainty visible", 
        body: "Make room for alternative explanations and incomplete evidence.", 
        icon: "shield",
        imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Curiosity is useful. Certainty is expensive.", closing: "Explore the Learning guides for foundational context across digital assets and property."
  },
  "learning/crypto": {
    path: "/learning/crypto", eyebrow: "LEARNING / DIGITAL ASSETS", title: "Understand the network before the narrative.",
    summary: "A plain-language introduction to blockchain records, digital assets, custody and the risks that surround them.",
    image: "learningCrypto", imageAlt: "Gold-colored Bitcoin token on a dark, unmarked background",
    introTitle: "What the technology changes—and what it does not.",
    intro: [
      "A blockchain is a shared record maintained according to a set of network rules. Digital assets can represent different rights or functions; the word “crypto” does not describe one uniform product. Understanding the specific network, asset and use case matters more than the category label.",
      "Transactions may be public while ownership is controlled through private keys. Losing access to those keys, sending to a wrong address or relying on an unsuitable intermediary can have serious consequences. Market price risk sits alongside these operational risks.",
      "This guide is for general education. It does not recommend a token, exchange, allocation or trading strategy. Digital assets can be highly volatile and involve possible loss of principal."
    ],
    cardsTitle: "Start with the fundamentals",
    cards: [
      { 
        title: "Networks", 
        body: "Learn how a distributed record reaches agreement and why different designs make different trade-offs.", 
        icon: "network", 
        image: "cryptoNetwork" 
      },
      { 
        title: "Ownership", 
        body: "Distinguish control of a private key from a balance shown in an app or account.", 
        icon: "key",
        imageSrc: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Market context", 
        body: "Consider liquidity, volatility and information quality before interpreting price moves.", 
        icon: "coin",
        imageSrc: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "A careful next step: custody and risk.", closing: "The deeper guide explains wallet choices, operational safeguards and common questions to ask before using any provider."
  },
  "learning/crypto/custody-and-risk": {
    path: "/learning/crypto/custody-and-risk", eyebrow: "LEARNING / CRYPTO GUIDE", title: "Control, custody and consequences.",
    summary: "A deeper educational look at private keys, service providers, failure modes and practical safeguards.",
    image: "learningCustody", imageAlt: "Gold-colored Bitcoin token resting on a computer keyboard",
    introTitle: "Who can move the asset?",
    intro: [
      "Custody begins with the question of control. In self-custody, the user is responsible for protecting the credentials that authorize transactions. With a third-party service, the user depends on that provider's systems, terms and financial condition. Neither arrangement removes every risk.",
      "A recovery phrase or private key can be more consequential than a familiar password. Phishing, device compromise, address errors and inadequate backup procedures can lead to irreversible loss. Operational discipline matters even when an interface appears simple.",
      "Before relying on a provider, read the custody agreement, understand whether assets are segregated, examine withdrawal controls and ask how outages and disputes are handled. These questions are educational prompts, not an endorsement of a specific service."
    ],
    cardsTitle: "Questions worth asking",
    cards: [
      { 
        title: "Access", 
        body: "Who holds the key, and what happens if access is lost or an account is frozen?", 
        icon: "key",
        // ADDED IMAGE HERE FOR "Who can move the asset?" section
        imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Recovery", 
        body: "Are backups protected, tested and separated from everyday devices?", 
        icon: "shield",
        imageSrc: "https://plus.unsplash.com/premium_photo-1663040454423-30ce7ed209ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVidWd8ZW58MHx8MHx8fDA%3D"
      },
      { 
        title: "Counterparties", 
        body: "Which organizations and technical systems sit between a user and an asset?", 
        icon: "network",
        // ENSURED IMAGE IS HERE FOR "Counterparties"
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOKgJZ1ayBZs0FGnMe28U7Qzxkf8MJU3rtR5Q6TCi0cFIQ8IlBFkPLvql&s=10"
      }
    ],
    closingTitle: "Education is not a substitute for advice.", closing: "For personal legal, tax, security or investment decisions, consult qualified independent professionals who understand the circumstances."
  },
  "learning/real-estate": {
    path: "/learning/real-estate", eyebrow: "LEARNING / PROPERTY", title: "Read the place, not just the price.",
    summary: "An introduction to the physical, financial and local factors that shape real-estate decisions.",
    image: "learningRealEstate", imageAlt: "Contemporary commercial buildings with broad glass windows",
    introTitle: "Property is a collection of specifics.",
    intro: [
      "A building has a location, condition, use, title and local market. Two properties with similar asking prices can differ greatly because of access, maintenance needs, tenant arrangements, zoning or surrounding development.",
      "Cash flow is only one lens. Operating expenses, reserves, financing terms, taxes and vacancies can materially change a scenario. Assumptions deserve the same attention as a spreadsheet's final line.",
      "This learning hub is separate from our digital-assets education. Property is physical, locally regulated and often illiquid; it should not be analyzed as if it were a token or an instantly tradable market. This material is educational, not property or investment advice."
    ],
    cardsTitle: "A property-learning framework",
    cards: [
      { 
        title: "Place", 
        body: "Access, neighborhood use, planning rules and comparable local activity.", 
        icon: "building", 
        image: "propertyPlan" 
      },
      { 
        title: "Condition", 
        body: "Building systems, maintenance history and potential capital works.", 
        icon: "plan",
        imageSrc: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Economics", 
        body: "Income assumptions, operating costs, financing and time horizon.", 
        icon: "chart",
        imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Move from overview to diligence.", closing: "Our property due-diligence guide organizes the records, people and questions that can turn an impression into a more informed review."
  },
  "learning/real-estate/due-diligence": {
    path: "/learning/real-estate/due-diligence", eyebrow: "LEARNING / PROPERTY GUIDE", title: "Look beneath the listing.",
    summary: "A practical educational checklist for examining a property's documents, condition and assumptions.",
    image: "learningDueDiligence", imageAlt: "Architectural model and plans being examined with a magnifier",
    introTitle: "A property story should be testable.",
    intro: [
      "Begin with the legal and physical facts: ownership records, permitted use, boundaries, survey, environmental context and the condition of major systems. A site visit and qualified inspections can expose questions that marketing photographs cannot.",
      "Then examine the operating picture. Review leases where relevant, historical expenses, taxes, insurance, planned works and the assumptions behind any projected income. Financing terms and transaction costs can change the picture again.",
      "Local lawyers, surveyors, engineers, tax professionals and licensed real-estate specialists may all have distinct roles. This checklist does not replace their work, and it does not certify that any property is suitable or available."
    ],
    cardsTitle: "Four diligence lenses",
    cards: [
      { 
        title: "Records", 
        body: "Confirm title, zoning, permitted use and material agreements.", 
        icon: "document",
        imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Site", 
        body: "Review physical condition, access, systems and independent inspection findings.", 
        icon: "building",
        imageSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Operations", 
        body: "Understand tenants, expenses, reserves and practical management demands.", 
        icon: "plan",
        imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Scenario", 
        body: "Test assumptions under more than one plausible set of conditions.", 
        icon: "chart",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Good diligence is a team activity.", closing: "Use these prompts to organize questions for appropriately qualified local professionals."
  },
  privacy: {
    path: "/privacy", eyebrow: "SITE NOTICE", title: "Privacy and your enquiry.",
    summary: "A transparent note about this public site and its current contact-form state.",
    introTitle: "What this website does today.",
    intro: [
      "This static website can be browsed without creating a public-site account. The separate client application has its own arrangements and should be reviewed independently.",
      "The contact form on this site is not connected to a delivery service. Information typed into it is checked in your browser but is not transmitted to DWP through this website. Please do not enter sensitive personal or financial information.",
      "The theme control stores your explicit light/dark preference in your browser. The optional Google Translate feature may contact Google's service if you use it, subject to Google's own practices. This notice is a limited product description, not a substitute for an owner-approved full privacy policy."
    ],
    cardsTitle: "Your choices",
    cards: [
      { 
        title: "Browse", 
        body: "Read public content without registering here.", 
        icon: "document",
        imageSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
      }, 
      { 
        title: "Theme", 
        body: "Your selected appearance is saved locally in this browser.", 
        icon: "sun",
        imageSrc: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Need an approved policy?", closing: "The website owner should replace this limited notice with a reviewed policy before collecting enquiries."
  },
  terms: {
    path: "/terms", eyebrow: "SITE NOTICE", title: "Terms of this public website.",
    summary: "General information about how to interpret the content and links on this site.",
    introTitle: "An introduction, not an engagement.",
    intro: [
      "The pages on this site provide general corporate and educational information. They do not create a client relationship or an offer of regulated services, securities, property or products.",
      "Some links lead to a separate application or third-party services. Those services may have their own terms and controls. Verify important facts and consult qualified independent professionals before acting on legal, tax, financial or property matters.",
      "Illustrative images do not depict verified DWP staff, offices, clients, holdings or transactions. This is a limited website notice, not an owner-approved legal agreement."
    ],
    cardsTitle: "How to use the site",
    cards: [
      { 
        title: "General information", 
        body: "Treat educational examples as context rather than individualized direction.", 
        icon: "document",
        imageSrc: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
      }, 
      { 
        title: "Independent judgment", 
        body: "Check current facts and specialist advice for consequential decisions.", 
        icon: "shield",
        imageSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Questions about a particular matter?", closing: "Use the contact page for a preliminary discussion; any actual engagement must have agreed scope and terms."
  },
  disclosures: {
    path: "/disclosures", eyebrow: "SITE NOTICE", title: "Important information, plainly stated.",
    summary: "The distinction between discussing markets and providing professional advice matters.",
    introTitle: "Context, not a promise.",
    intro: [
      "DWP Wyoming LLC's public website describes broad business themes and offers educational introductions to digital assets and real estate. It does not represent that DWP is registered or licensed to provide investment advisory, brokerage, legal, tax, insurance, custody or real-estate services.",
      "Digital assets may be volatile, technologically complex and subject to loss. Real estate can be illiquid and subject to local legal, financing, physical and market risks. No example or visual on this site represents a return, client result or forecast.",
      "Use suitably qualified independent professionals for advice specific to your situation. Any future service descriptions or required regulatory disclosures should be added only after verification by the site owner and appropriate counsel."
    ],
    cardsTitle: "Keep the distinction clear",
    cards: [
      { 
        title: "Education", 
        body: "Foundational explanations help frame better questions.", 
        icon: "document",
        imageSrc: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
      }, 
      { 
        title: "Advice", 
        body: "Personal recommendations require appropriate expertise, facts and authorization.", 
        icon: "shield",
        imageSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
      }
    ],
    closingTitle: "Clarity before commitment.", closing: "Contact DWP for a preliminary conversation and confirm the scope of any proposed arrangement in writing."
  }
};

export const pageKeys = Object.keys(pages);