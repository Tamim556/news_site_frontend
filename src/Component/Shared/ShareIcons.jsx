import React from 'react';
import { RiFacebookBoxFill } from "react-icons/ri"; 
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ShareIcons = ({ url, title }) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
  };
  const shareOnYouTube = () => {
    window.open(`https://www.youtube.com/create_post?url=${encodeURIComponent(url)}`, '_blank');
  };
  
  return (
    <div className='gap-3 flex'>
        <h1>Share </h1>
      <button onClick={shareOnFacebook}>
      <RiFacebookBoxFill size={32} style={{ color: '#4284ed' }} />
      </button>
      <button onClick={shareOnTwitter}>
      <FaTwitter size={31} style={{ color: '#4284ed' }} />
      </button>
      <button onClick={shareOnLinkedIn}>
      <FaLinkedin size={32} style={{ color: '#1b3fe0' }}/>
      </button>
      <button onClick={shareOnYouTube}>
      <FaYoutube size={32} style={{ color: '#e61232' }}/>
      </button>
    </div>
  );
};

export default ShareIcons;
