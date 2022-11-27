import { useState, /*useEffect,*/ useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useNavigate } from 'react-router-dom'
import UserContext from "../../../contexts/UserContext";
import FooterNovoAnuncio from './novoAnuncioFooter';
//import Header from '../../Header';
import Header2 from '../../Header2';

export function NovoAnuncio () {
    const [novoAnuncio, setNovoAnuncio] = useState({  value: "", description: "", image: "" });
    const { userInformations} = useContext(UserContext);
    const navigate = useNavigate();

    //
    async function Entry(e) {
        e.preventDefault();

        const modelNovoAnuncio = {
            value: novoAnuncio.value,
            description: novoAnuncio.description,
            image: novoAnuncio.image
        }

        const headers = { //token
            headers: { Authorization: `Bearer ${userInformations}` }
        };
     
        const URLnovaanuncio= "https://brechofut.onrender.com/fazer-anuncio"

        try {
            await axios.post(URLnovaanuncio, modelNovoAnuncio, headers);
            alert("anúncio feito com sucesso");
            navigate("/home");

        } catch (err) {
            console.log(err);
            alert("erro ao fazer anúncio");

        }
    }
    //

    //inputs
    const imprimirInputs = Inputs();
    function Inputs() {
        return (
                <form onSubmit={Entry}>
                    <input
                        type='number'
                        step="0.01"
                        placeholder='valor'
                        onChange={e => setNovoAnuncio({ ...novoAnuncio, value: e.target.value })}
                        
                    />
                    <input
                        type='text'
                        placeholder='descrição do produto'
                        onChange={e => setNovoAnuncio({ ...novoAnuncio, description: e.target.value })}
                        
                    />
                    <input
                        type='text'
                        placeholder='url da imagem'
                        onChange={e => setNovoAnuncio({ ...novoAnuncio, image: e.target.value })}
                        
                    />
                    <button type='submit'>fazer anúncio</button>
                </form>
        )
    };


    return (
        <ContainerCadastro>
            <Header2 />
            <ContainerInputs>
                {imprimirInputs}
            </ContainerInputs>
            <FooterNovoAnuncio />
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
    margin-top:50px;

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
    margin-top:60px;
    position: relative;

 input{
        width:250px;
        height:100px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:20px;
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
        margin-top:38px;
        cursor: pointer;
    }
`