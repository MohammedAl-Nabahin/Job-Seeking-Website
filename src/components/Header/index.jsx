import React from 'react';
import { Divider, Icon, IconButton, InputBase, Paper, Typography } from '@mui/material';
import {MdExpandMore, MdOutlineSearch , MdQuestionMark, MdSend , MdOutlineNotificationsNone} from 'react-icons/md';


//components
import Logo from '../Logo';

//style
import { Header , Box } from './style';
import Avatar from '../Avatar';

function Index() {
  return (
    <Header>
      <Box>
        <Logo/>

        <Typography className='through' variant='body1' id="work" sx={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:'0.3em'}}>
          Find Work 
          <Icon  sx={{alignSelf:"flex-start" , marginTop:'-2px'}}>
            <MdExpandMore/>
          </Icon>
        </Typography>

        <Typography className='through' variant='body1' sx={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:'0.3em'}}>
          MyJobs
          <Icon sx={{alignSelf:"flex-start" , marginTop:'-2px'}}>
            <MdExpandMore/>
          </Icon>
        </Typography>

        <Typography className='through' variant='body1' sx={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:'0.3em'}}>
          Reports 
          <Icon sx={{alignSelf:"flex-start" ,marginTop:'-2px' }}>
            <MdExpandMore/>
          </Icon>
        </Typography>

        <Typography className='through' variant='body1' sx={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:'0.3em'}}>
          Messages 
        </Typography>
      </Box>

      <Box>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 380  , 
          height:35, border:'1px solid #E4E4E4' , borderRadius:'25px'}}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <MdOutlineSearch />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search "
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          
            <Divider sx={{ height: 38, m: 1 }} orientation="vertical" />
              <p>Jobs</p>
            <Icon sx={{alignSelf:"center" , marginLeft:'1px' , cursor:'pointer'}}>
                  <MdExpandMore/>
            </Icon>
        </Paper>
        <Icon className='through' sx={{alignSelf:"center" , marginLeft:'1px'}}>
          <MdQuestionMark/>
        </Icon>
        <Icon className='through'>
          <MdSend/>
        </Icon>
        <Icon className='through'>
          <MdOutlineNotificationsNone/>
        </Icon>
        <Avatar/>
   </Box>
        
    </Header> 
  )
}

export default Index;