import Link from "next/link";

export const metadata = { title: "Jugar" };

export default function PlayPage() {
  return (
    <div className="page-stack">
      <div className="page-heading"><div className="section-kicker">ELIGE TU PARTIDA</div><h1>Hora de jugar.</h1><p>Dos formas de disfrutar el ajedrez en el mismo dispositivo. Las partidas online entre usuarios no forman parte de FreeChess.</p></div>
      <div className="play-options">
        <article className="play-option play-option-featured">
          <div className="option-symbol">♟</div><span className="option-tag">DISPONIBLE</span><h2>Jugar en persona</h2><p>Invita a alguien a tu lado. Comparte el dispositivo, alterna turnos y juega una partida completa.</p><Link href="/jugar/local" className="button button-primary">Abrir tablero <span>↗</span></Link>
        </article>
        <article className="play-option">
          <div className="option-symbol muted-symbol">♞</div><span className="option-tag option-tag-muted">EN DESARROLLO</span><h2>Jugar contra bots</h2><p>Rivales con distintos niveles y estilos. Esta modalidad llegará cuando el motor de ajedrez esté integrado y probado.</p><span className="disabled-action">Stockfish pendiente</span>
        </article>
      </div>
    </div>
  );
}