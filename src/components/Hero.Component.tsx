
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  firstImage: ImageProps;
  secondImage: ImageProps;
  thirdImage: ImageProps;
};

const Header127Defaults: Header127Props = {
    heading: "Expertise Without Borders. Solutions Without Limits.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",

    firstImage: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape-dim.png",
      alt: "Placeholder image 1",
    },
    secondImage: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 2",
    },
    thirdImage: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image-portrait-dim.png",
      alt: "Placeholder image 3",
    },
  };

export type Header127Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header127 = (props: Header127Props) => {
  const { heading, description, firstImage, secondImage, thirdImage } = {
    ...Header127Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="~text-lg/8xl mb-5 font-bold md:mb-6">{heading}</h1>
            <p className="md:text-md">{description}</p>
            {/* <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div> */}
          </div>
          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 right-auto top-auto w-[45%]">
              <img
                src={firstImage.src}
                className="aspect-[3/2] size-full object-cover"
                alt={firstImage.alt}
              />
            </div>
            <div className="mx-[15%] w-full">
              <img
                src={secondImage.src}
                className="aspect-[2/3] size-full object-cover"
                alt={secondImage.alt}
              />
            </div>
            <div className="absolute bottom-auto left-auto right-0 top-[10%] w-[40%]">
              <img
                src={thirdImage.src}
                className="aspect-square size-full object-cover"
                alt={thirdImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


