import React from 'react';

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
        Pluto
    </Logo>
  )
}

export default index;