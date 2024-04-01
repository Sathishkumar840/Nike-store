import React from 'react'
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { setAddItemToCart } from '../../app/CartSlice';

const Item = ({ ifExists, id, color, shadow, title, text, img, btn, rating, price }) => {
  // console.log(id);
  const dispatch=useDispatch();
  const onAddToCart=()=>{
    const item ={id,title,text,img,color,shadow,price};
    dispatch(setAddItemToCart(item));

  }

  const onCartToggle = ()=>{
    dispatch(setOpenCart({
        cartState:true
    }))
   }
  return (
    <>
      <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center  
       ${ifExists ? 'justify-items-start' : 'justify-items-center'} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
        <div className={`grid items-center ${ifExists ? 'justify-items-start':'justify-items-center'}`}>
          <h1 className='text-slate-200 text-xl md:text-base font-medium-sm font-normal'>{title}</h1>
          <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal '>{text}</p>

          <div className='flex items-center justify-between w-28 my-2'>
            <div className='bg-white flex items-center  px-1 rounded'><h1 className='text-black text-sm font-medium blur-effect-theme '>${price}</h1></div>
            <div className='flex items-center'><StarIcon className='icon-style w-5 h-5 md:w-4 h-4' /><h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1></div>
          </div>


          <div className='flex items-center gap-4'>
            <button type='button' className='bg-white blur-effect-theme button-theme p-0.5 shadow shadow-sky-200' onClick={()=>onAddToCart()}><ShoppingBagIcon className='icon-style  text-slate-900' /></button>
            <button type='button' onClick={()=>{ onAddToCart(); onCartToggle();}} className='bg-white blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 py-1 px-2 text-sm text-black'>{btn}</button>
          </div>
        </div>
        <div className={`flex items-center ${ifExists ? 'absolute top-5 right-1':'justify-center'}`}>
          <img className={`h-36 w-64 transitions-theme hover:-rotate-12 ${ifExists ?'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' :'h-36 w-64'}`} src={img} alt="img" />
        </div>
      </div>
    </>
  )
}

export default Item