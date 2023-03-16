import React, { lazy , useEffect, useState } from 'react';
import styled from 'styled-components'; 

//function to get the url of the current page and i used it to switch between login and sign up because the layout is different
import {getCurrentURL} from '../../utils/getUrl';

//components
const UnAuthHeader = lazy(()=>import('../UnAuthHeader'));
const UnAuthFooter = lazy(()=>import('../UnAuthFooter'));
const LogInForm = lazy(()=>import('../../pages/LogIn/LogInForm'));
const SignUpPage = lazy(()=>import('../../pages/SignUp/Index'));
// const Spinner = lazy(()=>import('../../components/Spinner'));



function Index() {
  const[isLogIn, setIsLogIn] = useState(false);
  const url = getCurrentURL();

  useEffect(()=>{
    if(url.endsWith("signup"))
      setIsLogIn(true)  
  },[url])


  return (
    <Wrapper>
         <UnAuthHeader/>  
         {/* <Suspense fallback={<Spinner/>}> */}
              {isLogIn ? 
                  <SignUpPage/>
              :  
              <>
              <LogInForm/>
              <UnAuthFooter />
              </>}
          {/* </Suspense> */}
       
    </Wrapper>
  )
}

export default Index;


//style & responsive
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 110vh; 
    gap:4em;
    margin: auto;


@media only screen and (max-width: 900px) {
      div{
        width:95%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        margin:auto;
      }

      form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
      }

      .email{
        width:70%;
      }

      footer{
        width:100%;
      }

      .btn{
        width:70%;
      }

      #divider{
        display: flex;
        flex-wrap: wrap;
        width:80%;
      }
    }

    @media only screen and (max-width: 300px) {
      #divider{
          display: none;
      }
    }
`;
