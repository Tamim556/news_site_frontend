import { useEffect } from 'react';

const FacebookSDK = () => {
  useEffect(() => {
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.FB.init({
          appId: 'YOUR_APP_ID',  // Replace 'YOUR_APP_ID' with your actual Facebook App ID
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v10.0'
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default FacebookSDK;
