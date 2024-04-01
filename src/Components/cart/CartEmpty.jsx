import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import emptybag from "../../../src/assets/emptybag.png";

const CartEmpty = ({onCartToggle} ) => {
  return (
    <>
    <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
      <img src={emptybag} alt="emptybag"  className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'/>

      <button type='button' onClick={onCartToggle} className=' flex items-center justify-center button-theme  bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg text-sm px-5 font-semibold active:scale-110  text-slate-900 py-2 gap-3 '>
        <ArrowLeftIcon className='w-5 h-5'/>
        <span>Back To Nike Store</span>
      </button>
    </div>
    </>
  )
}

export default CartEmpty