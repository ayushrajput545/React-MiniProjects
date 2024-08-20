
import React from 'react';
import Card from './Card';
import { useState } from 'react';


const Cards = (props)=>{

    let courses = props.courses;
    const[likedCourses , setLikedCourses] = useState([]);  // Initially no likedcourses ; empty error
    let category = props.category;

    //Converting Original into array so that we applied map on it

    function getCourses(){

        if(category=== "All"){
                 let allCourses = [];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            })
        })

         
        return allCourses;
        }
        else{
            return courses[category];
        }
   
        
    }

    

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
             
            {
                getCourses().map((course)=>{
                   return <Card key={course.id} course={course} 
                   likedCourses={likedCourses} setLikedCourses={setLikedCourses} />  // One card recieve only one card data

                })
            }

            
            
            
              
        </div>
    )


}
export default Cards;