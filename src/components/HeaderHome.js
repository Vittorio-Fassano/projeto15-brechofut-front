import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function HeaderHome() {
  const { setUserInformations } = useContext(UserContext);
  const navigate = useNavigate();

  function logOut() {
    window.localStorage.removeItem("token");
    window.localStorage.clear("token");
    setUserInformations(null);
    navigate("/");
  }

  return (
    <ContainerHeader>
      <Link to="/fazer-anuncio" style={{ textDecoration: "none" }}>
        <h4>fazer anúncio</h4>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <ion-icon name="log-out-outline" onClick={() => logOut()}></ion-icon>
      </Link>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: #fcfcd7;
  align-items: center;
  text-align: center;

  h4 {
    color: #f04158;
    font-family: "Titan One", cursive;
    font-weight: 100;
    font-size: 19px;
    line-height: 20px;
    text-decoration: none;
    margin-left: 75px;
    letter-spacing: 2px;
  }

  ion-icon {
    margin-right: 70px;
    font-size: 25px;
    color: #f04158;
    cursor: pointer;
  }
`;
