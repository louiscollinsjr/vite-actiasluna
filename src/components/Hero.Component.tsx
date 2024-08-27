import ActiasLuna from '../assets/actiasluna.svg';
import YellowWingRight from '../assets/yw_right.svg';
import YellowWingLeft from '../assets/ yw_left.svg';
import BusinessDuo from '../assets/davidbustos_two_man_modern_lawyers_latin_american_35_years_old__2cdcc05b-bae8-48e5-9043-22139366133b.png';

type Props = {
  heading: string;
  description: string;
};

const Header127Defaults: Header127Props = {
    heading: "Expertise Without Borders. Solutions Without Limits.",
    description:
      "We bring unparalleled global expertise and innovative strategies to help your business thrive in any market, anywhere in the world.",
  };

export type Header127Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header127 = (props: Header127Props) => {
  const { heading, description} = {
    ...Header127Defaults,
    ...props,
  } as Props;
  return (
    <section className="w-full realative flex flex-col justify-center items-center py-16 md:py-24 lg:py-28"> 
    {/* px-[5%] py-16 md:py-24 lg:py-28 */}

      <div className="flex flex-row z-30 w-full md:max-w-screen-2xl px-10">

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className='pt-12'>
            <p className="text-left"><b>actias</b>luna</p>
            <h1 className="text-6xl mb-5 font-bold md:mb-6 text-left">{heading}</h1>
            <p className="md:text-md text-left ~text-3xl/8xl">{description}</p>
            {/* <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div> */}
          </div>

          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 right-auto top-auto w-[25%] -rotate-90">
              <img
                src={YellowWingLeft}
                className="aspect-[3/2] size-full object-fill"
              />
            </div>
            <div className="mx-[15%] w-full">
              <img
                 src={ActiasLuna}
                className="aspect-[2/3] size-full object-fill"
                
              />
            </div>
            <div className="absolute bottom-auto left-auto right-0 top-[10%] w-[20%] -rotate-90">
              <img
                src={YellowWingRight}
                className="aspect-square size-full object-cover"
              
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


