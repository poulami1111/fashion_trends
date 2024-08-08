import React from 'react';
import Navbar from './Navbar';
import Countdown from './Countdown';
import Vedios from './Vedios';
import HomeSectionCarousel from './HomeSectionCaraousel';

const Homepage = () => {
  // const targetDate = new Date().setHours(new Date().getHours() + 2);

  // Ensure these section names match exactly what is defined in HomeSectionCarousel's prop types
  const sections = [
    { name: 'Kids', videoSrc: 'kids-video.mp4' },
    { name: 'Women', videoSrc: 'women-video.mp4' },
    { name: 'Men', videoSrc: 'men-video.mp4' },
    { name: 'Black', videoSrc: 'black-video.mp4' },
    { name: 'Pink', videoSrc: 'pink-video.mp4' },
    { name: 'Royal', videoSrc: 'royal-video.mp4' },
    { name: 'Home', videoSrc: 'home-video.mp4' },
    { name: 'DailyNeeds', videoSrc: 'daily-needs-video.mp4' },
    { name: 'Grocery', videoSrc: 'grocery-video.mp4' },
    { name: 'Bags', videoSrc: 'bags-video.mp4' },
    { name: 'Kitchen', videoSrc: 'kitchen-video.mp4' },
  ];

  return (
    <div className='bg-black'>
      <Navbar />
      {/* <div className="my-10 ">
        <Countdown targetDate={targetDate} />
      </div> */}
      <Vedios />
      <div className="my-16">
        {sections.map(({ name }) => (
          <div key={name} className="relative my-8"> {/* Adjusted to include margin for gaps */}
           
            <HomeSectionCarousel sectionName={name as 'Kids' | 'Women' | 'Black' | 'Pink' | 'Royal' | 'Home' | 'DailyNeeds' | 'Grocery' | 'Bags' | 'Kitchen'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;