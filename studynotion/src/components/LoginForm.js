import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
 

const LoginForm =({setIsLoggedIn})=>{

    const[formData, setFormData]= useState({email:"", password:""});

    const[showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
        

    function changeHandler(event){

        

        setFormData((prev)=>{

            return{
            ...prev,
           [event.target.name]:event.target.value

            }
            
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")



    }
    return (
      
           <form onSubmit={submitHandler} className="flex flex-col w-full  mt-6">
            <label htmlFor="email" className="w-full">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem] ">
                    Email Address <sup className="text-pink-200"> *</sup>
                </p>
            </label>
            <input required type="email" id="email" placeholder="Enter email address" name="email" 
            value={formData.email} onChange={changeHandler} className="bg-slate-800 rounded-[0.5rem] text-white w-full p-[12px] mb-5 "></input>

            <label htmlFor="password" className="w-full relative" >
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem] ">Password
                    <sup className="text-pink-200"> *</sup>
                </p>
                
           
            <input required type={showPassword?("text"):("password")} id="password" name="password" 
            placeholder="Enter Password" value={formData.password} onChange={changeHandler} className="bg-slate-800 rounded-[0.5rem] 
            text-white w-full p-[12px] "></input>

            <span className="absolute right-3 top-[38px] cursor-pointer"
             onClick={()=>setShowPassword((prev)=>!prev)}> {/* NEgation ho jayyga*/}
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
             </label>


            <Link to="#">
            <p className="text-xs mt-1 text-blue-300 max-w-max ml-auto">
                Forgot Password
            </p>
            </Link>

            <button className="bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-8 hover:bg-yellow-300">Sign In</button>

           </form>
        
    )
}

export default LoginForm;