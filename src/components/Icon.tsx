import type { ReactNode } from "react";

type IconProps = { name: string; size?: number; className?: string };

export function Icon({ name, size = 28, className = "" }: IconProps) {
  let content: ReactNode;
  switch (name) {
    case "arrow": content = <><path d="M4 12h15m-6-6 6 6-6 6" /></>; break;
    case "chevron": content = <path d="m6 9 6 6 6-6" />; break;
    case "menu": content = <><path d="M4 7h16M4 12h16M4 17h16" /></>; break;
    case "close": content = <><path d="M5 5 19 19M19 5 5 19" /></>; break;
    case "globe": content = <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-3 3-3 15 0 18M12 3c3 3 3 15 0 18"/></>; break;
    case "growth": content = <><path d="M3 19h18M5 16l5-5 4 3 6-8"/><path d="M16 6h4v4"/></>; break;
    case "link": content = <><path d="M10 7H8a5 5 0 0 0 0 10h3M14 7h2a5 5 0 0 1 0 10h-3M8 12h8"/></>; break;
    case "shield": content = <><path d="M12 2 20 5v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z"/><path d="m8 12 3 3 5-6"/></>; break;
    case "plan": content = <><path d="M5 3h14v18H5zM8 7h8M8 11h8M8 15h5"/><circle cx="17" cy="16" r="1"/></>; break;
    case "search": content = <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></>; break;
    case "target": content = <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>; break;
    case "layers": content = <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/></>; break;
    case "building": content = <><path d="M4 21V8l8-5 8 5v13H4ZM9 21v-5h6v5M8 10h1M15 10h1M8 13h1M15 13h1"/></>; break;
    case "chart": content = <><path d="M3 3v18h18M6 16l4-4 3 2 6-7M16 7h3v3"/></>; break;
    case "network": content = <><circle cx="12" cy="4" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><circle cx="12" cy="13" r="2"/><path d="m12 6 0 5M10 14l-5 3M14 14l5 3"/></>; break;
    case "key": content = <><circle cx="8" cy="9" r="5"/><path d="M12 12 21 21m-4-4 2-2m0 4 2-2"/></>; break;
    case "document": content = <><path d="M5 2h10l4 4v16H5V2ZM15 2v5h4M8 12h8M8 16h8"/></>; break;
    case "sun": content = <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></>; break;
    case "moon": content = <path d="M20.5 15.5A9 9 0 0 1 8.5 3.5 9 9 0 1 0 20.5 15.5Z"/>; break;
    case "coin": content = <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><path d="M15 9.5c-.5-1-1.5-1.5-3-1.5-2 0-3 1-3 2.2 0 3 6 1.2 6 4.3 0 1.5-1.3 2.5-3 2.5-1.6 0-2.6-.6-3.2-1.6M12 6v12"/></>; break;
    case "mail": content = <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></>; break;
    default: content = <><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></>;
  }
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{content}</svg>;
}
