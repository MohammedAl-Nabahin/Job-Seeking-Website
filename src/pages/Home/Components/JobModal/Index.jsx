import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdKeyboardArrowLeft, MdLocationOn, MdOutlineLink, MdOutlinePsychology, MdPriceChange } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { useJobContext } from '../../../../contexts/JobContext';
import SkillTag from '../SkillTag/Index';


const JobModal = styled.div`
        width: 65%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #f0f2f2;
        color: ${(props)=>props.theme.colors.text};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        z-index: 100;
`;


const DataBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 0.2em;
    padding: 1em 0;
    border-bottom: 1px solid gray;
    justify-content: center;
    align-items: flex-start;

    h1{
        margin: 0;
        padding: 0;
    }
    .price{
        display: flex;
        flex-direction: row;
        gap: 1em;
    }
`;

export const Skills = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.2em;
    margin: 0.5em 0;

`


function Index({job , id , onBlur}) {

    
  const [saved , setSaved] = useState(false);
    const navigate = useNavigate();


  const flip =()=>{
      saved === true ?  setSaved(false)  :  setSaved(true);
  }

const {
    state: { jobs },
    saveJob,
    removeJob,
  } = useJobContext();

  const isExist = () => jobs.find((item) => item.id === job.id);

  const toggleJob = () => {
    // console.log("clicked")
    isExist() ? removeJob(job.id) : saveJob(job);
    isExist() &&  setSaved(true) 
  };
  

  return (
    <JobModal onBlur={onBlur}>
        <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , width:'95%' , marginTop:'1em'}}>
            <span onClick={onBlur}><MdKeyboardArrowLeft size={50}/></span>

            <Link style={{marginBottom:'-1em' , paddingTop:'0.8em'}} to={`/jobdetails/${job.id}`}>
                <span style={{marginBottom:'-1em' , paddingTop:'1em'}}><MdOutlineLink color='darkblue'/> open Job in a new Window</span>
            </Link>
        </div>

        <div style={{display:'flex' , flexDirection:'row' , width:'95%' , height:'80%' , border:'1px solid #E4E4E4' ,
         backgroundColor:'lightblue' , borderRadius:'15px' , paddingBottom:'50px'}}>
            <div style={{display:'flex' , flexDirection:'column' ,justifyContent:'center'
            ,alignItems:'center' ,  width:'80%' , borderRight:'1px solid #E4E4E4'}}>
                <DataBox>
                    <h1>{job.title}</h1>
                    <h3 style={{color:'darkblue' , display:'flex' , flexDirection:'row' , padding:0 , margin:0}}>{job.topics.map((item , index)=>
                            <ul >
                                <li key={index}>
                                     {item}
                                </li>
                            </ul>
                            
                    )}</h3>
                    <p>{job.posted}</p>
                    <span style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}><MdLocationOn/>{job.location}</span>
                </DataBox>

                <DataBox>
                    <p>{job.info}</p>
                </DataBox>

                <DataBox className='price'>
                    <span><MdPriceChange/>{job.price}</span>
                    <span><MdOutlinePsychology/>{job.level}</span>
                </DataBox>

                <DataBox>
                    Skills and Experties
                <Skills>
                    {job.topics.map((item , index)=>
                            <SkillTag key={index} skill={item}/>
                            )}           
                    </Skills>
                </DataBox>
            </div>
            <div style={{display:'flex' , flexDirection:'column' ,justifyContent:'center'
            ,alignItems:'center' ,  width:'20%' , borderRight:'1px solid #E4E4E4'}}>
                <DataBox>
                    <button style={{padding:'1em 2em' , display:'felx' , justifyContent:'center' , alignItems:'center'}}
                    onClick={()=>{toggleJob(); flip();}}
                    >
                        <AiOutlineHeart style={{borderColor:'darkblue'}}/> Save Job
                    </button>

                    <button style={{padding:'1em 2.3em' , display:'felx' , justifyContent:'center' , alignItems:'center' , 
                    color:'white', backgroundColor:'darkblue'
                    }}>
                        Apply Now
                    </button>
                </DataBox>

                <DataBox>
                    <p>Proposals: {job.proposals}</p>
                </DataBox>

                <DataBox>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                         Quia fuga, sed ad, totam error dolores, necessitatibus earum eligendi a
                         liquam ducimus pariatur minima veritatis assumenda ratione odit quibusdam. 
                         Consectetur, itaque optio?
                    </p>
                </DataBox>

            </div>
        </div>
    </JobModal>
  )
}

export default Index