import { NavLink } from 'react-router-dom';
import ActiasLunaGroup from '../assets/ActiasLuna_Wings_IC.svg';

import './hero.component.styles.css';


// Scroll to section function
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};


export type Header127Props = React.ComponentPropsWithoutRef<"section">;

export const Header127 = () => {
 
  return (
    <section className="w-full flex flex-col md:justify-center items-center py-48 md:py-24 lg:py-28 px-5 gradient_background lg:h-[1000px]">
    {/* px-[5%] py-16 md:py-24 lg:py-28 */}
  
    <div className="flex flex-row z-30 w-full md:max-w-screen-2xl">
      <div className="grid grid-cols-1 md:items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Order on small screens: Text first, Image second */}
        {/* Order on medium screens and above: Image first, Text second */}
        
        <div className="pt-2 md:pt-12 order-2 md:order-1 "> {/* This will be second on mobile, first on desktop */}
          <p className="text-center invisible md:text-left md:visible"><b>Actias Luna</b></p>
          <h1 className="~text-5xl/7xl mb-5 md:mb-6 md:text-left font-heading text-center font-normal">
            Expertise Without Borders. Solutions Without Limits.
          </h1>
          <p className="md:text-md md:text-left ~text-lg/xl leading-normal lg:pr-20 text-center w-full">
            We bring unparalleled global expertise and innovative strategies to help your business thrive in any market, anywhere in the world.
          </p>
          <div className="mt-6 flex gap-x-4 md:mt-8">
           
            <NavLink to="#" onClick={()=>scrollToSection('contact-section')} className="text-base nav-link text-center w-full">
            <button className='text-blue-600 font-normal text-center md:text-left w-full'>
              How can we help you? Get in touch.
            </button>
            </NavLink>
            
          </div>
        </div>
  
        <div className="relative flex w-full order-1 md:order-2 "> {/* This will be first on mobile, second on desktop */}
          <div className="mx-[10%] md:w-full">
            <img
              src={ActiasLunaGroup}
              className="size-full object-fill pb-24"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};


