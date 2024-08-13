import React from 'react';
import Image from 'next/image';

interface Product {
  imageUrl: string;
  category: string;
  title: string;
  offer: string;
}

interface HomeSectionCardProps {
  product: Product;
}

const HomeSectionCard: React.FC<HomeSectionCardProps> = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center gap-4 bg-transparent rounded-lg overflow-hidden w-[19rem] border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400 duration-300 ease-in-out">
      <div className="h-[13rem] w-[14rem] mt-3 relative">
      <Image
      className="transition-transform transform hover:scale-110 duration-300 ease-in-out"
      src={product.imageUrl}
      alt={product.title}
      fill // Ensures the image fills its container
      style={{ objectFit: 'cover', objectPosition: 'top' }} // Use inline styles for objectFit and objectPosition
      quality={100} // Adjust quality for better optimization (between 1 and 100)
    />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-2xl font-medium text-slate-100 transition-colors duration-300 ease-in-out hover:text-yellow-400">
          {product.category}
        </h3>
        <p className="mt-2 text-sm text-slate-200 transition-colors duration-300 ease-in-out hover:text-yellow-300">
          {product.offer}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

