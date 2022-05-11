import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Widgets() {
    return (
        <div className='col-span-2 mt-2 px-2 hidden lg:inline'>
            <div className='flex mt-2 items-center space-x-2 rounded-full bg-gray-100 p-3'>
                <SearchIcon className='h-5 w-5 text-gray-400' />
                <input type="text" placeholder='Search Twitter' className='flex-1 bg-transparent outline-none' />
            </div>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="SAfridiOfficial"
                options={{ height: 400 }}
            />
        </div>
    )
}
