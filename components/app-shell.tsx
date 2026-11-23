"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

const navigation = [
  { href: "/", label: "Inicio", mark: "⌂" },
  { href: "/jugar", label: "Jugar", mark: "♟" },
  { href: "/analizar", label: "Analizar", mark: "⌕" },
  { href: "/entrenar", label: "Entrenar", mark: "✳" },
  { href: "/aprender", label: "Aprender", mark: "▤" },
  { href: "/herramientas", label: "Herramientas", mark: "⌘" }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("freechess-theme");
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("freechess-theme", theme);
  }, [theme]);

  return (
    <div className="app-frame" data-theme={theme}>
      <aside className="sidebar">
        <Link href="/" className="brand" aria-label="FreeChess, inicio">
          <span className="brand-mark">f<span>c</span></span>
          <span className="brand-copy"><strong>freechess</strong><small>PLAY · LEARN · GROW</small></span>
        </Link>

        <div className="sidebar-label">TU ESPACIO</div>
        <nav className="side-nav" aria-label="Navegación principal">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`nav-link ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
                <span className="nav-mark" aria-hidden="true">{item.mark}</span>
                <span>{item.label}</span>
                {item.href === "/entrenar" && <span className="nav-soon">BETA</span>}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-note">
          <span className="online-dot" />
          <div><strong>Entrena a tu ritmo</strong><small>Sin presión. Sin pagos.</small></div>
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
          aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
          {theme === "dark" ? "Modo claro" : "Modo oscuro"}
          <span className="toggle-hint">{theme === "dark" ? "OFF" : "ON"}</span>
        </button>
        <div className="sidebar-footer">FREECHESS 3.0 <span>·</span> HECHO PARA TODOS</div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div className="breadcrumb"><span>FREECHESS</span><i>/</i><strong>{navigation.find((item) => item.href === (pathname === "/" ? "/" : "/" + pathname.split("/")[1]))?.label ?? "Explorar"}</strong></div>
          <div className="topbar-right">
            <span className="local-chip"><span className="online-dot" /> MODO LOCAL</span>
            <span className="avatar">G</span>
          </div>
        </header>
        <main className="main-content">{children}</main>
        <footer className="mobile-footer">
          {navigation.slice(0, 5).map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={active ? "mobile-active" : ""}><span>{item.mark}</span><small>{item.label}</small></Link>;
          })}
        </footer>
      </div>
    </div>
  );
}