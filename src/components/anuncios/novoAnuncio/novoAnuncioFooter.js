import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterNovoAnuncio() {
    return (
        <ContainerFooter>
                <Link to="/meus-anuncios" style={{ textDecoration: 'none' }}>
                    <p>meus anúncios</p>
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
    position: absolute;
    bottom: 0;
    background-color: #fcfcd7;
    align-items: center;
    text-align: center;
    
   
    p {
        color: #f04158;
        font-family: 'Titan One', cursive;
        font-weight: 100;
        font-size: 15px;
        line-height: 20px;
        text-decoration: none;
        margin-left: 80px;
        
        
    }

    ion-icon {
        margin-right:70px;
        font-size:26px;
        color:#f04158;
        cursor:pointer;
    }
`;


/*

h2 {
        color: #f04158;
        font-family: 'Titan One', cursive;
        font-weight: 500;
        font-size: 25px;
        line-height: 20px;
        text-decoration: none;
        margin-bottom: 10px;
        margin-top: 15px;
        letter-spacing: 4px;
        margin-left: 670px;
    }




*/
//<h2>carrinho</h2>

/*
<Link to="/carrinho" style={{ textDecoration: 'none' }}>
                    <h2>carrinho</h2>
                </Link>
                <Link to="/carrinho" style={{ textDecoration: 'none' }}>
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>


*/
/* 

 ion-icon{
        position:absolute;
        font-size:24px;
        color:#f04158;
        cursor:pointer;
    }



*/