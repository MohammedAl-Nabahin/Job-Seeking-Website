import React from 'react';

import Jobs from './Components/JobContainer/Index';
// import JobCon from './Components/JobContainer/Index'
import Welcome from '../../components/Welcome/Index';
import SearchBar from './Components/SearchBar/Index';
import Aside from './Components/Aside/Index';
function Index() {
  return (
    <div style={{display:'flex' , flexDirection:'row' , width:'100%' , gap:'1em'}}>
      <div style={{ width:"70%" , height:'100%'}}>
        <Welcome/>
        <SearchBar/>
        <Jobs/>
      </div>
      
      <Aside/>
    </div>
  )
}

export default Index;