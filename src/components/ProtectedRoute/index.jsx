import React, { Component, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../Layout'
import Spinner from '../Spinner'

import {useAuthContext } from '../../contexts/AuthContext';

function Index() {
  const {authorized} = useAuthContext();
  return (
    <div>
    {authorized ? (
      <Layout>
        <Suspense fallback={<Spinner/>}>
          <Outlet />
        </Suspense>
      </Layout>
    ) : (
      <Navigate to='/login' />
    )}
  </div>
  )
}

export default Index