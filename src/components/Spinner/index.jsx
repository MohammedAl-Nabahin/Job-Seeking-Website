import React, { lazy } from 'react';
import { MdMargin } from 'react-icons/md';



const CircularProgress = lazy(()=>import('@mui/material/CircularProgress'));
const Box = lazy(()=>import('@mui/material/Box'));


function Index() {
  return (
    <Box  sx={{
            display: 'flex' , 
            height:'100%', 
            justifyContent:'center' , 
            alignItems:'center' , 
            position:'fixed',
            top:'0',
            left:'0',
            width:'100%',
            zIndex:'9999',
            MdMargin:'auto'
          }}>
        <CircularProgress size={'4rem'}/>
    </Box>
  )
}

export default Index;