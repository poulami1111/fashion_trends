import React from "react";
import HomeSectionCard from "@/components/Homecards";
import { Product } from "@/types/Products";

interface CategoryCarouselProps {
  items: Product[];
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {items.map((product) => (
        <div key={product.id} className="cursor-pointer">
          <HomeSectionCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;


