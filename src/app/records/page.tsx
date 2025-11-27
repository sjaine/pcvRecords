async function getRecords() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/records`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch records");
    }
  
    return res.json();
  }
  
  export default async function RecordsPage() {
    const records = await getRecords();
  
    return (
      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-4">PCV Records</h1>
        <ul className="space-y-2">
          {records.map((record: any, i: number) => (
            <li key={i} className="border rounded p-3">
              {/* Adjust these keys to match your sheet columns */}
              <p className="font-medium">Title: {record.title}</p>
              <p className="text-sm">Product Type: {record.productType}</p>
              <p className="text-sm">In Stock: {record.inStock}</p>
              <p className="text-sm">Price: {record.priceCad}</p>
              <img className="w-[200px] h-[200px] object-cover rounded" alt={record.title} src={record.imageUrl ?? "/images/null.jpg"} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
  