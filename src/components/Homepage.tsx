import React from 'react';
import Navbar from './Navbar';
import Countdown from './countdown';

import Vedios from './Vedios';
import HomeSectionCarousel from './Homesectioncaraousel';
import Footer from '@/app/Footer/page';

const Homepage = () => {
   const targetDate = new Date().setHours(new Date().getHours() + 2);

  // Ensure these section names match exactly what is defined in HomeSectionCarousel's prop types
  const sections = [
    { name: 'Kids' },
    { name: 'Women' },
    { name: 'Men' },
    { name: 'Home' },
    { name: 'Grocery' },
  ];

  return (
    <div className='bg-black'>
      <Navbar />
       <div className=" ">
        <Countdown targetDate={targetDate} />
      </div> 
      <Vedios />
      <div className="my-16">
      
      {sections.map(({ name }) => (
          <div key={name} className="relative my-6 "> {/* Adjusted to include margin for gaps */}
           
            <HomeSectionCarousel sectionName={name as 'Kids' | 'Women' |   'Home' | 'Grocery' } />
          </div>
        ))}

       
      </div>
      <div className='my-19'>
        <Footer/>
      </div>
    </div>
  );
};

export default Homepage;
