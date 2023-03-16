import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from '../components/ProtectedRoute/index';
// import UnProtectedRoute from '../components/UnProtectedRoute/Index';

const Login = lazy(() => import("../pages/LogIn/index"));
const Signup = lazy(() => import( "../pages/SignUp/Index"));
const Home = lazy(() => import("../pages/Home/Index"));
const Search = lazy(() => import("../pages/Search/Index"));
const JobDetails = lazy(() => import("../pages/JobDetails/Index"));
const Profile = lazy(() => import("../pages/Profile/Index"));
// import Layout from '../components/Layout/index';


export const PATHS = {
    SIGNUP: "/signup",
    LOGIN: "/login",
    HOME: "/home",
    JOBDETAILS: "job-details/:id",
    SEARCH : "/search",
    PROFILE : "/profile" 
  };

  export const router = [
    { index: true, element: <Navigate to={PATHS.HOME} /> },
    { path: PATHS.LOGIN, element: <Login /> },
    { path: PATHS.SIGNUP, element: <Signup /> },
   
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        { path: PATHS.HOME, element: <Home /> },
        { path: PATHS.SEARCH, element: <Search /> },
        { path: PATHS.JOBDETAILS, element: <JobDetails /> }, 
        { path: PATHS.PROFILE, element: <Profile /> }, 

      ]
    },
    { path: "*", element: <h1>Page not found</h1> },
  ];