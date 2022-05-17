import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function TweetBox() {
  const [input, setInput] = useState<string>('')





  return (
    <div className='space-x-2 flex p-5'>
      <ToastContainer />
      <img className='h-14 w-14 rounded-full object-cover mt-4' src="https://links.papareact.com/gll" alt="" />
      <div className='flex flex-1 items-center pl-2'>
        <form className='flex flex-1 flex-col'>
          <input type="text" placeholder="what's in your mind" className='h-24 w-full text-xl outline-none placeholder:text-xl' value={input} onChange={(e) => setInput(e.target.value)} />
          <div>
            <div className='flex items-center'>
              <div className='flex flex-1 space-x-2 text-twitter'>
                <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                <SearchCircleIcon className='h-5 w-5' />
                <EmojiHappyIcon className='h-5 w-5' />
                <CalendarIcon className='h-5 w-5' />
                <LocationMarkerIcon onClick={() => toast.success("Wow so easy!")} className='h-5 w-5' />
              </div>
              <button disabled={!input} className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>Tweet</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
