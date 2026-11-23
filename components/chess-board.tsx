"use client";

import { Chess, type Square, type PieceSymbol } from "chess.js";
import { useMemo, useState } from "react";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const glyphs: Record<"w" | "b", Record<PieceSymbol, string>> = {
  w: { k: "♔", q: "♕", r: "♖", b: "♗", n: "♘", p: "♙" },
  b: { k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟" }
};

function gameStatus(game: Chess) {
  if (game.isCheckmate()) return `Jaque mate. Ganan las ${game.turn() === "w" ? "negras" : "blancas"}.`;
  if (game.isStalemate()) return "Tablas por ahogado.";
  if (game.isThreefoldRepetition()) return "Tablas por triple repetición.";
  if (game.isInsufficientMaterial()) return "Tablas por material insuficiente.";
  if (game.isDraw()) return "La partida terminó en tablas.";
  if (game.isCheck()) return `Jaque a las ${game.turn() === "w" ? "blancas" : "negras"}.`;
  return `Turno de ${game.turn() === "w" ? "blancas" : "negras"}.`;
}

export function ChessBoard() {
  const [game, setGame] = useState(() => new Chess());
  const [selected, setSelected] = useState<Square | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [notice, setNotice] = useState("");
  const history = game.history({ verbose: true });
  const lastMove = history.at(-1);
  const legalTargets = useMemo(
    () => selected ? game.moves({ square: selected, verbose: true }).map((move) => move.to as Square) : [],
    [game, selected]
  );
  const ranks = flipped ? [1, 2, 3, 4, 5, 6, 7, 8] : [8, 7, 6, 5, 4, 3, 2, 1];
  const orderedFiles = flipped ? [...files].reverse() : files;

  function playSquare(square: Square) {
    if (game.isGameOver()) return;
    const piece = game.get(square);
    if (selected && legalTargets.includes(square)) {
      const next = new Chess(game.fen());
      try {
        next.move({ from: selected, to: square, promotion: "q" });
        setGame(next);
        setSelected(null);
        setNotice("");
      } catch {
        setNotice("Movimiento no permitido.");
      }
      return;
    }
    if (piece && piece.color === game.turn()) {
      setSelected(square);
      setNotice("");
      return;
    }
    setSelected(null);
  }

  function resetGame() {
    setGame(new Chess());
    setSelected(null);
    setNotice("Partida nueva.");
  }

  function undoMove() {
    if (history.length === 0) return;
    const next = new Chess(game.fen());
    next.undo();
    setGame(next);
    setSelected(null);
    setNotice("Última jugada deshecha.");
  }

  async function copyText(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      setNotice(`${label} copiado.`);
    } catch {
      setNotice("El navegador no permitió copiar al portapapeles.");
    }
  }

  const result = game.isGameOver();
  const moves = Array.from({ length: Math.ceil(history.length / 2) }, (_, index) => ({
    number: index + 1,
    white: history[index * 2]?.san ?? "",
    black: history[index * 2 + 1]?.san ?? ""
  }));

  return (
    <section className="game-layout">
      <div className="board-column">
        <div className="board-player player-top"><span className="player-token black-token">♚</span><div><strong>Negras</strong><small>Jugador 2</small></div><span className="player-turn">{game.turn() === "b" && !result ? "SU TURNO" : " "}</span></div>
        <div className="board-wrap">
          <div className="board-coordinates board-coordinates-left">{ranks.map((rank) => <span key={rank}>{rank}</span>)}</div>
          <div className="chess-grid" role="group" aria-label="Tablero de ajedrez">
            {ranks.map((rank) => orderedFiles.map((file) => {
              const square = `${file}${rank}` as Square;
              const piece = game.get(square);
              const isDark = (files.indexOf(file) + rank) % 2 === 0;
              const isSelected = selected === square;
              const isLast = lastMove?.from === square || lastMove?.to === square;
              const isTarget = legalTargets.includes(square);
              return (
                <button
                  key={square}
                  type="button"
                  onClick={() => playSquare(square)}
                  className={`square ${isDark ? "square-dark" : "square-light"} ${isSelected ? "square-selected" : ""} ${isLast ? "square-last" : ""}`}
                  aria-label={`${square}${piece ? `, ${piece.color === "w" ? "blanca" : "negra"} ${piece.type}` : ""}`}
                >
                  {piece && <span className={`chess-piece ${piece.color === "w" ? "piece-white" : "piece-black"}`}>{glyphs[piece.color][piece.type]}</span>}
                  {isTarget && <span className={piece ? "move-ring" : "move-dot"} />}
                  {file === (flipped ? "h" : "a") && <span className={`rank-label ${isDark ? "label-light" : "label-dark"}`}>{rank}</span>}
                  {rank === (flipped ? 1 : 8) && <span className={`file-label ${isDark ? "label-light" : "label-dark"}`}>{file}</span>}
                </button>
              );
            }))}
          </div>
          <div className="board-coordinates board-coordinates-right">{ranks.map((rank) => <span key={rank}>{rank}</span>)}</div>
        </div>
        <div className="board-player player-bottom"><span className="player-token white-token">♔</span><div><strong>Blancas</strong><small>Jugador 1</small></div><span className="player-turn">{game.turn() === "w" && !result ? "SU TURNO" : " "}</span></div>
        <div className="board-tools">
          <button type="button" onClick={undoMove} disabled={history.length === 0}>↶ <span>Deshacer</span></button>
          <button type="button" onClick={() => setFlipped((value) => !value)}>⇅ <span>Girar tablero</span></button>
          <button type="button" onClick={resetGame}>＋ <span>Nueva partida</span></button>
        </div>
      </div>

      <aside className="game-panel">
        <div className="game-panel-head"><div className="section-kicker">PARTIDA EN CURSO</div><span className={result ? "status-pill status-finished" : "status-pill"}>{result ? "FINALIZADA" : "EN JUEGO"}</span></div>
        <h2>{result ? "Partida terminada" : "Jueguen su partida."}</h2>
        <p className="game-status">{gameStatus(game)}</p>
        <div className="move-history">
          <div className="move-history-head"><span>JUGADAS</span><span>{history.length} movimientos</span></div>
          {moves.length === 0 ? <div className="empty-moves"><span>♟</span><strong>Todo comienza con e4.</strong><small>Selecciona una pieza para ver sus movimientos legales.</small></div> :
            <div className="move-list">
              {moves.map((move) => <div className="move-row" key={move.number}><span className="move-number">{move.number}.</span><span>{move.white}</span><span>{move.black}</span></div>)}
            </div>
          }
        </div>
        <div className="game-actions">
          <button type="button" className="button button-secondary" onClick={() => copyText(game.fen(), "FEN")}>Copiar FEN</button>
          <button type="button" className="button button-secondary" onClick={() => copyText(game.pgn(), "PGN")} disabled={history.length === 0}>Exportar PGN</button>
        </div>
        <div className="game-tip"><span>✦</span><p>La promoción se realiza automáticamente a dama en esta primera versión. La elección de pieza y el motor de bots llegarán en próximas fases.</p></div>
        <div className="game-notice" aria-live="polite">{notice || "Los movimientos se validan con las reglas oficiales del ajedrez."}</div>
      </aside>
    </section>
  );
}