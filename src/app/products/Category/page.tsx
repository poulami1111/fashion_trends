'use client';

import React from 'react';
import products from '@/data/products.json';

interface CategoryProductsProps {
  params: {
    category: string;
  };
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ params }) => {
  const { category } = params;

  // Debug log to check the category value
  console.log('Category:', category);

  if (!category) {
    return <p>Category not specified.</p>;
  }

  const lowercaseCategory = category.toLowerCase();

  // Filter products based on the category
  const categoryProducts = products.filter(
    (product) =>
      product.category &&
      product.category.toLowerCase() === lowercaseCategory
  );

  console.log('Filtered Products:', categoryProducts);

  if (categoryProducts.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div className="category-products-container">
      <div className="category-products bg-black w-full max-w-screen-lg mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categoryProducts.map((product) => (
          <div key={product.id} className="product-card border border-gray-200 p-4 rounded-lg bg-white">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-red-500 mb-2">{product.offer}</p>
            <p className="text-green-700 text-lg font-bold mb-4">₹{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;












