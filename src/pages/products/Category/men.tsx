import React from 'react';
import HomeSectionCard from '@/components/Homecards';
import carouseldata from '@/components/carouseldata';

const MenPage: React.FC = () => {
  const menProducts = carouseldata.Men || []; // Adjust according to your data structure

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Men</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menProducts.length === 0 ? (
          <div className="flex justify-center items-center min-h-screen">
            <h2 className="text-2xl font-bold">No products found in this category.</h2>
          </div>
        ) : (
          menProducts.map((product) => (
            <div key={product.path} className="bg-white shadow-md rounded-md p-4">
              <HomeSectionCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MenPage;
