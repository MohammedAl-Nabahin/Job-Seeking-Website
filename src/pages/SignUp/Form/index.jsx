import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, Navigate, useNavigate } from 'react-router-dom';

//mui components
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  InputAdornment,
  Typography
} from '@mui/material';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {MdVisibility , MdVisibilityOff} from 'react-icons/md';


//helper functions and validation
import countries from '../../../mock/countries';
import paperComponent from '../../../utils/paper';
import {SignUpSchema} from '../../../Validation/signup'

//style
import SignUp from './style';

import { useAuthContext } from "./../../../contexts/AuthContext";
import axios from 'axios';



const Index = () => {
  const { loading, setLoading, setToken, login } = useAuthContext();
  // const navigate = useNavigate()
 const initialValues={
    name: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
    checkbox: false,
  }

  // const name = 

  const onSubmit = async ({name, email, password }) => {
    setLoading(true);
    const res = await axios
      .post(`https://react-tt-api.onrender.com/api/users/signup`, { email, password, name })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setLoading(false));

    if (res) {
      console.log(res)
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      login();
    }
  };


  // onSubmit : (values , {resetForm}) => {
  //   console.log("values" , values);
  //   resetForm({values:""})
  //   navigate("/home")
  //   // alert(JSON.stringify(values, null, 2));
  // }
  // const onSubmit = (values , {resetForm}) => {
  //   console.log("values" , values);
  //   resetForm({values:""})
  //   navigate("/home")
  //   // alert(JSON.stringify(values, null, 2));
  // }
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const formik = useFormik({
    initialValues,
    validationSchema:SignUpSchema,
    onSubmit,
  });
  // const validateCountry = (value) => {
  //   let error;
  //   if (!value || value === "") {
  //     error = "Required";
  //   } else if (!countries.find((c) => c.value === value)) {
  //     error = "Invalid country";
  //   }
  //   return error;
  // };


  return (
    <SignUp>
         <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1} sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , 
                gap:'1.5rem'}}>
                    <Typography variant='h4'>
                        <i>Sign up to find work you love</i> 
                    </Typography>
                            
              <Grid sx={{display:'flex' , flexDirection:'row' , gap:'1em'}} className="myGrid">
              <Grid item xs={6}>
                    <TextField
                          name="name"
                          placeholder="First Name"
                          className='giveMeBorder'
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                          helperText={formik.touched.firstName && formik.errors.firstName}
                          sx={{height:'95%' , width:'100%'}}
                      />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                            name="lastName"
                            placeholder="Last Name"
                            className='giveMeBorder'
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            sx={{height:'95%' , width:'100%'}}
                          />
                      </Grid>
              </Grid>

              <TextField
                      name="email"
                      placeholder="Email"
                      className='giveMeBorder'
                      id='signUpEmail'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      sx={{backgroundColor:'none'}}
                    />
               
              <TextField
                fullWidth
                id="password"
                name="password"
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className='showicon' sx={{cursor:'pointer'}}>
                      <Icon onClick={handleClickShowPassword}>
                        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                className='giveMeBorder'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
          />

                    <Autocomplete
                    name="countries"
                    options={countries}
                    // getOptionLabel={(option) => option.label}
                    PaperComponent={paperComponent}
                    // className='giveMeBorder'
                    id="auto"
                    renderInput={(params) => <TextField {...params} label="Country" />}
                    value={formik.values.label}
                    onChange={(e, value) => {
                      formik.setFieldValue("country", value ? value.value : undefined);
                      formik.setFieldTouched("country", true);
                    }}
                    />

                    {/* <Checkbox  
                      name='checkbox'
                      value={formik?.values?.checkbox}  
                   onChange={formik.handleChange}
                   error={formik.touched.checkbox && Boolean(formik.errors.checkbox)}
                  //  helperText={formik.touched.checkbox && formik.errors.checkbox}
                    /> */}
                 
                    {/* <Checkbox
                      // checked={formik.values.checkbox}
                      label="I agree on Terms and Conditions"
                      {...label}
                      onChange={formik.handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                      // name=""
                      sx={{alignSelf:'flex-start'}}
                    /> */}

                    <Button type='submit'
                     sx={{width:"100%" , alignSelf:'center'}}>
                      Create my account
                    </Button>
                
                    <Typography variant='body2'>
                        Already have an Account? <Link to={'/login'}>Log in</Link>
                    </Typography>



                </Grid>

              </form>
          
    </SignUp>
  );
};

export default Index;

//onClick={()=>{<Navigate to={"/login"}></Navigate>}}