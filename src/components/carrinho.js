import { useState, /*useEffect,*/ useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
//import UserContext from "../../contexts/UserContext";
import Header from './Header';
export function Carrinho() {

    return (
        <>
            <Header />
            <ContainerMain>
                <button>finalizar compra</button>
            </ContainerMain>
            
        </>
    )
}

//styled components


const ContainerMain = styled.div `

    button {
        width:250px;
        height:50px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:35px;
        margin-left:65px;
        position: fixed;
        bottom: 0;
        padding-left:15px;
        font-size: 20px;
        border: none;
        text-align:center;
        align-items: center;
        background-color: #f04158;
        color:#fcfcd7;
        font-family: 'Patrick Hand', cursive;
        font-weight: 700; 
        letter-spacing: 3px;
        cursor: pointer;
    }   
`;