"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type Language = { code: string; label: string; flag: string };
const languages: Language[] = [
  { code: "en", label: "English", flag: "us" }, { code: "fr", label: "Français", flag: "fr" },
  { code: "es", label: "Español", flag: "es" }, { code: "de", label: "Deutsch", flag: "de" },
  { code: "ar", label: "العربية", flag: "ar" }, { code: "zh-CN", label: "中文", flag: "cn" }
];
const languageEvent = "dwp-language-change";
const widgetId = "google_translate_element";

declare global { interface Window { google?: { translate?: { TranslateElement: new (options: object, id: string) => unknown } }; dwpTranslateInit?: () => void } }

function Flag({ country }: { country: string }) {
  if (country === "fr") return <svg className="flag" viewBox="0 0 24 16" aria-hidden="true"><path fill="#1848a0" d="M0 0h8v16H0z"/><path fill="#fff" d="M8 0h8v16H8z"/><path fill="#e84b54" d="M16 0h8v16h-8z"/></svg>;
  if (country === "de") return <svg className="flag" viewBox="0 0 24 16" aria-hidden="true"><path d="M0 0h24v5.33H0z"/><path fill="#d83b32" d="M0 5.33h24v5.34H0z"/><path fill="#e5b84f" d="M0 10.67h24V16H0z"/></svg>;
  if (country === "es") return <svg className="flag" viewBox="0 0 24 16" aria-hidden="true"><path fill="#bc2c32" d="M0 0h24v4H0zm0 12h24v4H0z"/><path fill="#eec34e" d="M0 4h24v8H0z"/></svg>;
  if (country === "ar") return <svg className="flag" viewBox="0 0 24 16" aria-hidden="true"><path fill="#19835a" d="M0 0h24v5.33H0z"/><path fill="#fff" d="M0 5.33h24v5.34H0z"/><path d="M0 10.67h24V16H0z"/><path fill="#d63b3b" d="M0 0h6v16H0z"/></svg>;
  if (country === "cn") return <svg className="flag" viewBox="0 0 24 16" aria-hidden="true"><path fill="#c73535" d="M0 0h24v16H0z"/><path fill="#f5d560" d="m5 3 .6 1.8h1.9L6 6l.6 1.8L5 6.7 3.4 7.8 4 6 2.5 4.8h1.9L5 3z"/></svg>;
  return <svg className="flag" viewBox="0 0 24 16" aria-hidden="true"><path fill="#f8f8f8" d="M0 0h24v16H0z"/><path fill="#b84a4f" d="M0 0h24v2H0zm0 4h24v2H0zm0 4h24v2H0zm0 4h24v2H0z"/><path fill="#284b80" d="M0 0h10v9H0z"/></svg>;
}

function currentLanguage(): Language {
  let code = document.querySelector<HTMLSelectElement>(".goog-te-combo")?.value;
  if (!code) code = decodeURIComponent(document.cookie).match(/(?:^|;\s*)googtrans=\/en\/([^;]+)/)?.[1];
  return languages.find(language => language.code === code) ?? languages[0];
}

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [notice, setNotice] = useState("");
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The two responsive selectors control the same single, offscreen Google widget.
    if (!document.getElementById(widgetId)) {
      const target = document.createElement("div"); target.id = widgetId;
      target.setAttribute("aria-hidden", "true"); document.body.appendChild(target);
    }
    window.dwpTranslateInit = () => {
      if (window.google?.translate?.TranslateElement && !document.querySelector(`#${widgetId} select`)) {
        new window.google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: "ar,de,en,es,fr,zh-CN", autoDisplay: false }, widgetId);
      }
    };
    if (!document.getElementById("dwp-google-translate")) {
      const script = document.createElement("script"); script.id = "dwp-google-translate";
      script.src = "https://translate.google.com/translate_a/element.js?cb=dwpTranslateInit";
      script.async = true;
      script.onerror = () => setNotice("Translation is unavailable right now. English is still available.");
      document.body.appendChild(script);
    } else window.dwpTranslateInit();

    const sync = (event?: Event) => {
      const code = event instanceof CustomEvent ? event.detail as string : undefined;
      setSelected(languages.find(language => language.code === code) ?? currentLanguage());
    };
    const close = (event: PointerEvent) => { if (wrap.current && !wrap.current.contains(event.target as Node)) setOpen(false); };
    sync();
    window.addEventListener(languageEvent, sync);
    document.addEventListener("pointerdown", close);
    return () => { window.removeEventListener(languageEvent, sync); document.removeEventListener("pointerdown", close); };
  }, []);

  function choose(language: Language) {
    setOpen(false);
    if (language.code === "en") {
      document.cookie = "googtrans=/en/en; path=/";
      window.dispatchEvent(new CustomEvent(languageEvent, { detail: language.code }));
      setNotice("");
      if (document.documentElement.classList.contains("translated-ltr") || document.documentElement.classList.contains("translated-rtl")) location.reload();
      return;
    }
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!combo) { setNotice("Translation is unavailable right now. English is still available."); return; }
    combo.value = language.code;
    combo.dispatchEvent(new Event("change", { bubbles: true }));
    window.dispatchEvent(new CustomEvent(languageEvent, { detail: language.code }));
    setNotice("");
  }

  return <div className="language-wrap" ref={wrap}>
    <button className="language-button" type="button" aria-expanded={open} aria-haspopup="listbox" aria-label={`Language: ${selected.label}`} onClick={() => setOpen(!open)}><Flag country={selected.flag}/><span>{selected.code === "zh-CN" ? "ZH" : selected.code.toUpperCase()}</span><Icon name="chevron" size={14}/></button>
    {open && <div className="language-menu" role="listbox" aria-label="Choose language" onKeyDown={event => { if (event.key === "Escape") { event.stopPropagation(); setOpen(false); wrap.current?.querySelector<HTMLButtonElement>(".language-button")?.focus(); } }}>
      {languages.map(language => <button type="button" key={language.code} role="option" aria-selected={selected.code === language.code} onClick={() => choose(language)}><Flag country={language.flag}/>{language.label}</button>)}
    </div>}
    {notice && <span className="sr-only" role="status">{notice}</span>}
  </div>;
}
