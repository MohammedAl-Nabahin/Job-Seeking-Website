import React from 'react';

//mui container
import Container from '@mui/material/Container';

//Components
import Header from '../Header';
import Footer from '../Footer';
import Welcome from '../../components/Welcome/Index';
import Home from '../../pages/Home/Index';



function Index({children}) {
  return (
    <div>   
        <Header/>
        <Container fixed>
          {children}
        </Container>
        <Footer/>
    </div>
  )
}

export default Index;