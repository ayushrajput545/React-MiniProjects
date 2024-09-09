import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {


  const  {cart}= useSelector((state)=>state);
  console.log("Printing cart data");
  console.log(cart);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price ,0));
  }, [cart]);

  return (
    <div className=''>
        {
          cart.length>0?
          (
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center ml-4">

              <div className='flex flex-col  max-w-[40rem] gap-[5rem] mt-5'>
                {
                  cart.map((item,index)=>{
                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                  })
                }
              </div>

              
              <div className='  mt-5  flex flex-col h-[100%] justify-between '> 

                <div className=''>

                <div className='text-green-700 text-md font-bold uppercase '>Your Cart</div>
                <div className='text-green-700 text-4xl font-bold uppercase'>Summery</div>
                <p className='py-4'><span className='font-bold '>Total Items: {cart.length}</span></p>

              </div>


              <div className=' font-bold space-y-2 mt-[19rem]'>
                <p>Total Amount: <span className='font-extrabold'>${totalAmount}</span> </p>
                <button className='bg-green-700 rounded-md text-white px-24 py-2 mx-auto '>Checkout Now</button>

              </div>
              </div>
              

            </div>
          )
          :
          (
            <div className='flex flex-col justify-center items-center h-screen gap-3 font-bold'>
              <h1> Your cart is empty!</h1>
              <Link to="/">
              <button className='bg-green-700 rounded-md text-white px-6 py-2 mx-auto '>Shop Now</button>
              </Link>
            </div>
          )
        }
    </div>
  )
}

export default Cart