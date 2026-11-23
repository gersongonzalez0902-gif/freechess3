"use client";

import { Chess } from "chess.js";
import { useState } from "react";

export default function ToolsPage() {
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  const [result, setResult] = useState<"idle" | "valid" | "invalid">("idle");
  const [message, setMessage] = useState("");

  function validateFen() {
    try {
      const position = new Chess(fen.trim());
      setResult("valid");
      setMessage(`FEN válido. Juegan las ${position.turn() === "w" ? "blancas" : "negras"}.`);
    } catch (error) {
      setResult("invalid");
      setMessage(error instanceof Error ? error.message : "La posición FEN no es válida.");
    }
  }

  async function copyFen() {
    try {
      await navigator.clipboard.writeText(fen);
      setMessage("FEN copiado al portapapeles.");
    } catch {
      setMessage("No se pudo copiar desde este navegador.");
    }
  }

  return (
    <div className="page-stack">
      <div className="page-heading"><div className="section-kicker">HERRAMIENTAS DE AJEDREZ</div><h1>Pequeñas utilidades.<br /><em>Grandes ideas.</em></h1><p>Herramientas sencillas y útiles para trabajar con posiciones y partidas.</p></div>
      <section className="tool-card">
        <div className="tool-card-title"><span className="tool-icon">⌘</span><div><div className="section-kicker">EDITOR DE POSICIONES</div><h2>Validador FEN</h2></div></div>
        <p>Comprueba si una cadena FEN representa una posición válida. Puedes pegar una posición o empezar con la posición inicial.</p>
        <label className="field-label" htmlFor="fen-input">CADENA FEN</label>
        <textarea id="fen-input" className="fen-input" value={fen} onChange={(event) => { setFen(event.target.value); setResult("idle"); }} spellCheck={false} />
        <div className="tool-actions"><button className="button button-primary" type="button" onClick={validateFen}>Validar posición</button><button className="button button-secondary" type="button" onClick={copyFen}>Copiar FEN</button></div>
        {message && <p className={`tool-result ${result === "valid" ? "valid" : result === "invalid" ? "invalid" : ""}`} aria-live="polite">{message}</p>}
      </section>
      <div className="page-bottom-note">MÁS HERRAMIENTAS SE IRÁN AÑADIENDO CON PRUEBAS REALES.</div>
    </div>
  );
}