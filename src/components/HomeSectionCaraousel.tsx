import React, { useState } from 'react';
import HomeSectionCard from '@/components/Homecards'; // Ensure this import is correct
import carouseldata from '@/components/carouseldata'; // Update the path as necessary
import SeeMoreButton from '@/components/SeeMoreButton'; // Ensure this import is correct

// Define the type for products
interface Product {
  imageUrl: string;
  category: string;
  title: string;
  path: string;
}

// Define the type for the props
interface HomeSectionCarouselProps {
  sectionName: keyof typeof carouseldata;
}

const HomeSectionCarousel: React.FC<HomeSectionCarouselProps> = ({ sectionName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure sectionName is a valid key for carouseldata
  const sectionData = carouseldata[sectionName];

  const items = [
    ...sectionData.slice(0, 10).map((product: Product, index: number) => (
      <div key={index} className="rounded-lg gap-4 shadow-lg">
        <HomeSectionCard product={product} />
      </div>
    )),
    <div key="see-more" className="rounded-lg gap-4 shadow-lg flex justify-center items-center">
      <SeeMoreButton destination={`/more-products/${sectionName.toLowerCase()}`} />
    </div>
  ];

  const handleNextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="text-gray-950 font-bold text-[25px] mt-10 mb-6 z-10">{sectionName}</div>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items}
      </div>
      <button
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white px-4 py-2 rounded-lg ${currentIndex === 0 ? 'hidden' : ''}`}
        onClick={handlePrevSlide}
      >
        &lt;
      </button>
      <button
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white px-4 py-2 rounded-lg ${currentIndex === items.length - 1 ? 'hidden' : ''}`}
        onClick={handleNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default HomeSectionCarousel;


