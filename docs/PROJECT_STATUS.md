# Estado del proyecto

**Versión:** 0.1.0  
**Fase:** Fundación + primera experiencia local

## Infraestructura
- GitHub: repositorio público `gersongonzalez0902-gif/freechess3`.
- Neon: proyecto y base `freechess3`, rama `production`.
- Vercel: proyecto `freechess3`; `DATABASE_URL` es un secreto en Production, Preview y Development.
- Pendiente: vincular GitHub con el proyecto Vercel y verificar deployment.

## Implementado en el repositorio
- Dashboard responsive.
- Navegación lateral y barra inferior móvil.
- Modo oscuro/claro guardado localmente.
- Tablero local 2 jugadores y reglas legales usando `chess.js`.
- Deshacer, reiniciar, girar tablero, exportar FEN/PGN.
- Importación y validación PGN local.
- Validador FEN.

## No implementado
- Stockfish / bots.
- Autenticación.
- Persistencia de partidas en PostgreSQL.
- Análisis de motor y variantes.
- Puzzles y entrenadores avanzados.
- PWA offline completa.

## Próximos pasos
1. Enlazar GitHub en Vercel.
2. Verificar build y corregir errores.
3. Integrar Drizzle y migración inicial.
4. Añadir pruebas automatizadas de reglas.
5. Integrar Stockfish en Web Worker.
