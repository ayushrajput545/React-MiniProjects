 
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import {apiUrl , filterData } from "./data"; // import filterdata and apiurl from data.js
import {useState , useEffect} from "react";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";
 


 

const App = ()=>{



  const [courses, setCourses] = useState(null);
  const[loading , setLoading] = useState(true);  // Set loadding until api call done
  const[category, setCategory] = useState(filterData[0].title) // initially all wala select rahega


  async function fetchData(){

    setLoading(true);  // Show loading

    try{
         let response = await fetch(apiUrl);
         let output = await response.json();

         setCourses(output.data);  // Copying all the data in courses ; courses = output


    }
    catch(error){

      toast.error("Network me koi dikkat hai");

    }

    setLoading(false);   // Remove loading when we recive data
  }

  // Now call this function in useState

  useEffect(()=>{
        fetchData();
  },[])
  
  

  return (
      <div className='min-h-screen flex flex-col bg-slate-600'> 
        
      <div>
        <Navbar/>
      </div>

        

         <div>
       <Filter filterData={filterData} category={category} setCategory={setCategory} />    {/* Now we use filterData in filter by recieving it as a prop*/}
      </div>

      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)     // If loading True then show spinner otherwise show cards
        }
      </div>

      </div>

     

        
       
  );
};

export default App;
