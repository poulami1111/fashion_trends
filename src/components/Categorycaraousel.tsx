'use client'; // This directive makes sure the component is a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation

interface CarouselItem {
  imageUrl: string;
  category: string;
  title: string;
  path: string;
  offer: string;
}

interface CategoryCarouselProps {
  items: CarouselItem[];
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ items }) => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {items.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(item.path)} className="cursor-pointer">
          {/* Replace with HomeSectionCard or any other card component */}
          <div className="bg-transparent border border-yellow-50 p-4 w-[22rem] h-[30rem] items-center justify-center rounded shadow-lg shadow-black hover:shadow-2xl hover:shadow-yellow-500">
            <img src={item.imageUrl} alt={item.title} className="w-auto h-[24rem] object-cover rounded" />
            <h3 className="mt-4 text-xl text-white hover:text-yellow-500 text-center font-semibold">{item.title}</h3>
            <p className="text-gray-50 hover:text-yellow-500 text-center">{item.offer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;


