import React from 'react';

import { Typography } from '@mui/material';
import styled from 'styled-components';

function Index({id}) {
  return (
    <UnAuthFooter className='.footer-container' id={id}>
        <Typography variant='body1' className='info'>
            &copy;2023-Pluto&#xae; <span> Global Inc.</span>  &#9679; <span id='privacy'>Privacy Policy</span> 
        </Typography>
    </UnAuthFooter>
  )
}

export default Index;


//style
const UnAuthFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 3.2em 0;
    user-select: none;
    margin-top: auto;
    position: relative;
    bottom: 0;
    background-color:${(props) => props.theme.colors.main};
    color: ${(props)=>props.theme.colors.background};

    #privacy{
        cursor: pointer;
        font-weight: bold;
        &:hover{
            text-decoration: underline;
        }
    }

    .info{
        font-size:13px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    @media only screen and (max-width: 708px) {
      .footer-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
      }

    }
`;

