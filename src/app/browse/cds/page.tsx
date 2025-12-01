"use client";

import { useEffect, useState } from "react";

import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Card from "@/src/components/Card"

import CdIcon from "@/public/images/dropdown/cd";

type Product = {
    id: number;
    title: string;
    productType: string;
    priceCad: string;
    inStock: string;
    imageUrl?: string;
  };

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    async function fetchProducts() {
        try {
        const res = await fetch("/api/records");
        const data = await res.json();
        setProducts(data);
        } catch (error) {
        console.error("Failed to fetch products:", error);
        } finally {
        setIsLoading(false);
        }
    }

    fetchProducts();
    }, []);

    const displayedProducts = products.slice(0, 10); 

  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-15">
        <Navbar />

        <div className="w-full pr-[107px] pl-[107px]">
            <p className="text-[213px] fatfrank flex items-center gap-4">
              <CdIcon className="fill-white text-white w-42 h-42" />
              CDs
            </p>
            <div className="context flex gap-[15px]">
                <button className="rounded-full text-[19px] border px-8 py-2">Sort by</button>
                <button className="rounded-full text-[19px] border px-8 py-2">Filter</button>
            </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-[50px] mb-[104px] w-full">
              {isLoading && displayedProducts.length === 0 && (
                <p className="text-sm text-gray-500">Loading...</p>
              )}

              {!isLoading &&
                displayedProducts.map((product) => (
                  <Card
                  key={product.id}
                  title={product.title}
                  productType={product.productType}
                  price={product.priceCad}
                  inStock={product.inStock}
                  imageUrl={product.imageUrl ?? "/images/null.jpg"}
                  />
                ))}
            </div>
        </div>

        <Footer />
    </div>
  );
}
