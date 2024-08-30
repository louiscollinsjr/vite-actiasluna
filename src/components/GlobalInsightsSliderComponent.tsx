// BlogSlider.tsx
import { useQuery } from '@apollo/client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation'; // Import styles for navigation module
import 'swiper/css/pagination'; // Import styles for pagination module
import 'swiper/css/scrollbar'; // Import styles for scrollbar module
import './globalinsightsslider.component.styles.css';


// Import the required Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { GET_BLOG_POST_ITEMS } from '../queries';


// Fallback image URL (use a local or remote default image URL)
const FALLBACK_IMAGE_URL = '../assets/react.svg';

// Define the Post type based on the structure of the posts
interface Post {
  category: string;
  title: string;
  excerpt: string;
  subtitle?: string; // Optional subtitle
  content: {
    text: string;
  };
  slug: string;
  image: {
    filename:string;
    url: string;
  };
   publishingDate: string;
}


  

const BlogSliderComponent: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BLOG_POST_ITEMS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract the blog posts data
  // const blogPosts = data.posts.map((post: Post) => ({
  //   title: post.title,
  //   excerpt: post.excerpt,
  //   category: post.category,
  //   content: post.content.text,
  //   slug: post.slug,
  // }));

  return (
    <section id="insights-section" className="w-full flex flex-col content-center items-center min-h-[42.5rem] py-12 lg:py-24 my-2 px-10" tabIndex={-1}>
    <div className="w-full md:max-w-screen-2xl">
    <p className="~text-base/lg tracking-wide text-black">
    <b>Actias</b>Luna
    </p>
      <p className="~text-4xl/7xl  text-black pb-8  pt-2 lg:w-245 font-heading">
      Global Insights.
      </p>
      

      <div className=' lg:w-full'>
      <Swiper className=''
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 20000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        // Responsive breakpoints
        480: {
          slidesPerView: 1, // 1 slide per view on extra-small screens (up to 480px)
        },
        640: {
          slidesPerView: 2, // 2 slides per view on small screens (up to 640px)
        },
        768: {
          slidesPerView: 2, // 2 slides per view on medium screens (up to 768px)
        },
        1024: {
          slidesPerView: 2, // 3 slides per view on large screens (1024px and above)
        },
        1280: {
          slidesPerView: 3, // 4 slides per view on extra-large screens (1280px and above)
        },
        1536: {
          slidesPerView: 3, // 5 slides per view on 2K screens (1536px and above)
        },
        1920: {
          slidesPerView: 3, // 6 slides per view on ultra-wide screens (1920px and above)
        },
      }}
    >
      {data.posts.map((post: Post, index: number) => (
        <SwiperSlide key={index}>
          <div
            className="rounded-lg shadow-xl mx-2 my-8 h-[500px]  bg-white"
            style={{
              // backgroundImage: `url(${post.image?.url || FALLBACK_IMAGE_URL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height:500,
              color: '#000',
              display: 'flex',
              alignItems: 'start',
              justifyContent: '',
              flexDirection: 'column',
              textAlign: 'left',
              padding: '15px',
            }}
          >
           
            <img
              alt="Business meeting"
              className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-102 rounded-lg h-[45%] border-0"
              src={post.image?.url || FALLBACK_IMAGE_URL}
              style={{
                objectFit: "cover",
              }}
           
            />
            <p className='text-xs uppercase py-4 pl-2'>{post.category}</p>
            <h2 className='text-base/2xl font-bold pl-2'>{post.title}</h2>
            <p className='py-4 ~text-xs/sm pl-2'>{post.content.text}</p>
            <button className='absolute bottom-12 bg-slate-200 opacity-50 text-black py-1 px-2 rounded-2xl text-[8px] uppercase tracking-wide'> Comming {post.publishingDate }</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
      </div>
    </section>
  );
};

export default BlogSliderComponent;