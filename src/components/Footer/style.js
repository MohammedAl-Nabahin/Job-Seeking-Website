import styled from "styled-components";

export const FooterBox = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    align-self: 0;
    margin-top: 15em;
    /* margin-bottom: 0; */
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    user-select: none;
    background-color: ${(props)=>props.theme.colors.main};
    color: ${(props)=>props.theme.colors.background};


    .socailList{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 0.3em;
    }

    .socail{
        border: 1px solid ${(props)=>props.theme.colors.background};
        border-radius: 50%;
        padding: 2px;
    }

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

    @media only screen and (max-width: 808px) {
      .footer-container {
        width: 60%;
        display: flex;
        flex-direction: column;
        text-align: center;
      }

    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction:column;
    margin:30px 0;
    justify-content: flex-start;
    gap: 0.8em;
    width:80%;
`;

export const Lists = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10em;
    width: 90%;
`;


export const Contact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2em;
    width: 100%;
    border-bottom: 1px solid ${(props)=>props.theme.colors.background};
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.2em;
    padding:0;
`;

export const ListItem = styled.li`
    cursor: pointer;
    list-style: none;
    user-select: none;
    &:hover{
        text-decoration: underline;
    }
`;