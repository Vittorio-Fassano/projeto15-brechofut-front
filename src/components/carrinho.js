import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import UserContext from "../contexts/UserContext";
import Header from './Header';

export function Carrinho() {
    const [carrinho, setCarrinho] = useState([]);
    const { userInformations } = useContext(UserContext);
    

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformations}`
            }
        }

        const URLcarrinho = "https://brechofut.onrender.com/carrinho";

        const promise = axios.get(URLcarrinho, config);
        promise.then((response) => {
            setCarrinho(response.data);
            console.log(carrinho);
        });
        promise.catch(error => {
            console.log(error);
            alert("erro ao acessar carrinho");
        });

            
            
    }, []);

    
    return (
        <>
            <Header />
            <ContainerMain>
                {carrinho.map(carrinhos => <TodosAnuncios info={carrinhos} key={carrinho.id} />).reverse()}
            </ContainerMain>
            <ContainerButton>
                <button>finalizar compra</button>
            </ContainerButton>

        </>
    )
}

function TodosAnuncios(props) {
    const { info } = props;
    const { userInformations } = useContext(UserContext);

    function adicionarCarrinho(callback) {

        const config = {
            headers: {
                Authorization: `Bearer ${userInformations}`
            }
        }
        console.log(callback);

        const URLcarrinho = `https://brechofut.onrender.com/carrinho/${callback}`;

        const promise = axios.post(URLcarrinho, {}, config);
        promise.then((response) => {
            console.log("adicionado no carrinho", response)

        });
        promise.catch(error => {
            console.log(error);
            alert("erro ao adicionar no carrinho", error);
        });
    }

    return (
        <ContainerAnuncios>
            <ContainerImagem>
                <img src={info.image} alt="fotoProduto" />
            </ContainerImagem>
            <p>{info.description}</p>
            <h2 >{info.value} R$</h2>
            <h3 >{info.user}</h3>
            <button>X</button>
        </ContainerAnuncios>
    );
}

//styled components
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
const ContainerButton = styled.div`
    background-color: #67be9b;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;

    button {
        width: 100vw;
        height:70px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
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
        
`

const ContainerAnuncios = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #67be9b;
    align-items: center;
    justify-content: center;
    margin: 15px;
    margin-bottom: 45px;
    
    &:first-child{
        margin-top: 90px;
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
    margin-left: 40px;
    margin-bottom: 1px;
    letter-spacing: 1px;
    }

    h3 {
    font-size: 17px;
    color: #fcfcd7;
    font-family: 'Patrick Hand', cursive; 
    margin-left: 40px;
    letter-spacing: 1px;
    }

    button {
        height: 15px;
        width: 30px;
        border: none;
        background-color: #95d0b8;
        color: #f04158;
        margin-left: 40px;
        margin-top: 5px;
        cursor: pointer;
    }
`;

const ContainerMain = styled.div`
    margin-bottom: 80px;
`;