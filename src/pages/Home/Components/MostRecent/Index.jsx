import React, { useEffect, useRef, useState } from 'react';

// import parseRelative from 'date-fns';
import axios from 'axios';
// import { formatRelative, parseISO } from 'date-fns';
// import {format} from 'date-fns';
import { CircularProgress } from '@mui/material';
import  JobCard  from '../JobCard/Index';
import SkillTag from '../SkillTag/Index';
import { MdWorkHistory } from 'react-icons/md';


function Index() {

    const [jobs, setJobs] = useState([]);
    // const [creationTime , setCreationTime]= useState([]);
    const [errors, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
     

    const getJobs= async ()=>{
        
        try {
          setIsLoading(true)
          const response = await axios.get(`http://localhost:3000/jobs?_sort=createdAt&_order=desc`)
          if (response) {
            setJobs(response.data)
            console.log(response.data)
          }else{
            throw new Error("Sorry something went wrong")
          }
        } catch (error) {
          setError(error.message)
        }finally{
          setIsLoading(false)
        }
      }
    
    useEffect(() => {
        getJobs();
      },[])
        
  return (
    <div style={{width:"100%"}}>
    <div style={{width:'92.6%'}}> 

      
        {errors && <p>{errors}</p>} 
        {isLoading && <CircularProgress/>} 

        
      <p style={{marginLeft:'2em' ,display:'flex' , alignItems:'center' , gap:'5px'}}> 
      <MdWorkHistory size={20} color='darkblue'/> {jobs.length} Jobs Found
      </p>

      {jobs.length > 0 && 
      
          jobs.map(job => (
            <JobCard key={job.id}
              {...{job}}
              />
              ))}
      </div>
  </div>
  )
}

export default Index