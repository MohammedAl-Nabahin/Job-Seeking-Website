import React from 'react'
import LogInForm from './LogInForm';
import UnAuthHeader from '../../components/UnAuthHeader';
import UnAuthFooter from '../../components/UnAuthFooter';

function Index() {
  return (
    <div>
      <UnAuthHeader/>
        <LogInForm/>
        <UnAuthFooter/>
    </div>
  )
}

export default Index;