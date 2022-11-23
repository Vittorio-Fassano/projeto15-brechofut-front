import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { useState, userContext, useEffect} from 'react';

import UserContext from '../contexts/UserContext';
import GlobalStyle from '../style/GlobalStyle';
import { Cadastro } from './auth/Cadastro';
import { Entrar } from './auth/Entrar';



function App() {
    const tokenStorage = JSON.parse(localStorage.getItem('token'));
    const nameStorage = JSON.parse(localStorage.getItem('name'));
    const [userInformations, setUserInformations] = useState(tokenStorage); 
    const [userName, setUserName] = useState(nameStorage);


    useEffect(() => {
        if (tokenStorage) {
            setUserInformations(tokenStorage);
            //setUserName(nameStorage);
        }
    }, []);

    const contextValue = { userInformations, setUserInformations, userName, setUserName};

    return (
            <>
                <GlobalStyle />
                    <UserContext.Provider value={contextValue}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<Entrar />}/>
                                <Route path='/cadastro' element={<Cadastro />}/>
                                
                            </Routes>
                        </BrowserRouter>
                    </UserContext.Provider>
            </>
        )
}

export default App;




//<Route path='/' element={<Entrar />}/>
//<Route path='/fazer-anuncio' element={<FazerAnuncio />}/>