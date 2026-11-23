---
name: freechess-data-engineering
description: Use for PostgreSQL schema, migrations, PGN persistence, puzzle imports and training history in FreeChess.
---

# FreeChess Data Engineering

- Use Neon PostgreSQL and versioned Drizzle migrations.
- Keep DATABASE_URL server-only and use the pooled URL for application traffic.
- Prefer additive, reversible migrations.
- Use foreign keys, indexes and unique constraints intentionally.
- Import large puzzle datasets in resumable batches; never load millions of rows in memory.
- Keep user identity separate from guest/local sessions.
- Paginate large collections and avoid returning entire PGN datasets in one response.
- Never run destructive SQL without explicit, targeted approval.
