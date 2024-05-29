import React, { useEffect } from 'react';

const FacebookSDK = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : 'YOUR_APP_ID', // Replace 'YOUR_APP_ID' with your actual Facebook App ID
          cookie     : true,
          xfbml      : true,
          version    : 'v10.0'
        });
        window.FB.AppEvents.logPageView();
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         js.onload = () => {
           window.FB.init({
             appId: '889877846240065',  // Replace 'YOUR_APP_ID' with your actual Facebook App ID
             autoLogAppEvents: true,
             xfbml: true,
             version: 'v10.0'
           });
         };
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    }
  }, []);

  return null;
};

export default FacebookSDK;
