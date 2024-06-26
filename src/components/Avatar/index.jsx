import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

//image
import avatar from '../../assets/images/avatar.jpg';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Avatar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {logout} = useAuthContext();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const bye= ()=>{
    logout();
  }
  const goToProfile = () =>{
    navigate('/profile')
  } 

  return (
    <div style={{padding:0 , margin:0 , width:'35px' , marginRight:'5px' , marginLeft:'-10px'}}>
        <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            // sx={{width:'40px' , height:'10px' , backgroundColor:'red'}}
            onClick={handleClick}
        >
            <img src={avatar} alt="avatar" width={"65%"} style={{borderRadius:'50%'}} />
        </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            <MenuItem onClick={goToProfile}>Profile</MenuItem>
            <MenuItem onClick={bye}>Logout</MenuItem>
        </Menu>
    </div>
  );
}