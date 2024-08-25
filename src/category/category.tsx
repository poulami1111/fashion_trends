// /pages/products/Category/[category].tsx

import { useRouter } from 'next/router';
import React from 'react';

// Example mock data to represent products by category
const mockData = {
  electronics: [
    { id: 1, title: "Smartphone", imageUrl: "https://via.placeholder.com/300x200", price: "$799" },
    { id: 2, title: "Laptop", imageUrl: "https://via.placeholder.com/300x200", price: "$1299" },
  ],
  fashion: [
    { id: 1, title: "Leather Jacket", imageUrl: "https://via.placeholder.com/300x200", price: "$199" },
    { id: 2, title: "Sneakers", imageUrl: "https://via.placeholder.com/300x200", price: "$120" },
  ],
  home: [
    { id: 1, title: "Sofa", imageUrl: "https://via.placeholder.com/300x200", price: "$999" },
    { id: 2, title: "Coffee Table", imageUrl: "https://via.placeholder.com/300x200", price: "$249" },
  ],
};

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  // Get products for the specific category from mockData
  const categoryData = category ? mockData[category as keyof typeof mockData] : [];

  // If no products found for the category, show a message
  if (!categoryData || categoryData.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold">No products found in this category.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Category Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {category ? category.toString().charAt(0).toUpperCase() + category.toString().slice(1) : "Category"}
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryData.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-md p-4">
            <img src={product.imageUrl} alt={product.title} className="h-48 w-full object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

