import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding:35px 29px;
    display: flex;
    height: 200px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid ${(props)=>props.theme.colors.border};
    border-top: 1px solid ${(props)=>props.theme.colors.border};
    background-color: transparent;//for now
    cursor: pointer;
    margin: auto;

    &:hover{
        background-color: ${(props)=>props.theme.colors.hover};
    }
`

export const JobCard = styled.div`
    padding: 20px 0;
    width: 100%;
    padding:35px 10px;
    /* margin-left: -40px; */
    display: flex;
    height: 200px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid ${(props)=>props.theme.colors.border};
    border-top: 1px solid ${(props)=>props.theme.colors.border};
    background-color: transparent;//for now
    cursor: pointer;
    margin: auto;
    z-index: 0;

    &:hover{
        background-color: ${(props)=>props.theme.colors.hover};
    }
`;  

export const JobTitle = styled.h3`
    padding: 0;
    margin: 0;
    color: ${(props)=>props.theme.colors.text};
    margin-bottom: 0.4em;
`;

export const JobPrice = styled.div`
    display: flex;
    flex-direction: row;
    font-size: small;
    color: ${(props)=>props.theme.colors.secondText};
    margin: 0.5em 0;

`;

export const JobInfo = styled.p`
    color:${(props)=>props.theme.colors.text};
    max-width:80%;
    margin: 0.5em 0;

`;

export const Skills = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.2em;
    margin: 0.5em 0;

`;

export const Proposal = styled.span`
    display: flex;
    flex-direction: row;
    p{
        padding: 0;
        margin:0;
        color: ${(props)=>props.theme.colors.secondText};
    }
`;

export const PaymentAndLocation = styled.div`
    display: flex;
    flex-direction: row;
    p{
        padding: 0;
        margin:0;
        color: ${(props)=>props.theme.colors.secondText};
    }

`;
