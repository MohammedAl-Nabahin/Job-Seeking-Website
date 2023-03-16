import styled from "styled-components";

const LogInForm = styled.div`
    padding:20px 0;
 
    margin: auto;
    margin-top: 130px;
    display: flex;
    text-align: center;
    width:550px;
    height: 500px;
    border: 2px solid ${(porps)=>porps.theme.colors.border};
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 2px 2px 2px #E4D4E4;

      
    #password-input>input{
        /* background-color: transparent; */
        height: 30px;
    }

    .hr{
        margin:0 auto;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .email>div{
        margin: 10px 0;
        border-radius: 15px;
        height: 56px;
    }

  

    button{
        border-radius: 25px;
        background-color: ${(props)=>props.theme.colors.main};
    }

    .pluto{
        color:${(props)=>props.theme.colors.main}
    }

    
    @media only screen and (max-width: 900px) {
        #sign{         
            width:90%;
        }
    } 
`;

export default LogInForm;