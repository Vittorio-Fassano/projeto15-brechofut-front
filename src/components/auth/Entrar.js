import styled from "styled-components"
import { Link, useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from "../../contexts/UserContext";

export function Entrar() {
    const { setUserInformations, /*setUserName*/} = useContext(UserContext);//get a state through the context
    const [infosEntrar, setInfosEntrar] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const modelEntrar = {
        email: (infosEntrar.email || "").toLowerCase(),
        password: infosEntrar.password,
    }

    const URLlogin = "https://brechofut.onrender.com" //back deploy link

    function newLogin(e) {
        e.preventDefault();

        const promise = axios.post(URLlogin, modelEntrar)
        promise.then((response) => {
            setUserInformations(response.data.token);

            setInfosEntrar(response.data);
            
            const user = JSON.stringify(response.data.token);
            localStorage.setItem('token', user)

            const userName = JSON.stringify(response.data.name);
            localStorage.setItem('name', userName)


            navigate("/fazer-anuncio");
        })
        promise.catch(err => {
            console.log(err);
            alert("error login");
        })
    }


    //inputs
    function inputs() {
        return (
                <form onSubmit={newLogin}>
                    <input
                        type='text'
                        placeholder='email'
                        onChange={e => setInfosEntrar({ ...infosEntrar, email: e.target.value })}
                        
                    />
                    <input
                        type='password'
                        placeholder='senha'
                        onChange={e => setInfosEntrar({ ...infosEntrar, password: e.target.value })}
                        
                    />
                    <button type='submit'>entrar</button>
                </form>
        )
    };

    //layout da tela cadastro
    return (
        <ContainerCadastro>
            <h1>brechoFut</h1>
            <ContainerInputs>
                {inputs()}
            </ContainerInputs>
            <Link to="/cadastro"  style={{ textDecoration: 'none'}}>
                <p>Ainda não tem uma conta? Cadastrar agora!</p>
            </Link>
        </ContainerCadastro>
    )
}



//styled components
const ContainerCadastro = styled.div`

    width: 375px;
    margin: auto auto;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #f04158;
        font-family: 'Titan One', cursive; 
        font-size:60px;
        margin-top:120px;
        margin-bottom:24px;
        text-align:center;
        line-height: 50px;
    }

    p {
        font-size:15px;
        font-weight:700;
        color: #fcfcd7;
        display:flex;
        justify-content:center;
        margin-left: 10px;
        text-decoration: none;
        text-decoration-color: #8C11BE;
        letter-spacing: 2px;
    }
`


//layout inputs
const ContainerInputs = styled.div`
    align-items: center;
    margin-top: 50px;

 input{
        width:250px;
        height:50px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:28px;
        margin-left:65px;
        padding-left:15px;
        font-size: 20px;
        border: none;
        text-align:center;
        align-items: center;
        background-color: #95d0b8;
        color:#fcfcd7;
        font-family: 'Patrick Hand', cursive;
        font-weight: 700;
        letter-spacing: 3px;
    }

    input::placeholder {
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        font-family: 'Patrick Hand', cursive;
        border: none;
        color:#fcfcd7;
        letter-spacing: 3px;
    }

    button {
        width:250px;
        height:50px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:35px;
        margin-left:65px;
        padding-left:15px;
        font-size: 20px;
        border: none;
        text-align:center;
        align-items: center;
        background-color: #95d0a8;
        color:#fcfcd7;
        font-family: 'Patrick Hand', cursive;
        font-weight: 700; 
        letter-spacing: 3px;
        cursor: pointer;
    }
`