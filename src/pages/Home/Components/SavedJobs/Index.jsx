import React, { useEffect, useState } from 'react'


import axios from 'axios';
import {API_URL} from '../../../../config/api';
import Circular from '../../../../components/Progress';
import { useJobContext } from '../../../../contexts/JobContext';
import JobCard from '../JobCard/Index';
import SkillTag from '../SkillTag/Index'

function Index() {

  const [saved, setSavedJobs] = useState([]);
    const [errors, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const getSavedJobs= async ()=>{
        setIsLoading(true)
        try {
          const response = await axios.get(/*env */ `${API_URL}savedJobs`)
          // console.log(response)
          if (response) {
            setSavedJobs(response.data)
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
      getSavedJobs()
      }, [])
  // const { state } = useJobContext();

  return (
    <div style={{width:"100%"}}>
    <div style={{width:'92.6%'}}>       
        {errors && <p>{errors}</p>} 
        {saved.length===0  ? 'No Jobs Saved' : <h3 style={{marginLeft:'2em'}}>|{saved.length}|</h3>}
        {isLoading && <Circular/>} 


        {/* {
       state?.jobs?.map(job => (
              <JobCard key={job.id}
                {...{ job }}
                />
                ))} */}

        {saved?.map(job => (
              <JobCard key={job.id}
                {...{ job }}
                />
              ))}
       </div>
    </div>
  )
}

export default Index;