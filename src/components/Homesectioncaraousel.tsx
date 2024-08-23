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
    ? sectionData.slice(0, 10).map((product: Product, index: number) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <HomeSectionCard product={product} />
        </div>
      ))
    : [];

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-slate-50 font-bold text-2xl sm:text-3xl lg:text-[45px] mt-10 mb-6 z-10">
        {sectionName}
      </div>
      <div className="flex flex-wrap -mx-2">
        {items.length > 0 ? items : <div>No items available</div>}
        <div className="ml-[650px] mt-3 w-full sm:w-1/2 lg:w-1/4 p-2 flex justify-center items-center">
          <SeeMoreButton destination={`/products/Category/${sectionName.toLowerCase()}`} />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

