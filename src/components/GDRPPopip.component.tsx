import React, { useState, useEffect } from 'react';

// Define types for styles if you're using inline styles
const popupStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    padding: '15px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
};

const buttonStyle: React.CSSProperties = {
    margin: '5px',
    padding: '8px 12px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '4px',
};

const GDPRPopup: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    useEffect(() => {
        const consent = localStorage.getItem('gdprConsent');
        if (!consent) {
            setShowPopup(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('gdprConsent', 'accepted');
        setShowPopup(false);
    };

    const handleDecline = () => {
        localStorage.setItem('gdprConsent', 'declined');
        setShowPopup(false);
    };

    if (showPopup) {
        return null; // Don't render anything if the popup shouldn't be shown
    }

    return (
        <div style={popupStyle}>
            <p>ActiasLuna doesn't use third party cookies. No data is sent to a third party.</p>
            <button onClick={handleAccept} style={buttonStyle}>Accept</button>
            <button onClick={handleDecline} style={buttonStyle}>Decline</button>
        </div>
    );
};

export default GDPRPopup;