import React from 'react';
import DOMPurify from 'dompurify';

const PostBody = ({ postBody }) => {
  // const slicedPostBody = posts[0].post_body.slice(0, 50);
  const sanitizedHTML = DOMPurify.sanitize(postBody);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default PostBody;
