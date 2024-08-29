import ActiasLuna from '../assets/actiasluna.svg';
import ActiasLunaGroup from '../assets/actiasluna_group.svg';
import YellowWingRight from '../assets/yw_right.svg';
import YellowWingLeft from '../assets/ yw_left.svg';

import './hero.component.styles.css';

export type Header127Props = React.ComponentPropsWithoutRef<"section">;

export const Header127 = () => {
 

  return (
    <section className="w-full flex flex-col justify-center items-center py-16 md:py-24 lg:py-28 bg-slate-100 px-5 gradient_background "> 
    {/* px-[5%] py-16 md:py-24 lg:py-28 */}

      <div className="flex flex-row z-30 w-full md:max-w-screen-2xl">

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className='pt-12'>
            <p className="text-center md:text-left"><b>actias</b>luna</p>
            <h1 className="~text-4xl/7xl mb-5 md:mb-6 md:text-left font-heading text-center">Expertise Without Borders. Solutions Without Limits.</h1>
            <p className="md:text-md md:text-left ~text-base/xl leading-normal lg:pr-20 text-center w-full">We bring unparalleled global expertise and innovative strategies to help your business thrive in any market, anywhere in the world.</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
             <button className=' text-blue-600 font-normal text-center w-full md:text-left'>How can help you? Get in touch with us.</button> 
            </div> 
          </div>

          <div className="relative flex w-full">
            {/* <div className="absolute bottom-[10%] left-0 right-auto top-auto w-[25%] -rotate-90 opacity-45">
              <img
                src={YellowWingLeft}
                className="aspect-[3/2] size-full object-fill"
              />
            </div> */}
            <div className="mx-[10%] w-full">
              <img
                 src={ActiasLunaGroup}
                className="aspect-[2/3] size-full object-fill"
                
              />
            </div>
            {/* <div className="absolute bottom-auto left-auto right-0 top-[10%] w-[20%] -rotate-90">
              <img
                src={YellowWingRight}
                className="aspect-square size-full object-cover opacity-60"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};


