// src/hooks/usePageViews.ts

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import posthog from '../posthog'; // Import the default export


const usePageViews = () => {
  const location = useLocation();

  useEffect(() => {
    // Capture pageview event on route change
    posthog.capture('$pageview', { path: location.pathname });
  }, [location]);
};

export default usePageViews;