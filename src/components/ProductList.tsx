import React from 'react';
import Link from 'next/link';
import products from '@/data/products.json'; // Adjust path as necessary
import { Product } from '@/types/Products';

const ProductsPage: React.FC = () => {
  // Ensure that the data matches the Product type
  const productList: Product[] = products as Product[];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {productList.map((product) => (
        <div key={product.id} className="product-card border p-4 rounded-lg shadow-lg">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-2">{product.offer}</p>
          <p className="text-lg font-bold">
            ${product.price} {/* Convert string to number */}
          </p>
          <Link 
            href={`/products/${product.id}`}
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            View Product
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;


