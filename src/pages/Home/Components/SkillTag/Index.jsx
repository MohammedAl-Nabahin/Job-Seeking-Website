import React from 'react';
import styled from 'styled-components';


const SkillTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0.5em 0;
    margin-bottom: 1em;
    padding: 5px 7px;
    background-color: ${(props)=>props.theme.colors.border};
    color:  ${(props)=>props.theme.colors.secondText};
    border-radius: 20px;
`;


function Index({skill}) {
  return (
    <SkillTag> {skill}</SkillTag>
  )
}

export default Index