import React, { Suspense } from 'react';

import Jobs from './Components/JobContainer/Index';
// import JobCon from './Components/JobContainer/Index'
import Welcome from '../../components/Welcome/Index';
import SearchBar from './Components/SearchBar/Index';
import Aside from './Components/Aside/Index';
function Index() {
  return (
    <div style={{display:'flex' , flexDirection:'row' , width:'100%' , gap:'1em'}}>
      <div style={{ width:"70%" , height:'100%'}}>
        <Suspense fallback={<h4>Loading</h4>}>
          <Welcome/>
          <SearchBar/>
          <Jobs/>
        </Suspense>
      </div>
      
      <Aside/>
    </div>
  )
}

export default Index;