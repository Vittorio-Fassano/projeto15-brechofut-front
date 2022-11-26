import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import UserContext from "../../contexts/UserContext";
import NovoAnuncioFooter from './meusAnunciosFooter';
import Header from '../Header';

export function MeusAnuncios() {
    const [meusAnuncios, setMeusAnuncios] = useState([]);
    const { userInformations} = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformations}`
            }
        }

        const URLmeusanuncios = "https://brechofut.onrender.com/meus-anuncios";

        const promise = axios.get(URLmeusanuncios, config);
        promise.then((response) => {
            setMeusAnuncios(response.data);
        });
        promise.catch(error => {
            console.log(error);
            alert("erro ao acessar anuncios");
        });
    }, []);
    return (
        <>
            < Header/>
            <ContainerMain>
                {meusAnuncios.map(anuncio => <TodosMeusAnuncios info={anuncio} key={MeusAnuncios.id} />).reverse()}
            </ContainerMain>
            <NovoAnuncioFooter/>
        </>
    )
}

function TodosMeusAnuncios(props) {

    const { info } = props

    return (
        <ContainerAnuncios>
            <ContainerImagem>
                <img src={info.image} alt="fotoProduto" />
            </ContainerImagem>
            <p>{info.description}</p>
            <h2 >{info.value} R$</h2>
            <button>X</button>
        </ContainerAnuncios>
    );
}




const ContainerMain = styled.div`
    background-color: #67be9b ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 62px;
    margin-bottom: 85px;
`;

const ContainerAnuncios = styled.div`
    background-color: #67be9b;
    align-items: center;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    button {
        height: 15px;
        width: 30px;
        border: none;
        background-color: #95d0b8;
        color: #f04158;
        margin-left: 95px;
    }
 
    p {
    font-size: 17px;
    color: #fcfcd7;
    font-family: 'Patrick Hand', cursive;
    margin-bottom: 2px;
    letter-spacing: 1px;
    }

    h2 {
    font-size: 19px;
    color: #fcfcd7;
    font-family: 'Patrick Hand', cursive;
    margin-left: 90px;
    margin-bottom: 1px;
    letter-spacing: 1px;
    }
`;

const ContainerImagem = styled.div`
    background-color: #67be9b;
    align-items: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
    margin-left:19px;

    img {
        width: 170px;
        height:170px;
        border-radius: 25px;
        border-style: solid;
        border-color: #f04158;
        border-width: 3px;
        box-shadow: 2px 2px 2px 2px #95d0b8;
    }
    
`;