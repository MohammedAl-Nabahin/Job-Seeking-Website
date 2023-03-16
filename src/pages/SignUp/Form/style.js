import styled from "styled-components";

const SignUp = styled.div`
    padding:20px 0;
    margin: auto;
    margin-top: 0px;
    display: flex;
    text-align: center;
    width:100%;
    padding: 1.5em 1em;
    height: 60%;
    border: 2px solid ${(porps)=>porps.theme.colors.border};
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 2px 2px #E4D4E4;

    #name-input{
        background-color: transparent;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    input{
        width:100%;
      }

    a{
       color: ${(props)=>props.theme.colors.main};
       text-decoration: none;

       &:hover{
        text-decoration: underline;
       }
    }
        
    .hr{
        margin:0 auto;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .email>div{
        margin: 10px 0;
        border-radius: 15px;
        height: 40px;
    }

    button{
        border-radius: 25px;
        background-color: ${(props)=>props.theme.colors.main};
        color:${(props)=>props.theme.colors.background};

        &:hover{
            background-color: blue;
        }
    }

    #signUpEmail:valid {
            background-color: transparent;
        }

    #signUpEmail>div{
        width:90%;
    }

    #signUpEmail{
        height: 25%;
        background-color: transparent;
    }

    #signUpEmail>input{
        background-color: none;
        &::content{
            background-color:none;
        }
    }


    .giveMeBorder>div{
        border-radius: 15px;
        height: 85%;
    }

    div{
        height: 70%;
    }

    input{
        height: 30%;
    }



    
    @media only screen and (max-width: 900px) {

        width: 70%; 
        padding: 0;

      div>div>button{
        width: 20%;
        align-self: flex-end;
      } 
        
      form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      input{
        width:95%;
      }

      button{
        width:88%;
      }


      .myGrid{
        display: flex;
        width:95%;
        flex-direction: row;
      }

      
      .myGrid>div{
        width:95%;
        height: 95%;
      }

      .showicon{
        display:flex;
        width: 100%;
        position: absolute;
        right: 0;
        justify-content: center;
        align-items: flex-end;
      }
    }
`;

export default SignUp;