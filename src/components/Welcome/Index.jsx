import React, { useEffect, useRef, useState } from 'react';
import { MdMargin } from 'react-icons/md';

import styled from 'styled-components';

import innerLogo from '../../assets/images/logo.png';

const Welcome = styled.div`
    width:100%;
    height: 2.5%;
    border: 1px solid ${(porps)=>porps.theme.colors.border};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2.9em 0;
    h1,h2,h3{
        padding: 0;
        margin: 0;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    
    h1{
        font-size: 32px;
    }

    img{
        width: 15%;
        background-color: white;
        user-select: none;
    }
`;

const Time = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;


function Index() {
    // const [greet , setGreet]=useState("");
    const [hours , setHours]=useState("");
    const [day , setDay]=useState("");
    const [currentMonth , setCurrentMonth]=useState("");
    const [today , setToday] = useState(0); 

    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const timeElapsed = Date.now();
    const myDate = new Date();
    let dayTime=useRef("");
        //to decide the time of the day           
        if (hours < 12) {
            dayTime = 'Morning';
        
        } else if (hours >= 12 && hours < 17) {
            dayTime = 'Afternoon';
        
        } else {
            dayTime = 'Evening';
        
        }
    
    useEffect(()=>{
        setToday(new Date(timeElapsed).getDate());
        setHours(myDate.getHours());
        setCurrentMonth(MONTHS[myDate.getMonth()]);
        setDay(DAYS[myDate.getDay()]);
    } , [])
    

  return (
    <Welcome>
        <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , alignItems:'center' , margin:'0 2em'}}>
            <Time>
                <h2>{currentMonth}, {day} {today}th</h2>
                <h1>Good {dayTime}, Mohammed N.</h1>
            </Time>
            <img src={innerLogo} alt=""/>
        </div>
    </Welcome>
  )
}

export default Index;