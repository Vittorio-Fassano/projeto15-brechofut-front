import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HeaderNovoAnuncio() {
    return (
        <ContainerFooter>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <h4>home</h4>
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
    
    
    h4 {
        color: #f04158;
        font-family: 'Titan One', cursive;
        font-weight: 100;
        font-size: 19px;
        line-height: 20px;
        text-decoration: none;
        margin-left: 90px;
        letter-spacing: 4px;
        
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