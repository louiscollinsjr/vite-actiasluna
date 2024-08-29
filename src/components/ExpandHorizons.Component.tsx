import React from 'react';
import JourneyVideoMontageComponent from './JourneyVideoMontage.Component';



const ExpandHorizonsComponent: React.FC = () => {
  return (
    <section className="w-full flex flex-col content-center items-center min-h-[42.5rem] py-24 md:py-48  my-2 px-10 border-b-8 border-white">
    <div className="w-full md:max-w-screen-2xl">
      <p className="~text-base/lg tracking-wide text-black uppercase ">
      Your Partner in Global Excellence
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-4">
        <div className="items-center content-start justify-items-center pt-2 lg:pr-20">
          <h2 className="~text-4xl/7xl font-heading">Expand your horizons and achieve new heights</h2>

         <ul className="list-disc leading-10 ~text-base/xl py-6 lg:pr-20 ">
          <p>Our team brings unparalleled global expertise and innovative strategies to help your business thrive across Europe and beyond. <br/><br/>Whether navigating complex regulations, seeking new opportunities, or optimizing operations, we deliver tailored solutions that transcend borders and drive your success.</p>
          
          <p className='pt-6'>Let us illuminate the path to your next project.</p>
         </ul>
        </div>
        <div className=''>
          <JourneyVideoMontageComponent />
        </div>
       
      </div>
    </div>
  </section>
  );
};

export default ExpandHorizonsComponent