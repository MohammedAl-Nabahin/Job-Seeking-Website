import { Container } from '@mui/system'
import React from 'react'
import ProfileUser from './Components/ProfileUser/index'

function Index() {
  return (
    <div>
        <Container fixed sx={{width:'70%' , height:'95%' , border:'1px solid #E4E4E4' , borderRadius:'15px' , margin:'2em auto'}}>
            <ProfileUser/>
        </Container>
        {console.log("first")}
    </div>
  )
}

export default Index