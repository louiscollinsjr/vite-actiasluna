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
   publishingDate: String;
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
    <b>actias</b>luna
    </p>
      <p className="~text-4xl/7xl  text-black pb-8  pt-2 lg:w-245 font-heading">
      Global Insights.
      </p>
      

      <div className=''>
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
        640: {
          slidesPerView: 1, // 1 slide per view on mobile screens (up to 640px)
        },
        1024: {
          slidesPerView: 3, // 3 slides per view on large screens (1024px and above)
        },
      }}
    >
      {data.posts.map((post: Post, index: number) => (
        <SwiperSlide key={index}>
          <div
            className="blog-slide rounded-xl shadow-xl mx-4 my-8 bg-black"
            style={{
              //backgroundImage: `url(${post.image?.url || FALLBACK_IMAGE_URL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              color: '#fff',
              display: 'flex',
              alignItems: 'start',
              justifyContent: '',
              flexDirection: 'column',
              textAlign: 'left',
              padding: '30px',
            }}
          >
            <p className='text-xs uppercase py-2'>{post.category}</p>
            <h2 className='text-2xl font-bold'>{post.title}</h2>
            <p className='py-4'>{post.content.text}</p>
           <button className='bg-white opacity-50 text-black py-1 px-2 rounded-2xl text-[8px] uppercase tracking-wide'> Comming {post.publishingDate }</button>
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