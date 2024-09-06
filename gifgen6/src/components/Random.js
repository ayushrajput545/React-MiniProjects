import { useEffect, useState } from "react"
import axios from 'axios';
import Spinner from './Spinner';
import useGif from "../hooks/useGif";
 


const API_KEY = 'WSfiW3dML87CpGZgqgK34vk4YH7PijTG'

const Random = ()=>{

//     const[gif,setGif]= useState('');
//     const [loading, setLoading]= useState(false);
    

//   async  function fetchData(){
//         setLoading(true);
//         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

//         const {data} = await axios(url);
//         console.log(data);
//         const imageSource = data.data.images.downsized_large.url;
//         setGif(imageSource);
//         setLoading(false);
 
//     }

//     useEffect(()=>{
//         fetchData();
//     },[])

     const{gif , loading , fetchData} = useGif();
   
    return (
        <div className="w-1/2  bg-green-400 mx-auto rounded-lg border border-black flex  flex-col  items-center
        gap-y-5 mt-[15px] ">

            <h1 className="text-xl underline font-bold uppercase mt-[15px] ">A Random gif</h1>

            {
                loading?(<Spinner/>):( <img src={gif} width={350} />)
            }

           

            <button onClick={()=>fetchData()}className="w-9/12 text-lg py-2 rounded-lg bg-white mb-5">
               Generate
            </button>
     
        </div>
    )
}

export default Random