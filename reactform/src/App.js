import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[formData, setFormData]= useState({firstName:"", lastName:"" ,email:"" , country:"India" , street:"" ,
    city:"", state:"" , zip:"" , comments:false , candidates:false , offers:false , pushNotifications :""
  })

  function changeHandler(event){
    const{name, value, checked , type}= event.target;
    setFormData((prev)=>{

      return{
      ...prev,
      [name]:type==="checkbox"?checked:value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }


  return (
      <div className=' flex flex-col items-center mt-2 w-[100vw] h-[100vh] '>
        <form onSubmit={submitHandler}  className='w-[100%] md:w-1/2 p-[4rem] shadow-lg '  >

          <label htmlFor='firstName' className=' text-lg font-bold' >First Name</label>
          <br/>
          <input type='text' placeholder='Ayush' id='firstName' name='firstName' 
          value={formData.firstName} onChange={changeHandler} className='outline w-[100%] rounded p-[5px] mt-[5px] mb-[15px] '></input>
          <br/>

          <label htmlFor='lastName'  className=' text-lg font-bold'>Last Name</label>
          <br/>
          <input type='text' placeholder='Rajput' id='lastName' name='lastName' 
          value={formData.lastName} onChange={changeHandler} className='outline w-[100%] rounded p-[5px] mt-[5px] mb-[15px]'></input>
          <br/>

          <label htmlFor='email'  className=' text-lg font-bold' > Email Address</label>
          <br/>
          <input type='text' placeholder='rajputayush694@gmail.com' id='email' name='email' 
          value={formData.email} onChange={changeHandler} className='outline w-[100%] rounded p-[5px] mt-[5px] mb-[15px]'></input>
          <br/>

          <label htmlFor='country'  className=' text-lg font-bold'>Country</label>
          <br/>
          <select id='country' name='country' value={formData.country} onChange={changeHandler} className='outline
          w-[100%] rounded p-[5px] mt-[5px] mb-[15px]'>
            <option>India</option>
            <option>United State</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
          <br/>

          <label htmlFor='street' className=' text-lg font-bold'> Street Address</label>
          <br/>
          <input type='text' placeholder='1234 Main st' id='street' name='street' 
          value={formData.street} onChange={changeHandler} className='outline w-[100%] rounded p-[5px] mt-[5px] mb-[15px]'></input>
          <br/>

          <label htmlFor='city' className=' text-lg font-bold'>City</label>
          <br/>
          <input type='text' placeholder='Kanpur' id='city' name='city' 
          value={formData.city} onChange={changeHandler} className='outline w-[100%] rounded p-[5px] mt-[5px] mb-[15px]'></input>
          <br/>

          <label htmlFor='state' className=' text-lg font-bold'>State/Province</label>
          <br/>
          <input type='text' placeholder='Uttar Pradesh' id='state' name='state' 
          value={formData.state} onChange={changeHandler} className='outline w-[100%] rounded p-[5px] mt-[5px] mb-[15px]'></input>
          <br/>

          <label htmlFor='zip' className=' text-lg font-bold'> Zip/Postal Code</label>
          <br/>
          <input type='text' placeholder='209749' id='zip' name='zip' 
          value={formData.zip} onChange={changeHandler} className='outline w-[100%] rounded p-[5px] mt-[5px] mb-[15px]'></input>
          <br/>
          <br/>

         <fieldset>
          <legend className=' text-lg font-bold'>By Email</legend>
          <div className='flex'>
            <input type='checkbox' name='comments' id='comments' checked={formData.comments} onChange={changeHandler}></input>
          <div className='mt-5 ml-1'>
           < label htmlFor='comments' className='font-semibold'>Comments</label>
           <p className='text-sm '>Get notified when someone posts a comment on a posting</p>
          </div>
          </div>

          <div className='flex'>
            <input type='checkbox' name='candidates' id='candidates'checked={formData.candidates} onChange={changeHandler}></input>
          <div  className='mt-5 ml-1'>
           < label htmlFor='candidates' className='font-semibold'>Candidates</label>
           <p  className='text-sm '>Get notified when candidate applied for a job </p>
          </div>
          </div>

          <div className='flex'>
            <input type='checkbox' name='offers' id='offers' checked={formData.offers} onChange={changeHandler}></input>
          <div  className='mt-5 ml-1'>
           < label htmlFor='offers' className='font-semibold'>Offers</label>
           <p  className='text-sm '>Get notified when candidate accepts or reject an offer</p>
          </div>
          </div>
         </fieldset>
         <br/>
         <br/>

         <fieldset>
          <legend  className=' text-lg font-bold'>Push Notifications</legend>
          <p  className='text-sm mb-3'>These are delivered via SMS to your mobile phone </p> 
         

          <input type='radio' id='pushEverything' name='pushNotifications' value="Everything" onChange={changeHandler}></input>
          <label htmlFor='pushEverything' className='font-semibold'> Everything</label>
          <br/>

          <input type='radio' id='pushEmail' name='pushNotifications' value="Same as email" onChange={changeHandler}></input>
          <label htmlFor='pushEmail' className='font-semibold'> Same as Email</label>
          <br/>

          <input type='radio' id='pushNothing' name='pushNotifications' value="No push Notifications" onChange={changeHandler}></input>
          <label htmlFor='pushNothing' className='font-semibold'> No push Notifications</label>
         </fieldset>
         <br/>

         <button className='bg-blue-500 text-white font-bold rounded py-2 px-4 hover:bg-blue-700'>Save</button>
 
        </form>
      </div>
  );
}

export default App;
