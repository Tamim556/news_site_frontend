import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryComponent = ({ categoryName }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        const filteredPosts = response.data.data.filter(post => post.category_name === categoryName);
        setPosts(filteredPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div>
      <p className='font-bold text-xl my-4 ml-10'>{categoryName}</p>
      <div className='grid md:grid-cols-12 md:mx-10 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>
        <div className='col-span-4'>
          {posts.length > 0 && (
            <Link to={`/details/${posts[0].id}`} key={posts[0].id}>
              <div className='space-y-4'>
                <img className='w-[100%] h-full mb-3' src={`https://admin.desh365.top/public/storage/post-image/${posts[0].image}`} alt={posts[0].title} />
                <h1 className='text-xl font-bold'>{posts[0].title}</h1>
              </div>
            </Link>
          )}
        </div>
        <div className='col-span-4'>
          <div className='flex flex-col gap-3'>
            {posts.map(post => (
              <Link to={`/details/${post?.id}`} key={post?.id}>
                <div className='flex gap-2'>
                  <img className='w-24' src={`https://admin.desh365.top/public/storage/post-image/${post.image}`} alt={post.title} />
                  <h2>{post.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='col-span-4'>
        <div className="flex items-center justify-center w-[100%] h-[350px]  font-bold bg-[#D9D9D9]">ADD</div>
        </div>

      </div>
      <div className='border-black w-[94%] mx-auto my-6 border-b-2'></div>
    </div>
  );
};

export default CategoryComponent;
