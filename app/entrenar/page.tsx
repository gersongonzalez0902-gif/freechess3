import Link from "next/link";

export const metadata = { title: "Entrenar" };

export default function TrainingPage() {
  return (
    <div className="page-stack">
      <div className="page-heading"><div className="section-kicker">ENTRENAMIENTO PERSONAL</div><h1>Mejora una idea<br /><em>a la vez.</em></h1><p>La práctica será el centro de FreeChess: táctica, aperturas, finales y revisión de errores.</p></div>
      <section className="coming-panel"><div className="coming-piece">♘</div><div className="section-kicker">SIGUIENTE FASE</div><h2>Estamos preparando el entrenamiento táctico.</h2><p>Primero integraremos una colección de ejercicios con soluciones verificadas. Después añadiremos rating, temas y seguimiento de progreso.</p><Link href="/jugar/local" className="text-link">Mientras tanto, juega una partida <span>↗</span></Link></section>
    </div>
  );
}