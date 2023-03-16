import React, { useState } from 'react';
import { Icon } from '@mui/material';
import { MdSearch } from 'react-icons/md';

import styled from 'styled-components';
import { createSearchParams, useNavigate } from 'react-router-dom';

const SearchBar = styled.form`
    width:100%;
    height: 2.5em;
    display: flex;
    flex-direction: row;
    border: 2px solid ${(props)=>props.theme.colors.border};
    position: relative;
    border-radius: 10px;
    margin: 1em 0;

    input{
        border: none;
        text-indent: 1em;
        border-radius: 10px;
        width: 95.6%;
        display: flex;
        justify-content: flex-start;
        outline: none;
        &:focus{
            border-color: transparent;
        }
    }

    .icon{
        position: absolute;
        display: flex;
        right: 0;
        width: 4%;
        height: 100%;
        background-color: ${(props)=>props.theme.colors.main};
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        justify-content: center;
        align-items: center;
    }

`;

function Index() {

    const [searchValue , setSearchValue] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate({
            pathname:"/search",
            search:createSearchParams({
               search: searchValue
            }).toString()
        })
    }

  return (
    <SearchBar onSubmit={handleSubmit}>
        <input type={"text"} value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}  placeholder="Search for job"/>
        <span className='icon' onClick={handleSubmit}>
            <MdSearch color='white'/>
        </span>
    </SearchBar>
  )
}

export default Index;