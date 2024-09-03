// src/components/ScrollToHash.Component.tsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

const ScrollToHash: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [location]);

  return null;
};

export default ScrollToHash;