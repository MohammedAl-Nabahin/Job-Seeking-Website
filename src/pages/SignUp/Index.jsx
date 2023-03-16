import React, { lazy, Suspense } from 'react';

//components
import UnAuthHeader from '../../components/UnAuthHeader';
const SignUpForm = lazy(()=>import('./Form'));
const Spinner = lazy(()=>import('../../components/Spinner'));


function Index() {
  return (
    <div>
      <UnAuthHeader/>
      <Suspense fallback={<Spinner/>}>
        <SignUpForm/>
      </Suspense>
    </div>
  )
}

export default Index;