import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Header2 from "./Header2";

export function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [att, setAtt] = useState(false);
  const [res, setRes] = useState(0);
  const { userInformations } = useContext(UserContext);
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${userInformations}`,
    },
  };

  let soma = 0;
  function total() {
    carrinho.forEach((element) => {
      soma += parseInt(element.value);
    });
  }

  useEffect(() => {
    const URLcarrinho = "https://brechofut.onrender.com/carrinho";

    const promise = axios.get(URLcarrinho, config);
    promise.then((response) => {
      setCarrinho(response.data);
    });
    promise.catch((error) => {
      alert("erro ao acessar carrinho");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [att]);

  function apagarAnuncio() {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformations}`,
      },
    };

    carrinho.forEach((element) => {
      const URLdelete = `https://brechofut.onrender.com/meus-anuncios/${element._id}`;

      const promise = axios.delete(URLdelete, config);
      promise.then((response) => {});
      promise.catch((error) => {
        alert("erro ao remover produto");
      });
    });
  }

  function apagarCarrinho() {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformations}`,
      },
    };

    carrinho.forEach((element) => {
      const URLdelete = `https://brechofut.onrender.com/carrinho/${element._id}`;

      const promise = axios.delete(URLdelete, config);
      promise.then((response) => {});
      promise.catch((error) => {
        alert("erro ao remover carrinho");
      });
    });
  }

  return (
    <>
      <Header2 />
      <ContainerMain>
        {carrinho.length > 0 ? (
          <>
            {carrinho
              .map((carrinhos) => (
                <TodosAnuncios
                  info={carrinhos}
                  key={carrinho.id}
                  setAtt={setAtt}
                  att={att}
                />
              ))
              .reverse()}
          </>
        ) : (
          <h4>Seu carrinho está vazio!</h4>
        )}
      </ContainerMain>
      <ContainerButton>
        <button
          onClick={() => {
            if (res === 0) {
              total();
            }
            setRes(1);

            if (
              window.confirm(`Deseja finalizar compra no valor de R$ ${soma}`)
            ) {
              alert("Obrigado! Compra confirmada!");
              apagarCarrinho();
              apagarAnuncio();
              navigate("/home");
            } else {
              setRes(0);
              soma = 0;
            }
          }}
        >
          finalizar compra
        </button>
      </ContainerButton>
    </>
  );
}

function TodosAnuncios(props) {
  const { info, att, setAtt } = props;
  const { userInformations } = useContext(UserContext);

  function removerCarrinho(callback) {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformations}`,
      },
    };

    const URLdelete = `https://brechofut.onrender.com/carrinho/${callback}`;

    const promise = axios.delete(URLdelete, config);
    promise.then((response) => {
      setAtt(!att);
    });
    promise.catch((error) => {
      alert("erro ao remover produto");
    });
  }

  return (
    <ContainerAnuncios>
      <ContainerImagem>
        <img src={info.image} alt="fotoProduto" />
      </ContainerImagem>
      <p>{info.description}</p>
      <h2>R$ {info.value}</h2>
      <h3>{info.user}</h3>
      <button onClick={() => removerCarrinho(info._id)}>X</button>
    </ContainerAnuncios>
  );
}

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
    border-color: #fcfcd7;
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
    height: 70px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    position: fixed;
    bottom: 0;
    padding-left: 15px;
    font-size: 20px;
    border: none;
    text-align: center;
    align-items: center;
    background-color: #f04158;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;
    font-weight: 700;
    letter-spacing: 3px;
    cursor: pointer;
  }
`;

const ContainerAnuncios = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #67be9b;
  align-items: center;
  justify-content: center;
  margin: 15px;
  margin-bottom: 53px;

  &:first-child {
    margin-top: 90px;
  }

  p {
    font-size: 17px;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;
    margin-bottom: 2px;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 19px;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;

    margin-bottom: 1px;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 17px;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;

    letter-spacing: 1px;
  }

  button {
    height: 15px;
    width: 30px;
    border: none;
    background-color: #95d0b8;
    color: #f04158;

    margin-top: 5px;
    cursor: pointer;
  }
`;

const ContainerMain = styled.div`
  margin-bottom: 80px;

  h4 {
    font-size: 20px;
    margin-top: 240px;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;
    margin-bottom: 2px;
    letter-spacing: 1px;
    text-align: center;
  }
`;
