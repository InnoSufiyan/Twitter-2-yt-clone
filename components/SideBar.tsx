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
        <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>

            <img className='h-10 w-10 m-3' src="https://links.papareact.com/drq" alt="" />
            <SideBarRow title="Home" Icon={HomeIcon} />
            <SideBarRow title="Explore" Icon={HashtagIcon} />
            <SideBarRow title="Notifications" Icon={BellIcon} />
            <SideBarRow title="Messages" Icon={MailIcon} />
            <SideBarRow title="Bookmarks" Icon={BookmarkIcon} />
            <SideBarRow title="Lists" Icon={CollectionIcon} />
            <SideBarRow title="Sign In" Icon={UserIcon} />
            <SideBarRow title="More" Icon={DotsCircleHorizontalIcon} />
        </div>
    )
}

export default SideBar