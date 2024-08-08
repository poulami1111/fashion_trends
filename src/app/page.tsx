'use client';
import Navbar from '@/components/Navbar';

import Countdown from '@/components/Countdown';

const Page: React.FC = () => {
  const targetDate = new Date().setHours(new Date().getHours() + 1);
  return (
    <>
     <div className='bg-white'>
       <Navbar/>
       <div className="App">
      <Countdown targetDate={targetDate} />
    </div>
    </div></>
   
  
  );
};

export default Page;