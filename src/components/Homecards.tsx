import React from 'react';

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
    <div className='cursor-pointer flex flex-col items-center gap-4 bg-transparent rounded-lg overflow-hidden w-[20rem] mx-12 border border-gray-300'>
      <div className='h-[15rem] w-[14rem] mt-3'>
        <img
          className='object-cover object-top w-full h-full border-gray-300'
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-2xl font-medium text-slate-100'>{product.category}</h3>
        <p className='mt-2 right-1 text-sm text-slate-200'>{product.offer}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
