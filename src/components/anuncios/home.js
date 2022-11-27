import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import FooterNovoAnuncio from "../anuncios/novoAnuncio/novoAnuncioFooter";
import HeaderHome from "../HeaderHome";

export function Home() {
  const [anuncios, setAnuncios] = useState([]);
  const { userInformations } = useContext(UserContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformations}`,
      },
    };

    const URLanuncios = "https://brechofut.onrender.com/home";

    const promise = axios.get(URLanuncios, config);
    promise.then((response) => {
      setAnuncios(response.data);
    });
    promise.catch((error) => {
      alert("erro ao acessar anuncios");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderHome />

      <ContainerMain>
        {anuncios
          .map((anuncio) => <TodosAnuncios info={anuncio} key={anuncios.id} />)
          .reverse()}
      </ContainerMain>

      <FooterNovoAnuncio />
    </>
  );
}

function TodosAnuncios(props) {
  const { info } = props;
  const { userInformations, userName } = useContext(UserContext);

  function adicionarCarrinho(callback) {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformations}`,
      },
    };

    const URLcarrinho = `https://brechofut.onrender.com/carrinho/${callback}`;

    if (info.user === userName) {
      return alert("Este produto ja é seu!");
    }

    const promise = axios.post(URLcarrinho, {}, config);
    promise.then((response) => {
      alert("adicionado no carrinho");
    });
    promise.catch((error) => {
      if (error.response.status === 500) {
        alert("produto indisponível no momento!");
      } else {
        alert("erro ao adicionar no carrinho", error);
      }
    });
  }

  return (
    <ContainerAnuncios>
      <ContainerImagem>
        <img src={info.image} alt="fotoProduto" />
      </ContainerImagem>
      <p>{info.description}</p>
      <h2>{info.value} R$</h2>
      <h3>{info.user}</h3>
      <button>
        <h5 onClick={() => adicionarCarrinho(info._id)}>add</h5>
      </button>
    </ContainerAnuncios>
  );
}

const ContainerMain = styled.div`
  background-color: #67be9b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 65px;
  margin-bottom: 80px;
  text-align: center;
`;

const ContainerAnuncios = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #67be9b;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  button {
    height: 20px;
    width: 30px;
    border: none;
    background-color: #95d0b8;
    color: #f04158;
    margin-bottom: 17px;
    margin-top: 3px;
    cursor: pointer;

    h5 {
      color: #f04158;
      font-family: "Patrick Hand", cursive;
      font-size: 15px;
    }
  }

  p {
    text-align: center;
    font-size: 17px;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;
    margin-bottom: 2px;
    letter-spacing: 1px;
  }

  h2 {
    text-align: center;
    font-size: 19px;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;

    margin-bottom: 1px;
    letter-spacing: 1px;
  }

  h3 {
    text-align: center;
    font-size: 17px;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;

    letter-spacing: 1px;
  }
`;

const ContainerImagem = styled.div`
  background-color: #67be9b;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;

  img {
    width: 165px;
    height: 165px;
    border-radius: 25px;
    border-style: solid;
    border-color: #f04158;
    border-width: 3px;
    box-shadow: 2px 2px 2px 2px #95d0b8;
  }
`;
