// src/components/CookieConsent.tsx

import React, { useEffect, useState } from 'react';
import posthog from 'posthog-js';


// Define types for styles if you're using inline styles
const popupStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    padding: '15px',
    //backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
};



const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Show the cookie consent only if PostHog hasn't been opted in or out
    if (!posthog.has_opted_in_capturing() && !posthog.has_opted_out_capturing()) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setVisible(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setVisible(false);
  };

  if (!visible) return null;

  return (
      <div style={popupStyle} className='w-80 text-sm rounded-lg bg-slate-700 text-white'>
        <p className='pb-2'> We use cookies to enhance your experience and provide personalized content. This website uses cookies that are strictly necessary for its operation.</p>
        <p className='pb-8' >By continuing to browse our site, you consent to our use of these essential cookies. Learn more about our cookie policy in our Privacy Policy.</p>
        <p className='pb-8 font-bold' >No private data is sent to a third party.</p>
        <button className='p-2 mr-2 bg-white text-black rounded-lg font-bold tracking-wide' onClick={acceptCookies}>Accept</button>
        <button className='p-2 bg-slate-400 rounded-lg text-black' onClick={declineCookies}>Decline</button>
      </div>
  );
};

export default CookieConsent;