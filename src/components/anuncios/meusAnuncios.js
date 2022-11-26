import { useState, /*useEffect,*/ useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import UserContext from "../../contexts/UserContext";
import NovoAnuncioFooter from './meusAnunciosFooter';
import Header from '../Header';

export function MeusAnuncios() {

    return (
        <>
            < Header/>

            <NovoAnuncioFooter/>
        </>
    )
}

//styled components
