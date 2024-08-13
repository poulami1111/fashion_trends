// app/products/[id]/page.tsx

import React from 'react';
import { Product } from '@/types/Products';
import products from '@/data/products.json'; // Adjust path as necessary

interface ProductViewProps {
  params: {
    id: string;
  };
}

const ProductView: React.FC<ProductViewProps> = async ({ params }) => {
  const { id } = params;
  const product = products.find((p) => p.id.toString() === id) || null;

  if (!product) {
    return <p>Product not found</p>;
  }

  // Ensure price is a number
  const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;

  return (
    <div className="product-detail py-8 px-4">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.offer}</p>
      <p className="text-lg font-bold mb-4">${price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductView;




