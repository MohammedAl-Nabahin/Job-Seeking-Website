import styled from "styled-components";

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 64px;
    width: 100%;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom: 20px;
    overflow: hidden;
    flex-shrink: 0;
    background-color: white;
`;


const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.8em;
    padding: 0 20px;
    user-select: none;

    .through{
        &:hover{
            content: "";
            transition: 5px all ease-in-out;
            background-color: #ECFFFF;
            border-radius: 20%;
        }
    }

    p{
        cursor: pointer;
    }

    #work{
        color:${(props)=>props.theme.colors.main}
    }
`;

export {Header , Box};