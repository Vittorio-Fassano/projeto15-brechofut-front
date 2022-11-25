import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { useState, /*userContext,*/ useEffect} from 'react';
import UserContext from '../contexts/UserContext';
import GlobalStyle from '../style/GlobalStyle';
import { Cadastro } from './auth/Cadastro';
import { Entrar } from './auth/Entrar';
import { NovoAnuncio } from './anuncios/novoAnuncio/novoAnuncio';
import { Home } from './anuncios/home';
import { MeusAnuncios } from './anuncios/meusAnuncios';
import {Carrinho} from './carrinho';


function App() {
    const tokenStorage = JSON.parse(localStorage.getItem('token'));
    //const nameStorage = JSON.parse(localStorage.getItem('name'));
    const [userInformations, setUserInformations] = useState(tokenStorage); 
    //const [userName, setUserName] = useState(nameStorage);


    useEffect(() => {
        if (tokenStorage) {
            setUserInformations(tokenStorage);
            //setUserName(nameStorage);
        }
    }, []);

    const contextValue = { userInformations, setUserInformations, /*userName, setUserName*/};

    return (
            <>
                <GlobalStyle />
                    <UserContext.Provider value={contextValue}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<Entrar />}/>
                                <Route path='/cadastro' element={<Cadastro />}/>
                                <Route path='/fazer-anuncio' element={<NovoAnuncio />}/>
                                <Route path='/home' element={<Home />}/>
                                <Route path='/meus-anuncios' element={<MeusAnuncios />}/>
                                <Route path='/carrinho' element={<Carrinho />}/>
                                
                            </Routes>
                        </BrowserRouter>
                    </UserContext.Provider>
            </>
        )
}

export default App;




//<Route path='/' element={<Entrar />}/>
//<Route path='/fazer-anuncio' element={<FazerAnuncio />}/>