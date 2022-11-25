import { useState, /*useEffect,*/ useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import UserContext from "../../contexts/UserContext";
import FooterNovoAnuncio from '../anuncios/novoAnuncio/novoAnuncioFooter';
import HomeHeader from '../anuncios/homeHeader';

export function Home() {

    return (
        <>
            <HomeHeader />

            <FooterNovoAnuncio />
        </>
    )
}

//styled components
