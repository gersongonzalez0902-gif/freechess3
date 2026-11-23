# Seguridad y privacidad

- No guardar secretos en el repositorio.
- `.env.example` contiene nombres de variables y valores vacíos.
- `DATABASE_URL` solo en Vercel Environment Variables y archivos locales ignorados por Git.
- Validar entradas FEN y PGN antes de procesarlas.
- Las operaciones persistentes futuras deben validar autorización en el servidor.
- No aceptar identificadores enviados por el cliente como prueba de identidad.
- Diseñar eliminación de cuenta y datos cuando se incorpore autenticación.
