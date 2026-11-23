import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";

export type DatabaseHealth = {
  databaseName: string;
  checkedAt: string;
};

export async function checkDatabaseConnection(): Promise<DatabaseHealth> {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  const client = neon(connectionString);
  const database = drizzle(client);
  const result = await database.execute(
    sql`select current_database() as database_name, now() as checked_at`
  );

  const row = result.rows[0] as
    | { database_name: string; checked_at: Date | string }
    | undefined;

  if (!row) {
    throw new Error("Database health query returned no rows");
  }

  return {
    databaseName: row.database_name,
    checkedAt:
      row.checked_at instanceof Date
        ? row.checked_at.toISOString()
        : String(row.checked_at)
  };
}
