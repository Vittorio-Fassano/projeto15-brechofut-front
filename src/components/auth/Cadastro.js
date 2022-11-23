import styled from "styled-components"
import { Link } from 'react-router-dom';

export function Cadastro() {



    //inputs
    function inputs() {
        //
        return (
                <form>
                    <input
                        type='text'
                        placeholder='usuário'
                        
                    />
                    <input
                        type='text'
                        placeholder='email'
                        
                    />
                    <input
                        type='password'
                        placeholder='senha'
                        
                    />
                    <input
                        type='password'
                        placeholder='confirmar senha'
                        
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
                {inputs()}
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
        margin-top:50px;
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