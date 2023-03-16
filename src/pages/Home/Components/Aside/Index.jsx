import React from 'react';

import {Aside , Profile ,  Item , Box} from './style';

import avatar from '../../../../assets/images/avatar.jpg';
import { useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { AiOutlineEdit } from 'react-icons/ai';


function Index() {
    const navigate = useNavigate()

    const goToProfile = () =>{
        navigate('./profile');
    }
  return (
    <Aside>
        <Box style={{marginTop:'1em' , borderBottom:'none'}}>
            <img src={avatar} width="25%" height={"50%"} style={{cursor:'pointer', borderRadius:'40%'}} alt="avatar" onClick={goToProfile}/>
            <h2 onClick={goToProfile} style={{textDecoration:'underline' , cursor:'pointer',
             margin:0 , padding:0}}>
                Mohammed N.</h2>
            <p>Full Stack Developer</p>
        </Box>

        <Profile>
            <p>Profile Completness:</p>
            <span>
            {/* <LinearProgress determinate disapled value={100} /> */}
            100%
            </span>
         
        </Profile>

        <Box>
            <Item>
                <span>Availability Badge <AiOutlineEdit size={20} style={{backgroundColor:'lightblue', borderRadius:50}}/></span>
                <span className='info'>Not Available - OFF</span>
            </Item>

            <Item>
                <span>Hours per week <AiOutlineEdit size={20} style={{backgroundColor:'lightblue', borderRadius:50}}/></span>
                <span className='info'>Not Available for new work</span>
            </Item>

            <Item>
                <span>Profile Visibility <AiOutlineEdit size={20} style={{backgroundColor:'lightblue' , borderRadius:50}}/></span>
                <span className='info'>Public</span>
            </Item>

            <Item>
                <span>Job Preference <AiOutlineEdit size={20} style={{backgroundColor:'lightblue' , borderRadius:50}}/></span>
                <span className='info'>No preference set</span>
            </Item>
        </Box>
        
        <Box style={{display:'flex' , alignItems:'flex-start' , padding:'1em 0em '}}>
            <h4 style={{padding:0 , margin:"0 1em"}}>My Categories</h4>
            <ul style={{listStyle:'none' , color:'darkblue' , cursor:'pointer'}}>
                <li>Web Development</li>
                <li>Front End</li>
                <li>React JS</li>
                <li>Node JS</li>
            </ul>
        </Box>

    </Aside>
  )
}

export default Index