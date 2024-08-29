// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cm0crir0c01kf07vyo06vnr45/master',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
