import React from 'react';
import { Link } from 'react-router-dom';

// const styled = lazy(()=> {import ('styled-components')});
import styled from 'styled-components';

const Logo = styled.h2`
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.main};
    font-family: cursive;
`;

function index() {
  return (
    <Logo>
      <Link to={'/'} style={{textDecoration:'none'}}>
        Pluto
      </Link>
    </Logo>
  )
}

export default index;