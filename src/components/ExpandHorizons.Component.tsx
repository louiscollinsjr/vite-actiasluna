import React from 'react';
import JourneyVideoMontageComponent from './JourneyVideoMontage.Component';
import { Link } from 'react-router-dom';



const ExpandHorizonsComponent: React.FC = () => {
  return (
    <section className="w-full flex flex-col content-center items-center  py-24 md:py-48  my-0 px-10 border-b-0 border-white bg-slate-100">
    <div className="w-full md:max-w-screen-2xl">
      <p className="~text-base/lg tracking-wide text-black uppercase ">
      Your Partner in Global Excellence
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-4 mb-48">
        <div className="items-center content-start justify-items-center pt-2 lg:pr-20">
          <h2 className="~text-5xl/7xl font-heading">Expand your horizons and achieve new heights</h2>

         <ul className="list-disc leading-10 ~text-base/xl py-6 lg:pr-20">
          <p>Our team brings unparalleled global expertise and innovative strategies to help your business thrive across Europe and beyond. <br/><br/>Whether navigating complex regulations, seeking new opportunities, or optimizing operations, we deliver tailored solutions that transcend borders and drive your success.</p>
          
          <p className='pt-6'>Let us illuminate the path to your next project.</p>
         </ul>
        </div>
        <div className=''>
          <JourneyVideoMontageComponent />
        </div>
      </div>

      <p className="~text-base/lg tracking-wide text-black pb-4 font-normal uppercase">
      Testimonials from Our Partners
      </p>
      <p className="~text-base/xl tracking-wide text-black pb-8 font-normal md:w-[40%]">
      At <b>Actias</b>Luna, we deeply value our partnerships and are committed to delivering excellence, as evidenced by the positive experiences of those we work with.
      </p>
      <Link to="/partners" className="text-blue-600 hover:text-blue-800 transition-colors pb-12 block">
         Our partners →
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 font-playfair justify-center items-center bg-gray-200 p-1 bg-opacity-0 rounded-2xl">
        <div className="bg-white p-6 rounded-lg shadow-lg h-40">
            <p className="text-gray-700 text-base italic tracking-wide">
                <span className='text-2xl font-bold'>"</span>Working with ActiasLuna has been an incredibly rewarding experience. Their clear vision and strategic approach make the design process seamless and enjoyable.<span className='text-2xl font-bold'>"</span>
            </p>
        </div>
       
        <div className="bg-white p-6 rounded-lg shadow-lg h-40 italic tracking-wide">
            <p className="text-gray-700 text-base">
            <span className='text-2xl font-bold'>"</span>ActiasLuna's professionalism and commitment to excellence set them apart. I appreciate their clear communication and availablity.<span className='text-2xl font-bold'>"</span>
            </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg h-40 italic tracking-wide">
            <p className="text-gray-700 text-base">
            <span className='text-2xl font-bold'>"</span>I've had a great experience working with Actias Luna. Their team is highly collaborative, open to fresh ideas, and always focused on achieving the best outcomes.<span className='text-2xl font-bold'>"</span>
            </p>
        </div>
    </div>

    </div>
  </section>
  );
};

export default ExpandHorizonsComponent