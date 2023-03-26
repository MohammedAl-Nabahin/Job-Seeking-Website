import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {API_URL} from '../../../../config/api';
import Circular from '../../../../components/Progress';
import JobCard from '../JobCard/Index';
import { MdWorkHistory } from 'react-icons/md';


function Index({job}) {
    const [alljobs, setJobs] = useState([]);
    const [errors, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const getJobs= async ()=>{
        setIsLoading(true)
        try {
          const response = await axios.get(/*env */ `${API_URL}jobs?_limit=20`)
          if (response) {
            setJobs(response.data)
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
        getJobs()
      }, [])

 
    
    
  return (
    <div style={{width:"100%"}}>
      <div style={{width:'92.6%'}}> 

      <p style={{marginLeft:'2em' ,display:'flex' , alignItems:'center' , gap:'5px'}}> 
      <MdWorkHistory size={20} color='darkblue'/> {alljobs.length} Jobs Found
      </p>
        
          {errors && <p>{errors}</p>} 
          {isLoading && <Circular/>} 

        {alljobs.length > 0 && 
        
        alljobs.map(job => (
              <JobCard key={job.id}
                {...{ job }}
                />
                ))}
        </div>
    </div>
  )
}

export default Index;