import React, { useEffect, useState } from 'react';
import { MdLocationOn, MdVerified } from 'react-icons/md';

// import SaveButton from '../SaveButton/Index';

import SkillTag from '../SkillTag/Index';
import JobModal from '../JobModal/Index';

import {JobCard , JobInfo , JobPrice , JobTitle , PaymentAndLocation , Proposal , Skills , Container} from './style';
import { useJobContext } from '../../../../contexts/JobContext';

import styled from 'styled-components';
import { AiFillHeart, AiOutlineDislike, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import { API_URL } from '../../../../config/api';

const Save = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 20px;
    right: 20px;
    width: fit-content;
    gap: 0.5em;
    /* z-index: 5000; */
    z-index: 1;

    span , button{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .myIcon{
        width:3em;
        height:3em;
        border: 1px solid ${(props)=>props.theme.colors.main};
        border-radius: 50%;
    }

`;


function Index({onClick , job}) {

  const [isOpen, setIsOpen] = useState(false);
  const [savedJobs , setSavedJobs] = useState([]);
  const [saved , setSaved] = useState(false);

  const openModal = ()=>{
    setIsOpen(true);
  }



  const {
      state: { jobs },
      saveJob,
      removeJob,
    } = useJobContext();

    const getSaved = async () => {
      const res = await axios.get(`${API_URL}savedJobs`);

      if(res){
        setSavedJobs(res.data);
      }
    }
  
    const isExist = () => savedJobs.find((item) => item.id === job.id);

    const change = ()=>{
      isExist() ? setSaved(true) : setSaved(false);
    }
  
    const toggleJob = () => {
      isExist() ? removeJob(job.id) : saveJob(job);
    };
    
    useEffect(()=>{
      getSaved();
      change()
    },[savedJobs])

  return (
    <>
    <Container onBlur={() => setIsOpen(false)}>
    <Save>
          <span className='myIcon'><AiOutlineDislike  size={25}/></span>
              {/* <button > */}
          <span className='myIcon' onClick={()=>{
            toggleJob()
          }}>  {saved ?  <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/> } </span>
              {/* </button> */}
        </Save>
    <JobCard onClick={openModal}>
         
        <JobTitle>{job.title}</JobTitle>
        <JobPrice>{job.price}-{job.level} - Est. Time Less than 1 mounth - Posted {job.posted}</JobPrice>
        <JobInfo>{job.info}</JobInfo>
        <Skills>
          {job.topics.map((item , index)=>
                  <SkillTag key={index} skill={item}/>
                  )}           
        </Skills>
        <Proposal><p>Proposals :</p>{ job.proposals}</Proposal>
        <PaymentAndLocation>
        <span style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}><MdVerified color='blue'/>{job.payment}</span> - 
        <span style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}><MdLocationOn/>{job.location}</span></PaymentAndLocation>
    </JobCard>

    {isOpen && 
      <JobModal
      onBlur={() => setIsOpen(false)}
      {...{job}}
      
      />  }
      </Container>
    </>
  )
}

export default Index;