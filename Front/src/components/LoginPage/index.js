import React, { useState, useContext } from 'react';
import Proptypes from 'prop-types';

import LoginView from 'src/containers/LoginView';
import Register from 'src/containers/Register';



import './login.scss';

const DisplayContext = React.createContext();

const LoginPage = () => {
    const [view, setView] = useState('login');

    const login = () => {
        setView('login');
    };

    const register = () => {
        setView('register');
    };

    const lostPass = () => {
        setView('lostPass')
    };

        return(
        <section className="login-section">
            <div className="nav-login">
                <DisplayContext.Provider
                    value={{view, login, register, lostPass}}
                >
                <Display />
                </DisplayContext.Provider>
            </div>

        </section>
        );
};


const Display = () => {
    const { view, login, register, lostPass } = useContext(DisplayContext);

    return (
        <div id="login-global">
            <div className="button-box">
                <button className={`log-button${view === 'login' ? '' : '-inactive'} ripple `} onClick={login}>Se connecter</button>
                <button className={`log-button${view === 'register' ? '' : '-inactive'} ripple `} onClick={register}>S'enregistrer</button>
                {/* <button className={`log-button${view === 'lostPass' ? '' : '-inactive'} ripple `} onClick={lostPass}>Mot de passe oublié</button> */}
            </div>
        <div id="login-container">
        <div id="view-page">
            { view === 'login' && (
                <LoginView />
            )
            }
            { view === 'register' && (
                <Register />
            )
            }
            { view === 'lostPass' && (
                <LostPass />
            )
            }
            
        </div>
    </div>
    </div>
    );
};


export default LoginPage;


