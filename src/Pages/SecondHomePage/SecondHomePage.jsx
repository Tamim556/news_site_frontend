import React from 'react'
import Leftside from './Leftside/Leftside'
import Add from '../Home/RightSide/Add'
import SorbocchoPothito from '../../Component/SorbocchoPothito'
import ThirdSideNewsOne from './ThirdSide/ThirdSideNewsOne'
import NewsTabs from '../Home/RightSide/NewsTabs'
import v1 from '../../assets/Images/v1.jpg'
import NewsCard from '../../Component/NewsCard'
// import { useLoaderData } from 'react-router-dom'

const SecondHomePage = ({data}) => {
  const imageUrl = `https://desh365.top/public/storage/post-image/${data?.image}`;


  console.log(data)
  return (
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-12 md:mx-12 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>


        <div className='col-span-2 hidden md:block order-last md:order-first'>
          <Leftside />
          <Leftside />
        </div>

        <div className='col-span-10'>
         
          <Add />

          <div className='grid md:grid-cols-8 grid-cols-1  gap-6'>

            <div className='md:col-span-5 col-span-1'>
              <h1 className="box-text1 md:block sm:text-center md:text-start my-2 text-sm md:text-xl lg:text-2xl mt-3">{data?.title}</h1>
              <img className='w-[400px] h-[350px]' src={imageUrl} alt="" />
            

              <div className="flex items-center justify-center my-3 w-auto h-auto  font-bold bg-[#D9D9D9]">ADD</div>

              <p className='text-[14px] w-[100%] '>
                সামাজিক যোগাযোগ মাধ্যমে প্রায়সময়ই সরব ভূমিকায় দেখা যায় অভিনেত্রী জয়া আহসানকে। শুধু নিজের ছবি-ভিডিও শেয়ার করেই নয়, বিভিন্ন ইস্যুতেও মত প্রকাশ করেন এই অভিনেত্রী।
                তারই ধারাবাহিকতায় সম্প্রতি জয়ার ফেসবুকে দেখা মিলল কওমি মাদরাসার বাচ্চাদের নিয়ে একটি পোস্ট। যদিও সেটি জয়ার লেখা নয়, অন্য কারো লেখাই নিজের পেজে শেয়ার করেছেন অভিনেত্রী। সেটা উল্লেখও করেছেন তিনি।
                জয়ার সেই ফেসবুক পোস্টে লেখা ছিল- ‘রোজার শেষ দিকে বাংলাদেশের কওমি মাদরাসাগুলোতে এক করুণ দৃশ্য দেখা যায়। সাধারণত ২৫ রোজা থেকে মাদরাসাগুলো ছুটি হতে থাকে। বেশিরভাগ ছাত্র ছাত্রীর অভিভাবক এসে বাচ্চাদের বাসায় নিয়ে যায়। কিন্তু একদল বাচ্চাকে কেউ নিতে আসে না। এদের কারও বাবা-মা নেই, কারও বাবা নেই মায়ের অন্যত্র বিয়ে হয়ে গেছে। অনেকের মা নেই, বাবা বাচ্চার খোঁজ রাখে না। খুব বেশি ভাগ্যবান হলে কারও কারও মামা-খালা-চাচা এসে কাউকে কাউকে নিয়ে যায়। বাকীরা সারাদিন কান্না করে।’
                ‘তারা জানে তাদের কেউ নিতে আসবে না। <Add/> তারা সারাবছর কাঁদে না। কিন্তু যখন সহপাঠীদের সবাই বাসায় নিয়ে যায় অথচ তাদের কেউ নিতে আসে না তখন তাদের দুঃখ শুরু হয়ে যায়। মৃত মা-বাবার ওপর তাদের অভিমান সৃষ্টি হয়- কেন তারা তাদের দুনিয়ায় রেখে এই বয়সে মারা গেলেন? তারা কি আর কিছুটা দিন বেঁচে থাকতে পারতেন না? মা বাবা বেঁচে নাই তো কী হইছে? মামা চাচারা কেউ তাদেরকে নিতে আসল না কেন? মা বেঁচে থাকতে মামারা কত আদর করত! বাবা বেঁচে থাকতে চাচারা কত আদর করত! এই বয়সেই তারা দুনিয়ার একটা নিষ্ঠুর চেহারা দেখেছে।
                সবাইকে অনুরোধ করে সেই পোস্টে আরও লেখা ছিল, ‘একটা অনুরোধ-এই ঈদে আপনার কাছাকাছি এতিমখানায় যান। কয়জন বাচ্চা ঈদে বাড়ি যায়নি খোঁজ নিন। তাদের জন্য আপনার সামর্থ্য অনুযায়ী যা পারেন তা নিয়ে যান। এই গরমে তাদের আইসক্রিম খাওয়াতে পারেন। নিদেন পক্ষে একটা চকলেট খাওয়ান। মনে রাখবেন, আজ আপনি বেঁচে না থাকলে আপনার ছোট সন্তান এতিম হয়ে যাবে! আমি ইনশাআল্লাহ চেষ্টা করব যদি আল্লাহ সহায়ক হয়।’
                জয়ার এমন পোস্টকে ভক্তরাও সাধুবাদ জানিয়েছেন। অনেকেই তার সঙ্গে সম্মতি প্রদান করেছেন। কেউ লিখেছেন, ‘একটা সত্য তুলে ধরার জন্য আপনাকে ধন্যবাদ।’ কেউ আবার এই মাদরাসার শিক্ষার্থীদের সাহায্য এগিয়ে আসারও আহ্বান জানিয়েছেন।
              </p>
              

              <div className="flex items-center justify-center my-3 mx-auto w-[50%] h-[250px]  font-bold bg-[#D9D9D9]">ADD</div>

              <Add />
             

            </div>
            <div className='md:col-span-3 col-span-1'>
              <ThirdSideNewsOne />
              <div className='w-[100%]  ml-1'>
              <NewsTabs />
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='grid md:grid-cols-12 md:mx-10 mx-2 mt-3 gap-6 lg:grid-cols-12 grid-cols-1'>
      <div className='col-span-12'>
      


      <NewsCard/>
      </div>

      </div>
    </div>
  )
}

export default SecondHomePage
