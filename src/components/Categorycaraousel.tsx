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
          <div className="bg-white p-4 w-[20rem] h-auto rounded shadow-lg">
            <img src={item.imageUrl} alt={item.title} className="w-auto h-auto object-cover rounded" />
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.offer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;


