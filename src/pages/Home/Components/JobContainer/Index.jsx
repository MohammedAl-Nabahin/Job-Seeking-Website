import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AllJobs from '../Jobs'
import Recent from '../MostRecent/Index'
import SavedJobs from '../SavedJobs/Index';
import { padding } from '@mui/system';


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

export default function Index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' , height:'100%'  , border:'1px solid #bbbbc0' , borderRadius:'20px' , height:'70%' , marginBottom:'5em'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , margin:'2em 0em'  }}>
        <Typography variant='h5' marginLeft={'1em'} marginBottom={'0.5em'}>Jobs you might like</Typography>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Jobs" {...a11yProps(0)} />
          <Tab label="Most receint" {...a11yProps(1)} />
          <Tab label="Saved Jobs" {...a11yProps(2)} />
        </Tabs>
      </Box>
        <TabPanel value={value} index={0}>
          <AllJobs/>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Recent/>
        </TabPanel>
        
        <TabPanel value={value} index={2}>
          <SavedJobs/>
        </TabPanel>
      </Box>
  );
}