import Link from "next/link";

const features = [
  { number: "01", title: "Partidas locales", text: "Un tablero, dos personas y el gusto de jugar frente a frente.", href: "/jugar/local", action: "Abrir tablero", symbol: "♞" },
  { number: "02", title: "Análisis de partidas", text: "Importa PGN y revisa la secuencia de movimientos.", href: "/analizar", action: "Importar PGN", symbol: "⌕" },
  { number: "03", title: "Caja de herramientas", text: "Valida FEN y trabaja con posiciones de ajedrez.", href: "/herramientas", action: "Explorar", symbol: "⌘" }
];

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> EL AJEDREZ, SIN BARRERAS</div>
          <h1>Piensa mejor.<br /><em>Juega libre.</em></h1>
          <p>Tu espacio para jugar, aprender y descubrir todo lo que puedes hacer sobre un tablero. Sin suscripciones. Sin límites artificiales.</p>
          <div className="hero-actions">
            <Link href="/jugar/local" className="button button-primary">Jugar una partida <span>↗</span></Link>
            <Link href="/aprender" className="button button-ghost">Explorar aprendizaje <span>→</span></Link>
          </div>
          <div className="hero-footnote"><span className="online-dot" /> GRATIS PARA TODOS <span className="foot-separator">·</span> HECHO CON PASIÓN POR EL AJEDREZ</div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-piece">♞</div>
          <div className="hero-coordinate">e4 <span>→</span> e5</div>
          <div className="hero-stamp">EST. 2026<br /><b>FC</b></div>
        </div>
        <div className="hero-index">01 — 04</div>
      </section>

      <section className="welcome-row">
        <div><div className="section-kicker">TU TABLERO TE ESPERA</div><h2>Todo empieza con una jugada.</h2></div>
        <p>Construye tu progreso partida a partida.<br />Tu recorrido apenas comienza.</p>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <div className="feature-top"><span>{feature.number} / FREECHESS</span><span className="feature-symbol">{feature.symbol}</span></div>
            <h3>{feature.title}</h3><p>{feature.text}</p>
            <Link href={feature.href} className="text-link">{feature.action} <span>↗</span></Link>
          </article>
        ))}
      </section>

      <section className="progress-panel">
        <div className="progress-copy"><div className="section-kicker">TU PROGRESO</div><h2>Las buenas partidas cuentan historias.</h2><p>Cuando empieces a guardar tus partidas y sesiones, aquí verás cómo evoluciona tu juego.</p></div>
        <div className="progress-empty"><span className="progress-icon">♙</span><strong>Tu historia comienza aquí</strong><small>Aún no hay partidas registradas.</small><Link href="/jugar/local" className="text-link">Hacer mi primera partida <span>→</span></Link></div>
      </section>
      <div className="page-bottom-note">FREECHESS · TODO EL AJEDREZ. UNA SOLA PLATAFORMA. GRATIS PARA TODOS.</div>
    </div>
  );
}