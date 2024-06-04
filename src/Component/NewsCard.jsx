
import { Link, useParams } from 'react-router-dom'
const NewsCard = ({ related }) => {




  if (!related) {
    return <div className='text-center'> Loading...</div>; // Or any fallback content
  }

 

  return (
    <div className='mt-5 mb-5'>
      <div className=' px-1 py-3 '>
        <h1 className='text-2xl font-bold'>এ বিভাগের সর্বোচ্চ পঠিত</h1>
        {/* <h1>{related.length}</h1> */}

      </div>
      <div>
        <div>




          <div className='grid overflow-x-hidden gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8'>
            {related.map(post => { 
              const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;

              return (

                <div key={post?.id} className='overflow-auto h-300px'>

                <Link to={`/details/${post?.id}`} key={post?.id}>
                <div className='flex gap-2 flex-col my-3' key={post?.id}>
                    <div className=''>

                      <img className='transition duration-300 ease-in-out hover:scale-90 w-[100%] h-[200px] rounded-md' src={imageUrl} alt={post.title} />
                    </div>
                    <h2 className='text-[16px] font-bold justify-center items-center'>{post.title}</h2>

                  </div>
                  </Link>
                  <hr />
                 
                </div>


              );
            })} </div>
        </div>
        <div className="bg-white py-1 ">

        </div>
      </div>
    </div>
  )
}

export default NewsCard
