import React from 'react';
import { MdLocationOn, MdModeEdit, MdPlaylistAdd, MdVerified } from 'react-icons/md';

import styled from 'styled-components';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


import avatar from '../../../../assets/images/avatar.jpg';
import landing from '../../../../assets/images/landing.jpg';

const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* align-items: center; */
    justify-content: space-between;
    width: 100%;
    /* height: 6em; */

    .info{
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    .name{
        font-weight: bolder;
        margin-bottom: 0.5em;
    }

    img{
        /* border-radius: 50%; */
        /* height: 30%; */
    }
    .btns{
        display: flex;
        flex-direction: row;
        gap:0.5em;
    }

    .data{
        display: flex;
        flex-direction: row;
        margin-left: 2em;

        span{
            height: 50%;
        }

        p{
            max-width: 70%;
        }
    }

    button{
        cursor: pointer;
        /* height: 60%; */ 
    }

    #see{
        padding: 0.6em 2em;
        border-radius: 15px;
        border: 1px solid darkblue;
        background-color: white;
        color: darkblue;
        font-weight: bold;
    }

    #set{
        padding: 0.6em 2em;
        border-radius: 15px;
        border: 1px solid white;
        background-color:darkblue ;
        color: white;
        font-weight: bold;
    }
 
    span{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: fit-content;
        padding: 0;
    margin: 0;

    }

    .boxOne{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1em 0;
        align-items: center;
        border-bottom: 1px solid lightgray;
        padding-bottom: .5em;
    }

    .boxTwo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 1em 0;
        align-items: center;
        border-bottom: 1px solid lightgray;
        padding-bottom: .5em;
    }

    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 93%;
    }

    h2,h3{
        padding: 0;
        margin: 0;
    }

    #land{
        border: none;
        width: 60%;
    }

    .circle{
        padding: 1em;
        border: 1px solid #E4E4E4;
        border-radius: 50%;
        margin-left: 0.5em;
    }

`;

function index() {
  
  return (
    <User>
       
       <div className='boxOne'>
            <div className='info'>
            <img src={avatar} alt="avatar" width={"9%"} />
                <div style={{display:'flex' , flexDirection:'column' , width:'30%'}}>
                    <span className='name'>Mohammed N.<MdVerified color='blue'/></span>
                    <span><MdLocationOn/>Gaza, Palestine</span>
                </div>
            </div>

            <div className='btns'>
                <button id='see' > See Public View</button>
                <button  id='set'> Profile Settings</button>
            </div>

        </div>

        <div className='boxTwo'>
            <div className='title'>
                    <span>  
                        <h2>Full Stack Developer</h2> 
                        <span className='circle'>
                             <MdModeEdit size={20} color='blue'/>
                        </span>
                     </span>
                    <span> 
                        <h3> %25.00</h3> 
                        <span className='circle'>
                             <MdModeEdit size={20} color='blue'/>
                        </span>
                      </span>
            </div>

            <div className='data'>
                <p>
                I am a Software Developer that designs and builds computer programs that power mobile devices, desktop computers, and even cars. They not only identify user needs 
                but also create new applications for any given market while making improvements based on feedback from users.
                </p>

                        <span className='circle'>
                             <MdModeEdit size={20} color='blue'/>
                        </span>
            </div>
        </div>

        {/* <div className='BoxThree'>
            <h3>Work history</h3>   for later
        </div> */}


        <div>
           <span>
            <h3>Portfolio</h3> 
                <span className='circle'><MdPlaylistAdd size={25} color='darkblue'/></span>
            </span>
            <div style={{display:'flex' , flexDirection:'column' , margin:'2em 1em'}}>
                <img src={landing} id="land" alt="project"/>
                <span>Landing Page</span>
            </div>
                
        </div>

        <div>
            <h3>Skills</h3>
            <br></br>
            <FixedTags/>
        </div>


           

          
    </User>
  )
}

export default index;




function FixedTags() {

    const skills = [
        { title:"CSS"},
        { title:"HTML"},
        { title:"JS"},
        { title:"ReactJS"},
        { title:"WebDevelopment"},
        { title:"NodeJS"},
        { title:"Express"},
        { title: "CSS"},
        { title:"HTML"},
        { title:"JS"},
        { title:"ReactJS"},
        { title: "NodeJS"},
        { title:"Express"},
       { title: "WebDevelopment"},
      ];
    
  const fixedOptions = [skills[6]];
  const [value, setValue] = React.useState([...fixedOptions, skills[13]]);




  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      options={skills}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Fixed tag" placeholder="Favorites" />
      )}
    />
  );
}