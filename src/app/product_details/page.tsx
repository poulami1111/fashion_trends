'use client';
import React from "react";
import FilterComponent from "../Filters/page";
import MobileAccessoriesPage from "@/components/accessories";
import HomeSectionCard from "@/components/Homecards";

const Page: React.FC = () => {
    const product = {
        id: 1,
        name: "Sample Product",
        description: "This is a sample product.",
        price: "$19.99",
        imageUrl: "https://example.com/image.jpg",
        category: "Electronics", // add this
        title: "Sample Title", // add this
        offer: "10% Off", // add this
      };
  return (
    // <div style={{ background: 'linear-gradient(black, grey, black)', height: '100vh' }}>
        <div className="flex flex-wrap"> 
            <div className="mt-8">
            <FilterComponent/>
            </div>
            
     <div className="w-[100rem] flex-col">
        <MobileAccessoriesPage/>
   
     <div>
     <div className=" mt-6 mb-8 flex flex-wrap justify between py-8 px-10 gap-4">
           <HomeSectionCard  product={product} />
           <HomeSectionCard product={product}/>
           <HomeSectionCard product={product}/>
           <HomeSectionCard product={product}/>
           <HomeSectionCard product={product}/>
           <HomeSectionCard product={product}/>
           <HomeSectionCard product={product}/>
           <HomeSectionCard product={product}/>
           <HomeSectionCard product={product}/>
           <HomeSectionCard product={product}/>
        </div>
     </div>
     </div>
     </div>
  );
};

export default Page;
