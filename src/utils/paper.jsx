import { Paper } from "@mui/material";

//this component is to make any drop down list always open down

const paperComponent = (props) => {
    return (
      <Paper {...props} style={{width:'100%' ,  marginTop: '8px', position: 'absolute', zIndex: 1 }} />
    );
  };

export default paperComponent; 