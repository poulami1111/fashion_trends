import React from 'react';
import HomeSectionCard from '@/components/Homecards';
import carouseldata from '@/components/carouseldata';
import SeeMoreButton from '@/components/SeeMoreButton';

interface Product {
  imageUrl: string;
  category: string;
  title: string;
  path: string;
  offer: string;
}

interface HomeSectionCarouselProps {
  sectionName: keyof typeof carouseldata;
}

const HomeSectionCarousel: React.FC<HomeSectionCarouselProps> = ({ sectionName }) => {
  const sectionData = carouseldata[sectionName];

  // Check if sectionData is defined, otherwise use an empty array
  const items = sectionData
    ? sectionData.slice(0, 4).map((product: Product, index: number) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <HomeSectionCard product={product} />
        </div>
      ))
    : [];

  // Map sectionName to the appropriate URL path
  const categoryPaths: { [key: string]: string } = {
    women: '/products/Category/women',
    men: '/products/Category/men',
    kids: '/products/Category/kids',
    home: '/products/Category/home',
    grocery: '/products/Category/grocery'
  };

  // Determine the destination URL based on sectionName
  const destination = categoryPaths[sectionName] || '/';

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-slate-50 font-bold text-2xl sm:text-3xl lg:text-[45px] mt-10 mb-6 z-10">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">
          {sectionName}
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        {items.length > 0 ? items : <div>No items available</div>}
        <div className="ml-auto mt-3 w-full sm:w-1/2 lg:w-1/4 p-2 flex justify-center items-center">
          <SeeMoreButton destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;


