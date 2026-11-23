---
name: freechess-chess-engineering
description: Use for chess rules, FEN, PGN, SAN, UCI engines, games, puzzles, openings or endgames in FreeChess.
---

# FreeChess Chess Engineering

- Use a tested rules library for move legality; never invent legal moves.
- Treat FEN and PGN input as untrusted and validate it.
- Preserve PGN headers and result when importing/exporting.
- Run engine computation in a Web Worker, not on the UI thread.
- Never claim a Stockfish evaluation before receiving a real engine result.
- Distinguish a local bot estimate from an official competitive rating.
- Test castling, en passant, promotion, check, mate, stalemate and repetition.
- Never implement online matchmaking or remote live games.
