export const metadata = { title: "Aprender ajedrez" };

const lessons = [
  { n: "01", level: "FUNDAMENTOS", title: "Controla el centro", body: "Las casillas centrales dan movilidad a tus piezas y te permiten cambiar el rumbo de la partida con más facilidad.", duration: "5 MIN" },
  { n: "02", level: "FUNDAMENTOS", title: "Desarrolla tus piezas", body: "Saca caballos y alfiles antes de mover la misma pieza varias veces sin una razón concreta.", duration: "6 MIN" },
  { n: "03", level: "ESTRATEGIA", title: "Protege a tu rey", body: "El enroque suele ayudar a poner el rey a salvo y conectar las torres. No olvides revisar las amenazas antes de hacerlo.", duration: "7 MIN" },
  { n: "04", level: "TÁCTICA", title: "Busca piezas indefensas", body: "Antes de jugar, observa qué piezas están atacadas y cuáles no tienen suficiente defensa. Ese hábito evita muchos errores.", duration: "4 MIN" }
];

export default function LearnPage() {
  return (
    <div className="page-stack">
      <div className="page-heading"><div className="section-kicker">CENTRO DE APRENDIZAJE</div><h1>El conocimiento<br /><em>también se entrena.</em></h1><p>Lecciones breves y progresivas para construir una base sólida sobre el tablero.</p></div>
      <div className="lesson-list">
        {lessons.map((lesson) => <article className="lesson-row" key={lesson.n}><span className="lesson-number">{lesson.n}</span><div className="lesson-main"><div className="section-kicker">{lesson.level}</div><h2>{lesson.title}</h2><p>{lesson.body}</p></div><span className="lesson-duration">{lesson.duration}</span></article>)}
      </div>
      <div className="content-disclaimer">Estas son lecciones introductorias de FreeChess. Los cursos interactivos, diagramas y evaluaciones se añadirán en etapas posteriores.</div>
    </div>
  );
}