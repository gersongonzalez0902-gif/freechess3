# Base de datos

Proveedor: Neon PostgreSQL. Proyecto independiente: `freechess3`.

## Principios

- La aplicación usa `DATABASE_URL` (pooler) desde el servidor.
- La cadena de conexión nunca se expone al navegador ni se guarda en Git.
- Drizzle ORM y migraciones versionadas para las futuras tablas.
- Datos de cuentas, partidas, análisis, ejercicios y progreso deben permanecer en entidades separadas.
- La importación masiva de puzzles será un proceso reanudable y nunca parte del build de Vercel.

## Primer esquema previsto

- `profiles`: perfil asociado al proveedor de autenticación cuando se implemente.
- `games`: modo, resultado, FEN inicial/final y PGN.
- `game_moves`: orden, SAN, origen/destino y FEN posterior.
- `game_analyses`: motor, versión, profundidad e informe.
- `puzzle_attempts`: ejercicio, resultado, tiempo e intento.
- `user_preferences`: tema, sonidos, orientación y opciones.

La autenticación se decidirá antes de crear claves foráneas para la identidad. No se inventarán usuarios ni estadísticas.
