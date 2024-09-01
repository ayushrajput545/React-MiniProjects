import React from "react";
import { FaQuoteLeft , FaQuoteRight} from "react-icons/fa";
 

const Card =(props)=>{

    let review = props.review;

    return(

        <div className="flex flex-col md:relative">

           <div className="absolute z-[10] top-[-7rem] mx-auto ">
            <img src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-[25] " ></img>
            <div className="rounded-full w-[140px] h-[140px] bg-violet-500 absolute top-[-6px] z-[-10] left-[10px] "></div>                       {/*voilet color circle behind the image */}
           </div>



           <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
            <p className="text-violet-300 uppercase text-sm">{review.job}</p>

           </div>

           

           <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft/>
           </div>

           <div className="text-center text-slate-500 mt-4">
            {review.text}
           </div>

           < div className="text-violet-400 mx-auto mt-5">
            <FaQuoteRight/>
           </div>

        </div>
    )
}

export default Card;
