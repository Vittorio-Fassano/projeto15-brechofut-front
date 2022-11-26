import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NovoAnuncioFooter() {
    return (
        <ContainerFooter>
                <Link to="/fazer-anuncio" style={{ textDecoration: 'none' }}>
                    <h4>fazer anúncio</h4>
                </Link>
                <Link to="/carrinho" style={{ textDecoration: 'none' }}>
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    background-color: #fcfcd7;
    align-items: center;
    text-align: center;
    
   
    h4 {
        color: #f04158;
        font-family: 'Titan One', cursive;
        font-weight: 100;
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
        margin-left: 90px;
        letter-spacing: 2px;
        
        
    }

    ion-icon {
        margin-right:70px;
        font-size:22px;
        color:#f04158;
        cursor:pointer;
    }
`;