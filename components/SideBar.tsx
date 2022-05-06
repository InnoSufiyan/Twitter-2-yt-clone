import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'
// import {
//     BellIcon,
//     HashtagIcon,
//     BookmarkIcon,
//     CollectionIcon,
//     DotsCircleHorizontalIcon,
//     MailIcon,
//     UserIcon,
//     HomeIcon
//   } from @heroicons/react/outline

function SideBar() {
    return (
        <div>

            <img className='h-10 w-10' src="https://links.papareact.com/drq" alt="" />
            <SideBarRow title="home" Icon={HomeIcon} />
        </div>
    )
}

export default SideBar