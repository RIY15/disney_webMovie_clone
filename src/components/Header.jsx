import React, { useState } from 'react'
import logo_Disney from './../assets/Images/disney.svg'
import {
    HiHome, 
    HiMagnifyingGlass, 
    HiStar,
    HiPlayCircle, 
    HiTv
} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import HeaderItem from './HeaderItem'

export default function Header() {

    const [toggle, setToggle] = useState(false)

    const menu = [
        { name: 'HOME', icon: HiHome },
        { name: 'SEARCH', icon: HiMagnifyingGlass },
        { name: 'WATCH LIST', icon: HiPlus },
        { name: 'ORIGINALS', icon: HiStar },
        { name: 'MOVIES', icon: HiPlayCircle },
        { name: 'SERIES', icon: HiTv }
    ]
    
    return (
        <div className='flex items-center justify-between mx-4'>
            <div className='flex gap-8'>
                {/* Logo */}
                <img src={logo_Disney} alt="Disney Logo" className='w-[80px] object-cover lg:w-[100px] md:w-[80px] mb-2' />
                
                <div className='mt-8'>
                {/* Menu untuk layar medium dan lebih besar */}
                <div className='hidden md:flex md:gap-4 gap-8'>
                    {menu.map((item, index) => (
                        <HeaderItem key={index} name={item.name} Icon={item.icon} />
                    ))}
                </div>

                {/* Menu untuk layar kecil */}
                <div className='md:hidden flex gap-4'>
                    {menu.map((item, index) => index<3&&(
                        <HeaderItem key={index} name={""} Icon={item.icon} />
                    ))}
                    <div className='md:hidden' onClick={() => {setToggle(!toggle)}}>
                      <HeaderItem name="" Icon={HiDotsVertical} />
                          {toggle ? (
                            <div className='absolute mt-3 border-[1px] border-black p-2 gap-2 bg-slate-600'>
                                {menu.map((item, index) => index > 2 && (
                                    <HeaderItem 
                                        key={index} 
                                        name={item.name} 
                                        Icon={item.icon} 
                                        className="text-white"
                                    />
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
                </div>

            </div>
            {/* Profile Image */}
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="User Avatar" className='w-10 mb-2'/>
        </div>
    )
}
