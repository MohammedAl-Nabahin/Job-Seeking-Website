import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner'
import UnAuthLayout from '../UnAuthLayout'

function index() {
  return (
    <div>
      <UnAuthLayout>
        <Suspense fallback={<Spinner/>}>
          <Outlet />
        </Suspense>
      </UnAuthLayout>
    </div>
  )
}

export default index