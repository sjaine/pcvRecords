import { parse } from "csv-parse/sync";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJJTeE0siMy8Z8r5sIzIJVFcTeweyb7KjMGFLwvxIRXrJpN-RQl_fAHcw0zd2h_TyaQIkoDPc3oPxS/pub?gid=1138609782&single=true&output=csv";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get("limit");
    const limit = Math.min(limitParam ? parseInt(limitParam, 10) || 100 : 100, 1000);

    const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch Google Sheet" }), {
        status: 500,
      });
    }

    const csvText = await res.text();

    // Proper CSV parser — handles commas, quotes, everything
    const rows: string[][] = parse(csvText, {
      skip_empty_lines: true,
    });

    // Your sheet has 4 unused meta rows at top
    const DATA_START_INDEX = 4;
    const dataRows = rows.slice(DATA_START_INDEX).slice(0, limit);

    const json = dataRows.map((row) => ({
      title: row[0] ?? "",
      productType: row[1] ?? "",
      upcCode: row[2] ?? "",
      inStock: row[3] ?? "",
      priceCad: row[4] ?? "",
      compareOnAmazon: row[5] ?? "",
      pictureDeals: row[6] ?? "",
      emailLink: row[7] ?? "",
    }));

    return Response.json(json);
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Unexpected error fetching sheet" }), {
      status: 500,
    });
  }
}
