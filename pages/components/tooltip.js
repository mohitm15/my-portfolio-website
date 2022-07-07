import React from 'react'

const Tooltip = ({techname}) => {
  return (
    <div className="bg-purple-100 absolute text-purple-900 text-xsm p-1 rounded-md ring-1 ring-purple-900 z-10 group-hover:block hidden mt-2 transition-transform">
        {techname}
    </div>
  )
}

export default Tooltip;