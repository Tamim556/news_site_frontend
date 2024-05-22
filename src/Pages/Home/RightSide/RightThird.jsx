import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import car2 from '../../../assets/Images/car2.jpg'
// import car3 from '../../../assets/Images/car3.jpg'
// import car4 from '../../../assets/Images/car4.jpg'
// import car5 from '../../../assets/Images/car6.jpg'
// import { Link } from 'react-router-dom'
const RightThird = () => {


  // Fetch Data
  const [posts, setPosts] = useState([]);
  console.log(posts
  )



  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const imageBaseUrl = 'https://desh365.top/public/storage/post-image/';
        const response = await axios.get('https://desh365.top/api/all-post');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching the posts:', error);
      }
    };

    fetchPosts();
  }, []);


 



  return (
    <div>
      {/* <div className='col-span-3 col-span-2 w-full md:col-span-3 bg-[#D9D9D9]'> */}


<div className=' '>

<div className=' flex flex-col space-y-4 gap-3 py-4'>
{posts.map(post => {
        const imageUrl = `https://desh365.top/public/storage/post-image/${post.image}`;
        
        return (
         <Link to={`/details/${post?.id}`}>
          <div className='flex gap-2' key={post?.id}>
                        <img className='w-24 h-24' src={imageUrl} alt={post.title} />
<h1>{post.id}</h1>
            <h2>{post.title}</h2>
          </div>
          </Link>
        );
      })}
    </div>
 
{/* <Link to='/news'>
  <div className='flex justify-center items-center gap-2'>
    <div className='w-[100px] h-[40px]'>
      <img src={car2} alt="car" />

    </div>
    <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
  </div></Link>


  <Link to='/news'>
  <div className='flex justify-center items-center gap-2'>
    <div className='w-[100px] h-[40px] '>
       <img src={car3} alt="car" />

    </div>
    <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
  </div></Link>

  <Link to='/news'>
  <div className='flex justify-center items-center gap-2'>
    <div className='w-[100px] h-[40px] '>
       <img src={car4} alt="car" />

    </div>
    <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
  </div></Link>

  <Link to='/news'>
  <div className='flex justify-center items-center gap-2'>
    <div className='w-[100px] h-[40px] '>
       <img src={car5} alt="car" />

    </div>
    <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
  </div></Link>

  <Link to='/news'>
  <div className='flex justify-center items-center gap-2'>
    <div className='w-[100px] h-[40px] '>
       <img src={car2} alt="car" />

    </div>
    <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
  </div></Link> */}



  


</div>

</div>
  )
}

export default RightThird
