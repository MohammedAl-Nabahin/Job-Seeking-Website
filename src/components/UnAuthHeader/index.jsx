import React from 'react';

import styled from 'styled-components';

import Logo from '../Logo';

const UnAuthHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 64px;
    width: 100%;
    overflow-y: hidden;
    align-items: center;
    position: fixed;
    top: 0;
    margin-bottom: 20px;
    overflow: hidden;
    flex-shrink: 0;
    background-color: white;
    z-index: 555;
    
    h2{
      padding-left: 24px;
    }
    
`;

function Index() {
  return (
    <UnAuthHeader>
        <Logo/>
    </UnAuthHeader>
  )
}

export default Index;