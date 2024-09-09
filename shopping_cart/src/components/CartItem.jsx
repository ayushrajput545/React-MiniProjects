import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {

    const dispatch = useDispatch();

    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

    
    

  return (

    <div>

        <div className='flex  w-[85%]   justify-between  border-b-2 gap-[3rem] '>

            <div className=' h-[200px] w-[180px] mb-3'>
                <img src={item.image} alt="" className=' h-full w-full'/>
            </div>

            <div className='w-1/2 flex flex-col gap-5 mb-3 max-w-11/12'>
                <h1 className='font-bold'>{item.title}</h1>
                <h1 className='text-[15px] font-semibold'>{item.description.split(" ").slice(0,13).join(" ")+ "..."}</h1>

                <div className='flex justify-between pr-3  '>
                    <p className='text-green-600 font-semibold'>${item.price}</p>
                    <div onClick={removeFromCart} className='bg-red-300 rounded-full p-2 cursor-pointer'>
                    <MdDelete className='text-red-800' />
                    </div>
                </div>

            </div>

           
        </div>
         {/* <div className='w-full h-2 bg-slate-500'></div> */}
    </div>
  )
}

export default CartItem