import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ChatIcon from '@mui/icons-material/Chat';
import WifiIcon from '@mui/icons-material/Wifi';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
export default function Sidebare() {
    const [open ,  setOpen]=useState(false)
  return (
    <div className='flex'>
        <div className={ ` p-5 pl-8 relative ${open ? ' w-24':'w-72' } h-screen bg-black  text-white transition-all ease-in duration-500`}>
    <ArrowForwardIosIcon onClick={()=>setOpen(!open)} className={` ${!open && " rotate-180"} border-solid border-2 border-indigo-600  bg-white rounded-full text-black p-1 absolute top-9 right-[-10px]`}/>
    <ul>
    <li className=' flex items-center '>
    <img className={`  w-10 rounded-full h-10 mr-8 `} src="./image/f.png" alt="" />
    <span className=  {`  font-medium text-xl ${open && 'scale-0'} `} >Laouzi</span>
    </li>
    </ul>
    <ul className=' mt-5 ml-5'>
        <li className=' my-5  flex items-center '>
            <HomeIcon className=' mr-8 text-4xl'/>
            <span className={`${open && ' hidden'}text-xl`}>Home</span>
        </li>
        <li className=' my-5  flex items-center '>
            <SupervisorAccountIcon className=' mr-8 text-4xl'/>
            <span className={`${open && ' hidden'}text-xl`}>Freind</span>
        </li>
        <li className=' my-5  flex items-center '>
            <ChatIcon className=' mr-8 text-4xl'/>
            <span className={`${open && ' hidden'}text-xl`}>Chate</span>
        </li>
        <li className=' my-5  flex items-center '>
            <WifiIcon className=' mr-8 text-4xl'/>
            <span className={`${open && ' hidden'}text-xl`}>Wifi</span>
        </li>
        <li className=' my-5 flex items-center '>
            <MiscellaneousServicesIcon className='  mr-8 text-4xl'/>
            <span className={`${open && ' hidden'}text-xl`}>Setting</span>
        </li>
    </ul>

</div>
<div>home page</div>
</div>
  )
}
