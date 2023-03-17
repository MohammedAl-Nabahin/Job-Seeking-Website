import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';


import { TextField, Button , Typography } from '@mui/material';

import {Divider} from '@mui/material';

import LogInForm from './style';
import { useFormik } from 'formik';

import {logInSchema} from '../../../Validation/login';

import { useAuthContext } from "./../../../contexts/AuthContext";
import axios from 'axios';



function Index() {
  const { loading, setLoading, setToken, login  , authorized} = useAuthContext();
  const [errors,setError]=useState();
  // const navigate = useNavigate()


    
   
const initialValues = {
  email: '',
  password: '',
};

const onSubmit = async ({ email, password }) => {
  setLoading(true);
  const res = await axios
    .post(`https://react-tt-api.onrender.com/api/users/login`, { email, password })
    .catch((err) => {
      setError(err.response.data.message)
      console.log(err.response.data.message);
    })
    .finally(() => setLoading(false));

  if (res) {
    console.log(res)
     const token = res.data.token;
     const name = res.data.name;
      localStorage.setItem("token", token);
      localStorage.setItem("name" , name);
    setToken(token);
    login();
  }
};

// onSubmit: (values , {resetForm}) => {
//   navigate("/signup")
//   console.log("values" , values);
//   resetForm({values:""})
// }

const formik = useFormik({
  initialValues,
  validationSchema:logInSchema,
 onSubmit,
})
      
  return (
     <LogInForm>

       {errors ? <p>error</p> : ""}
         <form onSubmit={formik.handleSubmit}>
         <Typography variant='h5' sx={{fontSize:'30px'}}>
            Log in to <span className='pluto'>Pluto</span>
        </Typography>
      
      <TextField
        id="email-input"
        // label="Email"
        className='email'
        placeholder="Email"
        variant="outlined"
        margin="normal"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{width:'75%'}}
      />
                
   

      <TextField
        id="password-input"
        className='email'
        placeholder="Password"
        type="password"
        variant="outlined"
        margin="normal"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}  
        sx={{width:'75%' , margin:'2px 0'}}
      />
                       
             
        <Button variant="contained" type="submit" className='btn' sx={{width:'75%' , margin:'20px 0'}}   onClick={()=>{console.log("loged")}}>
           {loading ? <p>Loading...</p>  : "Log In"}
        </Button>
        
          
       
      
      <Divider id="divider" className='hr' sx={{width:'75%'}}> Don't have a Pluto account? </Divider>

    
    <Link to='/signup'   style={{textDecoration:'none' , width:'70%'}}>
        <Button className='btn' id="sign"  variant="contained" sx={{width:'75%' , margin:'20px 0'}} >
            Sign Up
        </Button>
        </Link>
         
    </form>
    </LogInForm>
  )
}


export default Index;