'use client';

import React from "react";
import HomeSectionCard from "./Homecards";

const MobileAccessoriesPage: React.FC = () => {
    
    

  return (
    <div className="ml-6" style={{ flexGrow: 1, overflow: 'auto' }}>
      <div className="text-2xl">
        <div className="mt-5">
          <div className="flex flex-wrap">
            <a href="/" className="R0cyWM">Home</a>
            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="wMLTcO"></path>
            </svg>
            <div className="r2CdBx">
            <a className="ml-3" href="/mobiles-accessories/pr?sid=tyy&marketplace=FLIPKART">Mobiles &amp; Accessories</a>
            
          </div>
          </div>
          
        </div>
        <div className="flex flex-wrap mt-14 ">
          <div className="flex flex-wrap gap-5">
         
            <div>
              New Launch Mobile Covers: 
              <div  className="text-blue-900  gap-3">
              <a href="/q/realme-7i-back-cover ">Realme 7i</a>, 
              <a href="/q/realme-c12-back-cover">Realme C12</a>, 
              <a href="/q/realme-c15-back-covers">Realme C15</a>
              </div>
             
            </div>
          </div>
        </div>
        <div className="flex flex-grow gap-6 text-center mt-3">
        <h1 className="font-extrabold text-[30px]">Mobiles &amp; Accessories</h1>
        <span className="mt-4">(Showing 1 – 40 products of 69,987 products)</span>
        </div>
       
        <div className="flex flex-wrap text-lg justify-between gap-20 mt-5 ">
          <span className="viJOii">Sort By</span>
          <div className="zg-M3Z _0H7xSG">Popularity</div>
          <div className="zg-M3Z">Price -- Low to High</div>
          <div className="zg-M3Z">Price -- High to Low</div>
          <div className="zg-M3Z">Newest First</div>
        </div>
        <div className="mt-7 border-b border-yellow-500"></div>

       
      </div>
    </div>
  );
};

export default MobileAccessoriesPage;
