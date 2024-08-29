// BlogContainer.tsx

import React from 'react';

import { useQuery } from '@apollo/client';
import BlogSliderComponent from './GlobalInsightsSliderComponent';
import { GET_BLOG_POST_ITEMS } from '../queries';

const BlogSliderSection: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BLOG_POST_ITEMS);

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
  coverImage: {
    url: string;
    fileName: string;
  };
}


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract the blog posts data
  const blogPosts = data.posts.map((post: Post) => ({
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    content: post.content.text,
    backgroundImage: post.coverImage.url,
    slug: post.slug,
  }));

  return <BlogSliderComponent blogPosts={blogPosts} />;
};

export default BlogSliderSection;