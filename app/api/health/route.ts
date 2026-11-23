import { checkDatabaseConnection } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const database = await checkDatabaseConnection();

    return Response.json({
      status: "ok",
      database: database.databaseName,
      checkedAt: database.checkedAt
    });
  } catch {
    return Response.json(
      {
        status: "unavailable",
        message: "The database connection could not be verified."
      },
      { status: 503 }
    );
  }
}
