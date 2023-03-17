import Spinner from './components/Spinner';
import React, { Suspense, useState } from 'react';


import {light , dark} from './theme/index'
import { themeContext } from './contexts/themeContext';
import AuthProvider from "./contexts/AuthContext";
import JobProvider from './contexts/JobContext';
import {ThemeProvider} from 'styled-components';
import Router from './routes/index';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  
const [theme, setTheme]= useState(light);


  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
          <themeContext.Provider value={[theme, setTheme]}>
              <div className="App">
                <AuthProvider>
                <JobProvider>
                  <Suspense fallback={<Spinner/>}>      
                      <Router/>
                  </Suspense>
                </JobProvider>
                </AuthProvider>
              </div>
          </themeContext.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
