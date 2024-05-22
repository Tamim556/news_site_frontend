import j1 from '../../assets/Images/j1.jpg'
import j2 from '../../assets/Images/j2.jpg'
import j3 from '../../assets/Images/j3.jpg'
import j4 from '../../assets/Images/j4.jpg'

const NewsTypeOne = ({ title, content1,content2,content3,content4,content5,content6,content7,content8,content9,content10,content11,content12, }) => {
    return (
      <div>
          <div>
            
                <div className='w-[100%] h-auto pb-5 mb-5 space-y-4 bg-[#D9D9D9] mt-7   flex flex-col '>
                {/* <div className="bg-[#BDBDBD] h-[50px] w-[100%] 
                top-0 absolute mb-5 flex justify-center items-center text-center">{title}</div> */}
               
               <h1 className="bg-[#BDBDBD] p-2">{title}</h1>
                 <div className="px-3">


                
                  <div className='flex gap-2  my-3'>
                    <div className='news-box3 relative overflow-hidden  bg-no-repeat'>
                    <img className='transition duration-300 ease-in-out hover:scale-110' src={j1} alt="car" />
                    </div>
                    <h1 className="text-[10px] font-bold justify-center items-center ">{content1}</h1>
                  </div>



                  <div className='flex gap-2 my-3'>
                    <div className='news-box3 relative overflow-hidden  bg-no-repeat '>
                    <img className='transition duration-300 ease-in-out hover:scale-110' src={j2} alt="car" />
                    </div>
                    <h1 className="text-[10px] font-bold justify-center items-center ">{content2}</h1>
                  </div>



                  <div className='flex gap-2 my-3'>
                    <div className='news-box3 relative overflow-hidden  bg-no-repeat '>
                    <img className='transition duration-300 ease-in-out hover:scale-110' src={j3} alt="car" />
                    </div>
                    <h1 className="text-[10px] font-bold justify-center items-center ">{content3}</h1>
                  </div>


                  
                  <div className='flex gap-2 my-3'>
                    <div className='news-box3 relative overflow-hidden  bg-no-repeat '>
                    <img className='transition duration-300 ease-in-out hover:scale-110' src={j4} alt="car" />
                    </div>
                    <h1 className="text-[10px] font-bold justify-center items-center ">{content4}</h1>
                  </div>



                  <div className='flex gap-2 my-3'>
                    <div className='news-box3 relative overflow-hidden  bg-no-repeat '>
                    <img className='transition duration-300 ease-in-out hover:scale-110' src={j1} alt="car" />
                    </div>
                    <h1 className="text-[10px] font-bold justify-center items-center ">{content5}</h1>
                  </div>

                  
                  <div className='flex gap-2 my-3'>
                    <div className='news-box3 relative overflow-hidden  bg-no-repeat '>
                    <img className='transition duration-300 ease-in-out hover:scale-110' src={j2} alt="car" />
                    </div>
                    <h1 className="text-[10px] font-bold justify-center items-center ">{content6}</h1>
                  </div>


                  
                  <div className='flex gap-2 my-3'>
                    <div className='news-box3 relative overflow-hidden  bg-no-repeat '>
                    <img className='transition duration-300 ease-in-out hover:scale-110' src={j3} alt="car" />
                    </div>
                    <h1 className="text-[10px] font-bold justify-center items-center ">{content7}</h1>
                  </div>
                 
                   
                  </div>
                
                 
  
                </div>
              </div>
      </div>
    )
  }
  
  export default NewsTypeOne