import { useEffect } from 'react';

const useClarity = (projectId) => {
  useEffect(() => {
    if (!projectId) return;

    // Check if Clarity is already loaded
    if (window.clarity) return;

    // Load Clarity script
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", projectId);
  }, [projectId]);

  // Helper functions for custom events
  const trackEvent = (eventName, properties = {}) => {
    if (window.clarity) {
      window.clarity('event', eventName, properties);
    }
  };

  const setUserId = (userId) => {
    if (window.clarity) {
      window.clarity('identify', userId);
    }
  };

  const setUserProperties = (properties) => {
    if (window.clarity) {
      window.clarity('set', properties);
    }
  };

  return {
    trackEvent,
    setUserId,
    setUserProperties
  };
};

export default useClarity;
