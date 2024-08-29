import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClientSetup';

import ScrollToTop from './components/util.scrollToTop.tsx';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <ScrollToTop /> 
     <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
     </BrowserRouter>
  </StrictMode>,
)
