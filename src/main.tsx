import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClientSetup';
import ScrollToHash from './components/ScrollToHash.Component.tsx';


import App from './App.tsx';
import './index.css';

// Import the PostHog initialization function
import { initPostHog } from './posthog.ts';

// Initialize PostHog
initPostHog();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <ScrollToHash />
     <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
     </BrowserRouter>
  </StrictMode>
)


