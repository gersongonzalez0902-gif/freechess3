# Arquitectura inicial

## Decisiones

- Next.js App Router para la aplicación full-stack y el despliegue en Vercel.
- React + TypeScript en modo estricto.
- La lógica de ajedrez y la validación de movimientos se delegan a `chess.js` (BSD-2-Clause); el tablero visual propio pertenece a FreeChess.
- El modo local funciona en el navegador y no requiere cuenta ni conexión.
- Neon PostgreSQL será el almacenamiento persistente del servidor. Las credenciales existen solo en variables de entorno del servidor.
- No se implementan partidas online, matchmaking, salas, chat ni WebSockets.

## Límites actuales

La primera versión no incluye Stockfish, bots, autenticación ni sincronización de cuentas. La importación PGN valida y muestra la secuencia de jugadas, pero no calcula evaluación de motor.
