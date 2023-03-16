import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AllJobs from '../Home/Components/Jobs'
// import Recent from '../Home/Components/MostRecent'
import SavedJobs from '../Home/Components/SavedJobs/Index';
import { padding } from '@mui/system';
import SearchBar from '../Home/Components/SearchBar/Index'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config/api';
import { MdWorkHistory } from 'react-icons/md';
import Circular from '../../components/Progress';
import JobCard from '../Home/Components/JobCard/Index';



function Index() {


    const [searchparams] = useSearchParams();

    const query = searchparams.get("search")
    // console.log()


    const [jobs, setJobs] = useState([]);
    const [errors, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const getJobs= async ()=>{
        setIsLoading(true)
        try {
          // const response = await axios.get(`http://localhost:3000/jobs?_limit=10`)
          const response = await axios.get(/*env */ `${API_URL}jobs`)
          console.log(response)
          if (response) {
            setJobs(response.data)
          }else{
            throw new Error("Sorry something went wrong")
          }
        } catch (error) {
          setError(error.message)
        }finally{
          setIsLoading(false)
        }
      }


      const getSearchedJobs= async ()=>{
        setIsLoading(true)
        try {
          // const response = await axios.get(`http://localhost:3000/jobs?_limit=10`)
          const response = await axios.get(/*env */ `${API_URL}jobs?q=${query}`)
          console.log(response)
          if (response) {
            setJobs(response.data)
          }else{
            throw new Error("Sorry something went wrong")
          }
        } catch (error) {
          setError(error.message)
        }finally{
          setIsLoading(false)
        }
      }
    
    useEffect(() => {
        if(searchparams.length === 0 || searchparams === ""){
        getJobs()
        }else{
            getSearchedJobs()
        }
      }, [searchparams])


    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      
      
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
  return (
    <div>
        <Container fixed sx={{display:'flex' , flexDirection:'row' , gap:'1em' }}>
            <div>
                Filter
            </div>
          
      

    <Box sx={{ width: '90%' , height:'100%'  , border:'1px solid #bbbbc0' , borderRadius:'20px' , height:'70%' , marginBottom:'5em'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , margin:'2em 0em'  }}>
        <Typography variant='h5' marginLeft={'1em'} marginBottom={'0.5em'}>Search Jobs</Typography>
        <SearchBar/>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Jobs" {...a11yProps(0)} />
          <Tab label="Saved Jobs" {...a11yProps(1)} />
        </Tabs>
      </Box>
        <TabPanel value={value} index={0}>

        <div style={{width:"100%"}}>
        <div style={{width:'94.6%'}}> 

                <p style={{marginLeft:'2em' ,display:'flex' , alignItems:'center' , gap:'5px'}}> 
                <MdWorkHistory size={20} color='darkblue'/> {jobs.length} Jobs Found
                </p>
        
          {errors && <p>{errors}</p>} 
          {isLoading && <Circular/>} 

        {jobs.length > 0 && 
        
        jobs.map(job => (
              <JobCard key={job.id}
                {...{ job }}       
                />
                ))}
        </div>
    </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <SavedJobs/>
        </TabPanel>
      </Box>

        </Container>
    </div>
  )
}

export default Index;



//helper component
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      
      <div style={{width:'100%'  , paddingBottom:'15em' }}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{width:'100%'}}>
         {children}
          </Box>
        )}
      </div>
    );
  }
  