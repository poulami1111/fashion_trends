'use client';

import React from 'react';
import products from '@/data/products.json';

interface ProductDetailsProps {
  params: {
    category: string;
    id: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const { category, id } = params;

  // Ensure category and id are defined and handle case sensitivity
  if (!category || !id) {
    return <p>Missing category or product ID.</p>;
  }

  const lowercaseCategory = category.toLowerCase();

  const product = products.find(
    (p) =>
      p.id === Number(id) &&
      p.category.toLowerCase() === lowercaseCategory
  );

  if (!product) {
    return <p>Product not found in the {category} category.</p>;
  }

  const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;

  return (
    <div className="product-detail flex flex-col lg:flex-row py-8 px-4 max-w-screen-lg mx-auto">
      {/* Image Section */}
      <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-auto object-cover border border-gray-200 rounded-lg"
        />
      </div>

      {/* Product Information Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        {/* Offer Section */}
        <div className="text-red-600 text-lg font-semibold mb-4">
          {product.offer}{' '}
          <span className="text-gray-600 text-base line-through">
            ₹{(price / 0.63).toFixed(0)}
          </span>
        </div>

        {/* Price Section */}
        <div className="text-4xl font-bold mb-4 text-green-700">
          ₹{price.toFixed(2)}
        </div>

        {/* Delivery and Availability Section */}
        <div className="text-gray-700 mb-4">
          <p>Inclusive of all taxes</p>
          <p>In stock</p>
          <p>Delivered by: Amazon</p>
          <p>Sold by: BRICS INDIA TRADE PVT LTD</p>
        </div>

        {/* Quantity and Add to Cart Section */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 mb-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="10"
            defaultValue="1"
            className="w-16 border border-gray-300 rounded px-2 py-1 text-center mb-4"
          />
        </div>

        <button className="bg-yellow-400 text-black py-2 px-4 rounded mb-4">
          Add to Cart
        </button>
        <button className="bg-orange-400 text-white py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;







