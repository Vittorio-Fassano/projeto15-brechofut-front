import { useState, /*useEffect,*/ useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import UserContext from "../../contexts/UserContext";
import HeaderNovoAnuncio from '../anuncios/novoAnuncio/novoAnuncioHeader';
import NovoAnuncioFooter from './meusAnunciosFooter';

export function MeusAnuncios() {

    return (
        <>
            < HeaderNovoAnuncio/>

            <NovoAnuncioFooter/>
        </>
    )
}

//styled components
