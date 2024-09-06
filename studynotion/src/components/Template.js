 import frameImage from '../assets/frame.png'
 import LoginForm from './LoginForm'
 import SignupForm from './SignupForm'
 import { FcGoogle } from "react-icons/fc";

const Template=({title , desc1 , desc2 , image , formtype , setIsLoggedIn})=>{
    return (
        <div className=' flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 '>
          
          {/* Form and description */}
          <div className='w-11/12 max-w-[450px] '>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
            <p className=' text-[1.125rem] leading-[1.625rem] mt-4 '>
                <span className='text-slate-100'>{desc1} </span>
                <br/>
                <span className='text-blue-200 italic'>{desc2} </span>
            </p>

            {formtype=="signup" ?
             (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className=' bg-slate-500 h-[1px] w-full '></div>
                <p className='text-slate-500 font-medium leading-[1.35rem] '>OR</p>
                <div className=' bg-slate-500 h-[1px] w-full'></div>
            </div>
 
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-slate-200 
            border border-slate-500 px-[12px] py-[8px] gap-x-2 mt-6 '>
                  <FcGoogle/>
              <p>Sign Up with Google</p></button>

          </div>

          {/* Background Image */}

          <div className=' relative w-11/12 max-w-[450px]  '>
            <img src={frameImage} alt='Pattern' width={558} height={584} loading='lazy' ></img>
            <img  src={image} alt='Students' width={558} height={490} loading='lazy'
            className='absolute -top-4 right-4'></img>
          </div>
        </div>
    )
}

export default Template;