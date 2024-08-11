'use client';
import React from 'react';
import CategoryCarousel from '@/components/Categorycaraousel'; // Correct spelling
import carouseldata from '@/components/carouseldata';
import { Product as ImportedProduct } from '@/types/Products'; // Import the existing Product type
import FilterComponent from '../Filters/page';
import MobileAccessoriesPage from '@/components/accessories';

// Rename the local Product interface to avoid conflict
interface LocalProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  title: string;
  offer: string;
  path: string; // Add path for routing
}

const Page: React.FC = () => {
  const category = "Women";

  // Map the carousel data to match the LocalProduct type
  const products: LocalProduct[] = carouseldata[category].map((item, index) => ({
    id: index + 1,  // Assign a unique ID for each product
    category: item.category,
    title: item.title,
    offer: item.offer,
    imageUrl: item.imageUrl,
    name: item.title,
    description: item.category, // Adjust description as needed
    price: item.offer, // Adjust price as needed
    path: item.path,  // Add path for routing
  }));

  return (
    <div style={{ background: 'linear-gradient(to right, black 45%, #FF6F61)' }} className='flex'>
        <div className='flex flex-wrap mt-7'>
        <div className='mt-96'>
        <FilterComponent /> {/* Render the filter component */}
      </div>
      <div className='flex flex-col'>
      <div>
        <MobileAccessoriesPage/>
      </div>
      <div className="flex flex-wrap justify-center ml-5">
        
        <CategoryCarousel items={products} /> {/* Render the carousel */}
      </div>
      </div>
        </div>
      
     
    </div>
  );
};

export default Page;

