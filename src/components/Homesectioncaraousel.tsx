
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
        <div key={index} className="rounded-lg gap-4 shadow-lg">
          <HomeSectionCard product={product} />
        </div>
      ))
    : [];

  return (
    <div className="relative">
      <div className="text-slate-50 font-bold text-[45px] mt-10 mb-6 z-10">{sectionName}</div>
      <div className="flex flex-wrap gap-6">
        {items.length > 0 ? items : <div>No items available</div>}
        <div className="rounded-lg gap-4 shadow-lg flex justify-center items-center">
          <SeeMoreButton destination={`/products/Category/${sectionName.toLowerCase()}`} />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;