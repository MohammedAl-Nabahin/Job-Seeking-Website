import styled from "styled-components";

export const Aside = styled.aside`
    width: 30%;
    display: flex;
    height: 70em;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border: 1px solid ${(porps)=>porps.theme.colors.border};
    border-radius: 15px;

    span{
        margin: 0.2em 0;
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .info{
        margin-top: -1em;
    }
`;

export const Box = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    width: 100%;
`;

export const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    /* border-left: 1px solid #E4E4E4;
    border-right: 1px solid #E4E4E4;
    border-bottom: 1px solid black; */
    border:none;
    margin-bottom: 1em;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: flex-start;
    gap: 1em;
    margin-bottom: 1em;

`;