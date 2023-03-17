import React, { lazy } from "react";
import { Route, Routes  } from "react-router-dom";

import ProtectedRoute from '../components/ProtectedRoute/index';

const Login = lazy(() => import("../pages/LogIn/index"));
const Signup = lazy(() => import( "../pages/SignUp/Index"));
const Home = lazy(() => import("../pages/Home/Index"));
const Search = lazy(() => import("../pages/Search/Index"));
const JobDetails = lazy(() => import("../pages/JobDetails/Index"));
const Profile = lazy(() => import("../pages/Profile/Index"));



export const PATHS = {
    SIGNUP: "/signup",
    LOGIN: "/login",
    HOME: "/home",
    JOBDETAILS: "jobdetails/:id",
    SEARCH : "/search",
    PROFILE : "/profile"
  };


function index() {
  return (
    <Routes>
        <Route index path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path='jobdetails/:id' element={
              <ProtectedRoute>
                <JobDetails />
              </ProtectedRoute>
          } />
          <Route path='search' element={
            <ProtectedRoute>
            <Search/>
          </ProtectedRoute>
           } />
          <Route path='profile' element={
          <ProtectedRoute>
          <Profile/>
          </ProtectedRoute> 
        }/>
        <Route path='*' element={<h1>Page Not Found</h1>} />
       
    </Routes>
  )
}

export default index
