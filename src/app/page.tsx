"use client";

import { useEffect, useState } from "react";

import NavBar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import PhotoCollage from "../components/PhotoCollage";
import SkeletonCard from "../components/SkeletonCard";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";


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

  const displayedProducts = products.slice(0, 4); 

  return (
    <div className="flex flex-col justify-center align-center items-center w-full pt-30">
      <NavBar />

      <div className="w-full pr-[107px] pl-[107px]">
        <div className="w-full h-[900px] mt-30 mb-35">
          <PhotoCollage />
        </div>
        
        <div className="w-full flex flex-col justify-left mb-[152px]">
          <p className="mb-[32px] text-4xl font-bold">New Releases</p>
          <div className="flex w-full justify-between items-center">
            <ChevronLeftIcon className="size-10 text-lime" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[50px] mb-[104px] w-full justify-items-center">
              {isLoading && displayedProducts.length === 0 && (
                <>
                {[...Array(4)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </>
              )}

              {!isLoading &&
                displayedProducts.map((product, index) => (
                  <Card
                    key={product.id ?? index}
                    title={product.title}
                    productType={product.productType}
                    price={product.priceCad}
                    inStock={product.inStock}
                    imageUrl={product.imageUrl ?? "/images/null.jpg"}
                  />
                ))}
            </div>

            <ChevronRightIcon className="size-10 text-lime" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
