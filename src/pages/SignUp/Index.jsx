import React, { lazy, Suspense } from 'react';

//components
import UnAuthHeader from '../../components/UnAuthHeader';
import SignUpForm from './Form';
import Spinner  from '../../components/Spinner';


function Index() {
  return (
    <div style={{width:'100%' ,display:'flex' , alignItems:'center' , height:'100%' ,margin:'6em auto'}}>
      <UnAuthHeader/>
      <Suspense fallback={<Spinner/>}>
        <div style={{width:'40%' , margin:'auto'}}>
          <SignUpForm/>
        </div>
      </Suspense>
    </div>
  )
}

export default Index;