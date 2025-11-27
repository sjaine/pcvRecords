import { parse } from "csv-parse/sync";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJJTeE0siMy8Z8r5sIzIJVFcTeweyb7KjMGFLwvxIRXrJpN-RQl_fAHcw0zd2h_TyaQIkoDPc3oPxS/pub?gid=1138609782&single=true&output=csv";

const DISCOGS_SEARCH_URL = "https://api.discogs.com/database/search";
const MAX_ROWS = 30; // 👉 시트에서 가져올 최대 개수
const MAX_DISCOGS_LOOKUP = 30; // 👉 Discogs API 검색 개수

async function fetchDiscogsImage(title: string, upcCode?: string) {
  const token = process.env.DISCOGS_TOKEN;
  if (!token) return null;

  const isValidUPC = upcCode && /^[0-9]{8,15}$/.test(upcCode);

  const params = new URLSearchParams();
  params.set("type", "release");

  if (isValidUPC) {
    params.set("barcode", upcCode!);
  } else {
    params.set("q", title);
  }

  try {
    const res = await fetch(
      `${DISCOGS_SEARCH_URL}?${params.toString()}`,
      {
        headers: {
          Authorization: `Discogs token=${token}`,
          "User-Agent": "Jaine-PCV-Record-App/1.0",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const first = data.results?.[0];
    return first?.cover_image || first?.thumb || null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  try {
    const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch Google Sheet" }),
        { status: 500 }
      );
    }

    const csvText = await res.text();

    const rows: string[][] = parse(csvText, {
      skip_empty_lines: true,
    });

    const DATA_START_INDEX = 5;
    const dataRows = rows.slice(DATA_START_INDEX).slice(0, MAX_ROWS);

    const baseItems = dataRows.map((row) => ({
      title: row[0] ?? "",
      productType: row[1] ?? "",
      upcCode: row[2] ?? "",
      inStock: row[3] ?? "",
      priceCad: row[4] ?? "",
      compareOnAmazon: row[5] ?? "",
      pictureDeals: row[6] ?? "",
      emailLink: row[7] ?? "",
    }));

    // Discogs 검색도 첫 30개까지만
    const itemsWithImages = await Promise.all(
      baseItems.map(async (item, index) => {
        const shouldLookup = index < MAX_DISCOGS_LOOKUP;

        const imageUrl = shouldLookup
          ? await fetchDiscogsImage(item.title, item.upcCode)
          : null;

        return {
          ...item,
          imageUrl,
        };
      })
    );

    return Response.json(itemsWithImages);
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Unexpected error fetching sheet" }),
      { status: 500 }
    );
  }
}
