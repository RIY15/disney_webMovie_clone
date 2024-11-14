import React from 'react'
import PropTypes from 'prop-types'

function HeaderItem({ name, Icon, className }) {
  return (

    <div className={`relative flex items-center gap-2 font-semibold cursor-pointer group mb-2 ${className}`}>
      <Icon className="md-[10px] lg:text-[18px]"/>
      <h2 className=' md:text-[10px] lg:text-[18px]'>{name}</h2>
      <div className="absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-300 ease-in-out group-hover:w-full bg-black"></div>
    </div>
  )
}

HeaderItem.propTypes = {
  name: PropTypes.string.isRequired, // name harus berupa string dan wajib diisi
  Icon: PropTypes.elementType.isRequired, // Icon harus berupa komponen React (fungsi/elemen) dan wajib 
  className: PropTypes.string
}

export default HeaderItem
