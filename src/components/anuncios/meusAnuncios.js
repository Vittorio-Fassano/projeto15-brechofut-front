import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import NovoAnuncioFooter from "./meusAnunciosFooter";
import Header2 from "../Header2";

export function MeusAnuncios() {
  const [meusAnuncios, setMeusAnuncios] = useState([]);
  const [att, setAtt] = useState(false);
  const { userInformations } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userInformations}`,
    },
  };

  useEffect(() => {
    const URLmeusanuncios = "https://brechofut.onrender.com/meus-anuncios";

    const promise = axios.get(URLmeusanuncios, config);
    promise.then((response) => {
      setMeusAnuncios(response.data);
    });
    promise.catch((error) => {
      alert("erro ao acessar anuncios");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [att]);

  return (
    <>
      <Header2 />
      <ContainerMain>
        {meusAnuncios.length > 0 ? (
          <>
            {meusAnuncios
              .map((anuncio) => (
                <TodosMeusAnuncios
                  info={anuncio}
                  key={MeusAnuncios.id}
                  setAtt={setAtt}
                  att={att}
                />
              ))
              .reverse()}
          </>
        ) : (
          <>
            <h4>Você ainda não fez nenhum anúncio!</h4>
          </>
        )}
      </ContainerMain>
      <NovoAnuncioFooter />
    </>
  );
}

function TodosMeusAnuncios(props) {
  const { userInformations } = useContext(UserContext);
  const { info, att, setAtt } = props;

  function removerProduto(callback) {
    const config = {
      headers: {
        Authorization: `Bearer ${userInformations}`,
      },
    };

    const URLdelete = `https://brechofut.onrender.com/meus-anuncios/${callback}`;

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
      <button onClick={() => removerProduto(info._id)}>X</button>
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
  margin-bottom: 95px;

  h4 {
    font-size: 20px;
    margin-top: 200px;
    color: #fcfcd7;
    font-family: "Patrick Hand", cursive;
    margin-bottom: 2px;
    letter-spacing: 1px;
  }
`;

const ContainerAnuncios = styled.div`
  background-color: #67be9b;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;

  button {
    height: 15px;
    width: 30px;
    border: none;
    background-color: #95d0b8;
    color: #f04158;

    cursor: pointer;
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
`;

const ContainerImagem = styled.div`
  background-color: #67be9b;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;

  img {
    width: 170px;
    height: 170px;
    border-radius: 25px;
    border-style: solid;
    border-color: #f1db42;
    border-width: 3px;
    box-shadow: 2px 2px 2px 2px #95d0b8;
  }
`;
