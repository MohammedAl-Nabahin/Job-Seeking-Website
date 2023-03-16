import Spinner from './components/Spinner';
import React, { lazy, Suspense, useEffect, useState } from 'react';


import {light , dark} from './theme/index'
import { themeContext } from './contexts/themeContext';
import UnAuthLayout from './components/UnAuthLayout'
import Layout from './components/Layout'

import AuthProvider from "./contexts/AuthContext";
import JobProvider from './contexts/JobContext';

import {ThemeProvider} from 'styled-components';
import Header from './components/Header';
import  Footer from './components/Footer';
import Home from './pages/Home/Index'
import { Route, Routes } from 'react-router-dom';
// import JobDetails from './pages/JobDetails/index';
import Search from './pages/Search/Index'
// const Login = lazy(() => import("../pages/LogIn/index"));
// const Signup = lazy(() => import( "../pages/SignUp/Index"));
// const JobDetails = lazy(() => import("../pages/JobDetails/Index"));

import Login from './pages/LogIn/index';
import Signup from './pages/SignUp/Index';
import JobDetails from "./pages/JobDetails/Index";
// const Profile = lazy(() => import("../Pages/Profile"));
import {router as routes} from './routes/index';
import { useRoutes } from "react-router-dom";




function App() {
  const router = useRoutes(routes);
  
const [theme, setTheme]= useState(light);


  return (
  <Suspense fallback={<Spinner/>}>      
    <ThemeProvider theme={theme}>
         <themeContext.Provider value={[theme, setTheme]}>
            <div className="App">
              <AuthProvider>
              <JobProvider>
               <Suspense fallback={<Spinner/>}>      
                  {router}
              </Suspense>
              </JobProvider>
              </AuthProvider>
            </div>
         </themeContext.Provider>
    </ThemeProvider>
  </Suspense>
  );
}

export default App;
