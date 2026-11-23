# Estado del proyecto

**Versión:** 0.1.0  
**Fase:** Fundación + primera experiencia local

## Infraestructura verificada
- GitHub: repositorio público `gersongonzalez0902-gif/freechess3`, rama `main`.
- Neon: proyecto `freechess3`, base `freechess3`, rama `production`.
- Neon: consulta SQL de verificación ejecutada correctamente.
- Vercel: proyecto `freechess3`, Next.js, Node 22.x.
- Vercel: `DATABASE_URL` configurada como secreto en Production, Preview y Development.
- Vercel: deployment de preview en estado `READY`; ruta `/api/health` incluida en el build.
- Pendiente: conectar el proyecto Vercel a GitHub desde Settings → Git para activar despliegues automáticos al hacer push.

## Implementado
- Dashboard responsive con identidad verde oscura y modo claro/oscuro.
- Navegación lateral y barra inferior móvil.
- Tablero local para dos jugadores con reglas legales mediante `chess.js`.
- Deshacer, reiniciar, girar tablero, exportar FEN y PGN.
- Importación y validación PGN local.
- Validador FEN.
- Lecciones introductorias de ajedrez.
- Capa inicial Neon + Drizzle.
- Endpoint `GET /api/health` que consulta la base sin exponer credenciales.

## Funciones todavía no implementadas
- Stockfish / bots.
- Autenticación y perfiles.
- Guardado persistente de partidas.
- Análisis de motor y variantes.
- Puzzles y entrenadores avanzados.
- PWA offline completa.
- Prueba HTTP autenticada del endpoint desde la URL de preview.

## Próximos pasos
1. Conectar GitHub al proyecto Vercel para automatizar los despliegues.
2. Probar `/api/health` desde la aplicación desplegada.
3. Definir autenticación y modelo de propiedad de partidas antes de crear tablas de usuarios/juegos.
4. Añadir migraciones Drizzle con pruebas.
5. Integrar Stockfish en Web Worker.
