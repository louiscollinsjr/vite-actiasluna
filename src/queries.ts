import { gql } from '@apollo/client';

export const GET_BLOG_POST_ITEMS = gql`
  query GetBlogPostItems{
  posts(orderBy: publishingDate_ASC) {
    category
    title
    subtitle
    slug
    excerpt
    content {
      text
    }
    image {
      url
      fileName
      id
    }
    publishingDate
    }
  }
`;

