import type { Metadata } from "next";
import { ChessBoard } from "@/components/chess-board";

export const metadata: Metadata = { title: "Partida local" };

export default function LocalGamePage() {
  return (
    <div className="page-stack">
      <div className="page-heading compact-heading"><div className="section-kicker">MODO LOCAL · DOS JUGADORES</div><h1>La partida es tuya.</h1><p>Jueguen por turnos en el mismo dispositivo. Las reglas y los movimientos legales se validan en el navegador.</p></div>
      <ChessBoard />
    </div>
  );
}