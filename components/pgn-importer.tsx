"use client";

import { Chess } from "chess.js";
import { useState } from "react";

export function PgnImporter() {
  const [pgn, setPgn] = useState("");
  const [moves, setMoves] = useState<string[]>([]);
  const [headers, setHeaders] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  function importGame() {
    setError("");
    setLoaded(false);
    try {
      const game = new Chess();
      game.loadPgn(pgn);
      const parsed = game.history();
      if (!parsed.length) throw new Error("No se encontraron movimientos en el PGN.");
      setMoves(parsed);
      setHeaders(game.header());
      setLoaded(true);
    } catch (err) {
      setMoves([]);
      setHeaders({});
      setError(err instanceof Error ? err.message : "No se pudo leer el PGN.");
    }
  }

  return (
    <div className="import-layout">
      <section className="import-card">
        <label htmlFor="pgn-input" className="field-label">PEGAR PGN</label>
        <textarea id="pgn-input" value={pgn} onChange={(event) => setPgn(event.target.value)} placeholder={'[Event "Partida amistosa"]\n[White "Jugador 1"]\n[Black "Jugador 2"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 *'} />
        <div className="import-footer"><span>El PGN se procesa localmente en tu navegador.</span><button type="button" className="button button-primary" onClick={importGame} disabled={!pgn.trim()}>Validar partida <span>↗</span></button></div>
        {error && <p className="error-message" role="alert">{error}</p>}
      </section>
      <section className="import-result">
        {!loaded ? <div className="import-empty"><span>♘</span><strong>Tu análisis empieza aquí.</strong><small>Importa un PGN válido para comprobar su secuencia de movimientos.</small></div> :
          <>
            <div className="section-kicker">PGN VALIDADO</div>
            <h2>{headers.Event || "Partida importada"}</h2>
            <div className="import-meta"><span>{headers.White || "Blancas"}</span><b>vs.</b><span>{headers.Black || "Negras"}</span></div>
            <div className="import-stats"><strong>{moves.length}</strong><small>medios movimientos</small></div>
            <div className="move-list import-move-list">
              {Array.from({ length: Math.ceil(moves.length / 2) }, (_, index) => <div className="move-row" key={index}><span className="move-number">{index + 1}.</span><span>{moves[index * 2]}</span><span>{moves[index * 2 + 1] || "—"}</span></div>)}
            </div>
            <p className="muted-copy">La validación y el visor básico están disponibles. El análisis de motor Stockfish se integrará en una fase posterior.</p>
          </>
        }
      </section>
    </div>
  );
}