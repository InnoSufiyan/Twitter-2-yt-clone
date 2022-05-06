import React, { SVGProps } from 'react'

interface Props {
    Icon : (props: SVGProps<SVGSVGElement>) => JSX.Element
    title : string
}

function SideBarRow({Icon, title}: Props) {
  return (
    <div>
        <Icon />
        <h1>{title}</h1>
    </div>
  )
}

export default SideBarRow