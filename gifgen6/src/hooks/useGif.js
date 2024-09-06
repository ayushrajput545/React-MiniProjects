import { useEffect, useState } from "react"
import axios from 'axios';

const API_KEY = 'WSfiW3dML87CpGZgqgK34vk4YH7PijTG'
 
const randomMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif= (tag)=>{

    const[gif,setGif]= useState('');
    const [loading, setLoading]= useState(false);
    const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    
    

  async  function fetchData(tag){
        setLoading(true);
       

        const {data} = await axios(tag?tagMemeurl:randomMemeUrl);
        console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
 
    }

    useEffect((tag)=>{
        fetchData('car');
    },[]) 

    return{gif ,loading , fetchData};

}

export default useGif;