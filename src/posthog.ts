// src/posthog.ts

import posthog from 'posthog-js';

// Initialize PostHog with your project API key and settings
export const initPostHog = () => {
    posthog.init('phc_3siFhse9qD9QkELloWj2X89FYuDyqxOt4MUOwyqbFnk', {
        api_host: 'https://eu.i.posthog.com',
        autocapture: false, // Disable auto-capturing events for privacy
        capture_pageview: false, // Disable automatic pageview capture
        mask_all_text: true, // Mask text to anonymize data
        mask_all_element_attributes: true, // Mask element attributes for anonymity
        person_profiles: 'identified_only',
    });

    // Optional: Disable tracking by default until user consents
    posthog.opt_out_capturing();
};

// Export the posthog object itself
export default posthog;