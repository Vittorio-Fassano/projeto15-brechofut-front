import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterNovoAnuncio() {
    return (
        <ContainerFooter>
                <Link to="/carrinho" style={{ textDecoration: 'none' }}>
                    <h2>carrinho</h2>
                </Link>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <h4>home</h4>
                </Link>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    width: 100%;
    margin-top: 13px;
    height: 80px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    background-color: #fcfcd7;
    align-items: center;
    text-align: center;
    
    ion-icon{
        position:absolute;
        font-size:24px;
        color:#f04158;
        cursor:pointer;
    }

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
    }

    h4 {
        color: #67be9b;
        font-family: 'Titan One', cursive;
        font-weight: 200;
        font-size: 15px;
        line-height: 20px;
        text-decoration: none;
        margin-bottom: 10px;
        margin-top: 15px;
        letter-spacing: 6px;
        margin-left: 12px;
        
    
    }
`;
