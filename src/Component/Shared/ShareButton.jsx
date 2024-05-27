import React, { useEffect } from 'react';

const ShareButton = ({ postId }) => {


    useEffect(() => {
        // Initialize Facebook SDK
        if (window.FB) {
          window.FB.init({
            appId: 'your-app-id',
            version: 'v13.0',
          });
        }
      }, []);

      const shareOnFacebook = () => {
        if (window.FB) {
          window.FB.ui({
            method: 'share',
            href: `https://news-blog-teal.vercel.app/${postId}`,  
          }, function(response){});
        }
      }


 

  return (
    <button onClick={shareOnFacebook}>Share on Facebook</button>
  );
}

export default ShareButton;
