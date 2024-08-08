import React from 'react';

interface Product {
  imageUrl: string;
  category: string;
  title: string;
}

interface HomeSectionCardProps {
  product: Product;
}

const HomeSectionCard: React.FC<HomeSectionCardProps> = ({ product }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center gap-4 bg-[#ffbe02] rounded-lg overflow-hidden w-[18rem] mx-12 border border-gray-300'>
      <div className='h-[13rem] w-[10rem] mt-3'>
        <img
          className='object-cover object-top w-full h-full border-gray-300'
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.category}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
