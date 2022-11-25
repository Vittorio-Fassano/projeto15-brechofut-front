import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HeaderNovoAnuncio() {
    return (
        <ContainerFooter>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <p>home</p>
                </Link>
                <Link to="/carrinho" style={{ textDecoration: 'none' }}>
                    <ion-icon name="log-out-outline"></ion-icon>
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
    top: 0;
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
        font-size:25px;
        color:#f04158;
        cursor:pointer;
    }
`;

/*
 ion-icon{
        position:absolute;
        font-size:24px;
        color:#f04158;
        cursor:pointer;
    }


*/