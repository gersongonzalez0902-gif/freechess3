# FreeChess

**Todo el ajedrez. Una sola plataforma. Gratis para todos.**

FreeChess es una plataforma de ajedrez y aprendizaje con enfoque local: partidas contra bots, partidas presenciales en el mismo dispositivo, análisis, táctica, aperturas y seguimiento del progreso. No incluye partidas online entre usuarios.

## Estado

Proyecto en fase de fundación. El primer corte incluye un dashboard responsive y un tablero local con reglas legales gestionadas por `chess.js`. El motor Stockfish, la cuenta de usuario y los módulos conectados a PostgreSQL se integrarán en fases posteriores; no se presentan como terminados.

## Stack

- Next.js 16.4.6 (App Router)
- React 19.3.1 + TypeScript
- CSS propio con tokens de diseño (sin plantilla SaaS)
- chess.js para reglas, movimientos, FEN y PGN
- Neon PostgreSQL + Drizzle (siguiente etapa)
- Vercel para despliegue

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Scripts

- `npm run dev`: servidor local
- `npm run build`: build de producción
- `npm run start`: servidor de producción
- `npm run typecheck`: comprobación TypeScript

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md)
- [Producto](docs/PRODUCT.md)
- [Roadmap](docs/ROADMAP.md)
- [Base de datos](docs/DATABASE.md)
- [Seguridad](docs/SECURITY.md)
- [Licencias](docs/LICENSES.md)
- [Skills](docs/INSTALLED_SKILLS.md)
- [Estado del proyecto](docs/PROJECT_STATUS.md)

## Licencia

El código original de FreeChess se publicará bajo MIT, salvo que un archivo indique otra licencia. Las dependencias y recursos de terceros conservan sus licencias originales.
