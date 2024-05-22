import React from 'react'
import v1 from '../assets/Images/v1.jpg'
import v2 from '../assets/Images/v2.jpg'
import v6 from '../assets/Images/v6.jpg'
import v3 from '../assets/Images/v3.jpg'
const NewsCard = () => {
  return (
<div className='mt-5 mb-5'>
    <div className=' px-1 py-3 '>
        <h1 className='text-2xl font-bold'>এ বিভাগের সর্বোচ্চ পঠিত</h1>
        </div>
    <div>
      <div class="bg-white py-1 ">
  <div class="">
    
   
   

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
    
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={v1} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">ক্রিকেট ছাড়লে অনেক দিনের জন্য আড়ালে চলে যাবেন কোহলি</a>
          </h2>

          <p class="mb-8 text-gray-500">চলতি আইপিএল মৌসুমেও ব্যাট হাতে কোহলি অনেক সমালোচককে চুপ করিয়ে দিয়েছেন। এবারের আইপিএলে ১৩ ইনিংস ব্যাটিং করে রান করেছেন ৬৬১—গড় ৬৬.১০।</p>

          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" class="h-full w-full object-cover object-center" />
              </div>

              <div>
                <span class="block text-indigo-500">Mike Lane</span>
                <span class="block text-sm text-gray-400">Jan 19, 2024</span>
              </div>
            </div>

            <span class="rounded border px-2 cursor-pointer py-1 text-sm text-gray-500">Article</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={v3} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">ক্রিকেট ছাড়লে অনেক দিনের জন্য আড়ালে চলে যাবেন কোহলি</a>
          </h2>

          <p class="mb-8 text-gray-500">চলতি আইপিএল মৌসুমেও ব্যাট হাতে কোহলি অনেক সমালোচককে চুপ করিয়ে দিয়েছেন। এবারের আইপিএলে ১৩ ইনিংস ব্যাটিং করে রান করেছেন ৬৬১—গড় ৬৬.১০।</p>

          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" class="h-full w-full object-cover object-center" />
              </div>

              <div>
                <span class="block text-indigo-500">Mike Lane</span>
                <span class="block text-sm text-gray-400">Jan 19, 2024</span>
              </div>
            </div>

            <span class="rounded border px-2 cursor-pointer py-1 text-sm text-gray-500">Article</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={v2} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">ক্রিকেট ছাড়লে অনেক দিনের জন্য আড়ালে চলে যাবেন কোহলি</a>
          </h2>

          <p class="mb-8 text-gray-500">চলতি আইপিএল মৌসুমেও ব্যাট হাতে কোহলি অনেক সমালোচককে চুপ করিয়ে দিয়েছেন। এবারের আইপিএলে ১৩ ইনিংস ব্যাটিং করে রান করেছেন ৬৬১—গড় ৬৬.১০।</p>

          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" class="h-full w-full object-cover object-center" />
              </div>

              <div>
                <span class="block text-indigo-500">Mike Lane</span>
                <span class="block text-sm text-gray-400">Jan 19, 2024</span>
              </div>
            </div>

            <span class="rounded border px-2 cursor-pointer py-1 text-sm text-gray-500">Article</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={v6} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">সাকিব ও হাসারাঙ্গা—টি–টোয়েন্টিতে এক নম্বর অলরাউন্ডার এখন দুজন</a>
          </h2>

          <p class="mb-8 text-gray-500">১৫ দিন পরই শুরু হচ্ছে টি-টোয়েন্টি বিশ্বকাপ। এর আগে সাকিব আল হাসান ও ওয়ানিন্দু হাসারাঙ্গার মধ্যে টি-টোয়েন্টি অলরাউন্ডারদের র‌্যাঙ্কিংয়ের শীর্ষস্থান নিয়ে লড়াইটা জমে উঠেছে বেশ।।</p>

          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" class="h-full w-full object-cover object-center" />
              </div>

              <div>
                <span class="block text-indigo-500">Mike Lane</span>
                <span class="block text-sm text-gray-400">Jan 19, 2024</span>
              </div>
            </div>

            <span class="rounded border px-2 cursor-pointer py-1 text-sm text-gray-500">Article</span>
          </div>
        </div>
      </div>
     
      
      
    </div></div>
  </div>
</div>
    </div>
  )
}

export default NewsCard
