import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import UserContext from "../../contexts/UserContext";
import FooterNovoAnuncio from '../anuncios/novoAnuncio/novoAnuncioFooter';
import Header from '../Header';

export function Home() {
    const [anuncios, setAnuncios] = useState([]);
    const { userInformations} = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformations}`
            }
        }

        const URLanuncios = "https://brechofut.onrender.com/home";

        const promise = axios.get(URLanuncios, config);
        promise.then((response) => {
            setAnuncios(response.data);
        });
        promise.catch(error => {
            console.log(error);
            alert("erro ao acessar anuncios");
        });
    }, []);

    return (
        <>
            <Header />

            <ContainerMain>
                {anuncios.map(anuncio => <TodosAnuncios info={anuncio} key={anuncios.id} />).reverse()}
            </ContainerMain>

            <FooterNovoAnuncio />
        </>
    )
}

function TodosAnuncios(props) {

    const { info } = props

    return (
        <ContainerAnuncios>
            <ContainerImagem>
                <img src={info.image} alt="fotoProduto" />
            </ContainerImagem>
            <p>{info.description}</p>
            <h2 >{info.value} R$</h2>
            <h3 >{info.user}</h3>
            <button>
                <h5>add</h5>
            </button>
        </ContainerAnuncios>
    );
}


const ContainerMain = styled.div`
    background-color: #67be9b ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 65px;
    margin-bottom: 80px;
`;

const ContainerAnuncios = styled.div`
    background-color: #67be9b;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    button {
        height: 20px;
        width: 30px;
        border: none;
        background-color: #95d0b8;
        color: #f04158;
        margin-left: 95px;
        margin-bottom:17px;
        margin-top: 3px;

        h5 {
            color: #f04158;
            font-family: 'Patrick Hand', cursive;
            font-size: 15px;
        }
    }
    
    p {
    font-size: 17px;
    color: #fcfcd7;
    font-family: 'Patrick Hand', cursive;
    margin-bottom: 2px;
    letter-spacing: 1px;
    margin-left: 15px;
    }

    h2 {
    font-size: 19px;
    color: #fcfcd7;
    font-family: 'Patrick Hand', cursive;
    margin-left: 90px;
    margin-bottom: 1px;
    letter-spacing: 1px;
    }

    h3 {
    font-size: 17px;
    color: #fcfcd7;
    font-family: 'Patrick Hand', cursive; 
    margin-left: 96px;
    letter-spacing: 1px;
    }
`;

const ContainerImagem = styled.div`
    background-color: #67be9b;
    align-items: center;
    justify-content: center;
    display: column;
    margin-bottom: 3px;
    margin-left:38px;
    

    img {
        width: 165px;
        height:165px;
        border-radius: 25px;
        border-style: solid;
        border-color: #f04158;
        border-width: 3px;
        box-shadow: 2px 2px 2px 2px #95d0b8;
    }
    
`;
//styled components
