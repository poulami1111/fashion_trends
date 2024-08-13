'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import the Image component
import CategoryCarousel from '@/components/Categorycaraousel';

interface Product {
  imageUrl: string;
  category: string;
  title: string;
  path: string;
  offer: string;
}

interface CarouselData {
  Kids: Product[];
  Women: Product[];
  Men: Product[];
  Black: Product[];
  Royal: Product[];
  Home: Product[];
  Grocery: Product[];
  Kitchen: Product[];
}

import carouseldata from '@/components/carouseldata';

const ProductDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const findProductByPath = (path: string | string[] | undefined): Product | undefined => {
    if (!path) return undefined;

    for (const category in carouseldata) {
      const product = carouseldata[category as keyof CarouselData].find(
        (item) => item.path === path
      );
      if (product) return product;
    }
    return undefined;
  };

  const product = findProductByPath(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="flex flex-col md:flex-row mt-6">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500} // Set the desired width
          height={500} // Set the desired height
          className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <p className="text-gray-700">{product.offer}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">
            {/* Assuming there might be a price property, replace this if needed */}
            {/* {product.price} */}
          </p>
          <button
            onClick={() => router.push('/checkout')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <CategoryCarousel
          items={carouseldata[product.category as keyof CarouselData].filter(
            (item) => item.path !== product.path
          )}
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;



