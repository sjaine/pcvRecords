import { parse } from "csv-parse/sync";

const MANUAL_IMAGE_MAP: Record<string, string> = {
  "311-Grassroots (2LP-Clear W/Brown Swirl Vinyl) 30th  Ann.": "/images/manual/311.jpg",
  "A Few Words In Defense Of Our Country: The Biography Of Randy Newman": "/images/manual/randy.jpg",
};

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJJTeE0siMy8Z8r5sIzIJVFcTeweyb7KjMGFLwvxIRXrJpN-RQl_fAHcw0zd2h_TyaQIkoDPc3oPxS/pub?gid=1138609782&single=true&output=csv";

const DISCOGS_SEARCH_URL = "https://api.discogs.com/database/search";

const MAX_ROWS = 30;             
const MAX_LOOKUP = 30;           

//------------------------------------------------------
// 1) Discogs (Vinyl)
//------------------------------------------------------
async function fetchDiscogsImage(title: string, upcCode?: string) {
  const token = process.env.DISCOGS_TOKEN;
  if (!token) return null;

  const isValidUPC = upcCode && /^[0-9]{8,15}$/.test(upcCode);

  const params = new URLSearchParams();
  params.set("type", "release");

  if (isValidUPC) {
    params.set("barcode", upcCode);
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

//------------------------------------------------------
// 2) Books (Open Library Cover)
//------------------------------------------------------
function fetchOpenLibraryCover(isbn?: string) {
  if (!isbn) return null;
  
  const cleaned = isbn.replace(/[^0-9Xx]/g, "");
  if (!/^[0-9Xx]{10,13}$/.test(cleaned)) return null;

  return `https://covers.openlibrary.org/b/isbn/${cleaned}-L.jpg`;
}

//------------------------------------------------------
// 3) Main GET API
//------------------------------------------------------
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

    // 앞의 4줄은 메타 → 스킵
    const DATA_START_INDEX = 5;
    const dataRows = rows.slice(DATA_START_INDEX);

    // 1) row → object
    const rawItems = dataRows.map((row) => ({
      title: row[0] ?? "",
      productType: row[1] ?? "",
      upcCode: row[2] ?? "",
      inStock: row[3] ?? "",
      priceCad: row[4] ?? "",
      compareOnAmazon: row[5] ?? "",
      pictureDeals: row[6] ?? "",
      emailLink: row[7] ?? "",
    }));

    // 2) 첫 30개만 처리
    const baseItems = rawItems.slice(0, MAX_ROWS);

    // 3) 이미지 붙이기
    const itemsWithImages = await Promise.all(
      baseItems.map(async (item, index) => {
        const manual = MANUAL_IMAGE_MAP[item.title];
          if (manual) {
            return {
              ...item,
              imageUrl: manual,
            };
          }

        const type = item.productType.toLowerCase();
        const shouldLookup = index < MAX_LOOKUP;

        let imageUrl: string | null = null;

        if (shouldLookup) {
          // Book → Open Library Cover
          if (type.includes("book")) {
            imageUrl = fetchOpenLibraryCover(item.upcCode);
          }

          // Vinyl → Discogs
          else if (type.includes("vinyl")) {
            imageUrl = await fetchDiscogsImage(item.title, item.upcCode);
          }
        }

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
