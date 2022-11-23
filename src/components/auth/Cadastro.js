import styled from "styled-components"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export function Cadastro() {
    const navigate = useNavigate();

    const [infosCadastro, setInfosCadastro] = useState({  name: "", email: "", password: "", confirmedPassword: "", });

    const modelCadastro = {
        name: infosCadastro.name,
        email: infosCadastro.email,
        password: infosCadastro.password,
        confirmedPassword: infosCadastro.confirmedPassword
    }

    const URLcadastro = 'https://brechofut.onrender.com/sign-up';

    function Cadastro(e) {
        e.preventDefault();
        const promise = axios.post(URLcadastro, modelCadastro);

        promise.then((response) => {
            setInfosCadastro(response.data);
            navigate('/');
        });

        promise.catch(error => {
            console.log(error);
            alert("error signup");
        });
    }


    //inputs
    const imprimirInputs = Inputs();
    function Inputs() {
        //
        return (
                <form onSubmit={Cadastro}>
                    <input
                        type='text'
                        placeholder='usuário'
                        onChange={e => setInfosCadastro({ ...infosCadastro, name: e.target.value })}
                        
                    />
                    <input
                        type='text'
                        placeholder='email'
                        onChange={e => setInfosCadastro({ ...infosCadastro, email: e.target.value })}
                        
                    />
                    <input
                        type='password'
                        placeholder='senha'
                        onChange={e => setInfosCadastro({ ...infosCadastro, password: e.target.value })}
                        
                    />
                    <input
                        type='password'
                        placeholder='confirmar senha'
                        onChange={e => setInfosCadastro({ ...infosCadastro, confirmedPassword: e.target.value })}
                        
                    />
                    <button type='submit'>cadastrar</button>
                </form>
        )
    };

    //layout da tela cadastro
    return (
        <ContainerCadastro>
            <h1>brechoFut</h1>
            <ContainerInputs>
                {imprimirInputs}
            </ContainerInputs>
            <Link to="/"  style={{ textDecoration: 'none'}}>
                <p>Já tem uma conta? Entre agora!</p>
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
        margin-top:70px;
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
    margin-top: 30px;

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
        margin-bottom:28px;
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
    }
`