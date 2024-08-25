// /pages/products/index.tsx

import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Women', path: '/products/Category/women' },
  { name: 'Men', path: '/products/Category/men' },
  { name: 'Kids', path: '/products/Category/kids' },
  { name: 'Home', path: '/products/Category/home' },
  { name: 'Grocery', path: '/products/Category/grocery' },
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.path}>
            <a className="bg-white shadow-md rounded-md p-4 text-center hover:bg-gray-100 transition">
              <h2 className="text-xl font-bold">{category.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
