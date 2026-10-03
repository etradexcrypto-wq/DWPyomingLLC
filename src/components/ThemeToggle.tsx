"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const themeEvent = "dwp-theme-change";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      const value = localStorage.getItem("dwp-theme");
      if (value === "dark") document.documentElement.dataset.theme = "dark";
    } catch { /* local storage may be unavailable */ }
    const sync = () => setDark(document.documentElement.dataset.theme === "dark");
    const onStorage = (event: StorageEvent) => {
      if (event.key !== "dwp-theme") return;
      document.documentElement.dataset.theme = event.newValue === "dark" ? "dark" : "light";
      sync();
    };
    sync();
    window.addEventListener(themeEvent, sync);
    window.addEventListener("storage", onStorage);
    return () => { window.removeEventListener(themeEvent, sync); window.removeEventListener("storage", onStorage); };
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.dispatchEvent(new Event(themeEvent));
    try { localStorage.setItem("dwp-theme", next ? "dark" : "light"); } catch { /* no persistence */ }
  }

  return <button type="button" className="icon-button theme-toggle" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}><Icon name={dark ? "sun" : "moon"} size={19}/></button>;
}
