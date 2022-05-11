import React, { SVGProps } from 'react'

interface Props {
    Icon : (props: SVGProps<SVGSVGElement>) => JSX.Element
    title : string
}

function SideBarRow({Icon, title}: Props) {
  return (
    <div className='flex cursor-pointer max-w-fit items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group'>
        <Icon className='h-6 w-6 hidden md:inline-flex' />
        <p className='group-hover:text-twitter text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SideBarRow