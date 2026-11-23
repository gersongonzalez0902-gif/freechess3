import type { Metadata } from "next";
import { PgnImporter } from "@/components/pgn-importer";

export const metadata: Metadata = { title: "Analizar partidas" };

export default function AnalysePage() {
  return (
    <div className="page-stack">
      <div className="page-heading"><div className="section-kicker">ANALIZADOR · IMPORTACIÓN PGN</div><h1>Vuelve a cada jugada.</h1><p>Trae una partida en formato PGN y revisa su secuencia. El motor de análisis todavía no está activado.</p></div>
      <PgnImporter />
    </div>
  );
}