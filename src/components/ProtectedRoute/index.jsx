import React,{Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../Layout'
import Spinner from '../Spinner'

import {useAuthContext} from '../../contexts/AuthContext';

function Index({children}) {
  const {authorized} = useAuthContext();
  return (
    <div>
    {authorized ? (
      <Layout>
        <Suspense fallback={<Spinner/>}>
          {children}
        </Suspense>
      </Layout>
    ) : (
      <Navigate to='/login' />
    )}
  </div>
  )
}

export default Index