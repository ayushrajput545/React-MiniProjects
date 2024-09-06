import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn})=>{

    const[formData,setFormData]= useState({firstName:"" , lastName:"" , email:"" , password:"", confirmPassword:"" });

    const[showPassword, setShowPassword] = useState(false);
    const[confirmShowPassword, setConfirmShowPassword] = useState(false);
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
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match")
        }

        setIsLoggedIn(true);
        toast.success("Account Created")

        const accountData ={
            ...formData,
        };

        console.log(accountData);

        navigate("/dashboard");



    }

    return (
        <div >
             
 
               <form onSubmit={submitHandler} className="flex flex-col w-full  mt-6 gap-y-3">

                <div className="flex gap-x-5">

                     <label className="w-full">
                    <p  className="text-[0.875rem] text-white mb-1 leading-[1.375rem] ">First Name<sup  className="text-pink-200"> *</sup></p> 
                    <input required type="text" name="firstName" onChange={changeHandler} 
                    placeholder="Enter First Name" value={formData.firstName} className="bg-slate-800 rounded-[0.5rem] text-white w-full p-[12px]"></input>
                </label>

                <label className="w-full">
                    <p  className="text-[0.875rem] text-white mb-1 leading-[1.375rem] ">Last Name<sup className="text-pink-200"> *</sup></p> 
                    <input required type="text" name="LastName" onChange={changeHandler} 
                    placeholder="Enter Last Name" value={formData.LastName} className="bg-slate-800 rounded-[0.5rem] text-white w-full p-[12px]"></input>
                </label>

                </div>

                <label className="w-full">
                    <p  className="text-[0.875rem] text-white mb-1 leading-[1.375rem] ">Email Address<sup className="text-pink-200">  *</sup></p> 
                    <input required type="email" name="email" onChange={changeHandler} 
                    placeholder="Enter Email Address " value={formData.email} className="bg-slate-800 rounded-[0.5rem] text-white w-full p-[12px]"></input>
                </label>

                <div className="flex gap-5">

                <label className="w-full relative">
                    <p  className="text-[0.875rem] text-white mb-1 leading-[1.375rem] "> Create Password<sup  className="text-pink-200"> *</sup></p> 
                    <input required type={showPassword?("text"):("password")}  name="password" onChange={changeHandler} 
                    placeholder="Enter Password" value={formData.password} className="bg-slate-800 rounded-[0.5rem] text-white w-full p-[12px]"></input>
                    <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>setShowPassword((prev)=>!prev)}> {/* NEgation ho jayyga*/}
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                   </span>
                </label>


                <label className="w-full relative">
                    <p  className="text-[0.875rem] text-white mb-1 leading-[1.375rem] ">Confirm Password<sup  className="text-pink-200"> *</sup></p> 
                    <input required type={confirmShowPassword?("text"):("password")}  name="confirmPassword" onChange={changeHandler} 
                    placeholder="Confirm Password" value={formData.confirmPassword} className="bg-slate-800 rounded-[0.5rem] text-white w-full p-[12px]"></input>

                    <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>setConfirmShowPassword((prev)=>!prev)}> {/* NEgation ho jayyga*/}
                        {confirmShowPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                   </span>
                </label>
                </div>

                <button className="bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-8 hover:bg-yellow-300">Create Account</button>



               
                
               </form>
        </div>
    )
}

export default SignupForm;