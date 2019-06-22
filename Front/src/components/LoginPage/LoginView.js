import React from 'react';
import { Redirect } from 'react-router';

import './login.scss';

class LoginView extends React.Component {

    state = {
        usernameLogin: '',
        passwordLogin: '',
        errorLogin: {usernameLogin: '', passwordLogin: '',},
        usernameLoginValid: '',
        passwordLoginValid: '',
        formValid: false,
        fieldLoginBlur: {
            usernameLogin: false,
            passwordLogin: false,
        },

    }

    handleChange = (event) => {
        const {name, value } = event.target;
        this.setState({[name]: value},
            () => {this.validateInput(name, value) });
    }

    validateInput(inputName, value) {
        let inputErrorLogin = this.state.errorLogin;
        let usernameLoginValid = this.state.usernameLoginValid
        let passwordLoginValid = this.state.passwordLoginValid;

        switch(inputName) {
            case 'usernameLogin':
                usernameLoginValid = /^[a-zA-Z0-9]{6,20}$/.test(value);
                inputErrorLogin.usernameLogin = usernameLoginValid ? '' : 'NOPE';
                break;

            case 'passwordLogin':
                passwordLoginValid = /.{8,20}/.test(value);
                inputErrorLogin.passwordLogin = passwordLoginValid ? '' : 'NOPE';
                break;

            default:
                break;
            }

            this.setState({
                errorLogin: inputErrorLogin,
                usernameLoginValid: usernameLoginValid,
                passwordLoginValid: passwordLoginValid,
            }, this.validateForm);
    } 

    validateForm() {
        this.setState({formValid: this.state.usernameLoginValid && this.state.passwordLoginValid });
    }

    errorClassname(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { submitLogins } = this.props;

            const logins = {
                username: this.state.usernameLogin,
                password: this.state.passwordLogin,
            };
            submitLogins(logins);
    }

    handleBlur = (field) => () => {
        if (this.state.errorLogin[field] !== '') {
            this.setState({
                fieldLoginBlur: {...this.state.fieldLoginBlur, [field]: true},
            })
        }  
        return null
    }

    handleFocus = (field) => () => {
        if (this.state.errorLogin[field] !== ''){
        this.setState({
            fieldLoginBlur: {...this.state.fieldLoginBlur, [field]: false},
        })
        }
    }

    disconnect = () => {
        userDisconnect();
        localStorage.clear();
        return <Redirect to='/login' />
    }
    
    render() {

        const { message, usernameIsConnected } = this.props;
        
      return (
        <div>
          {localStorage.getItem('userName') === null
            ? (
              <React.Fragment>
                <div className="login-text">
                  <h2>Vous souhaitez vous connecter?</h2>
                  <p>Veuillez renseigner les champs suivants</p>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form">
                  <label className="form-label">
                      Username:
                  </label>
                  <input
                    className="input"
                    value={this.state.usernameLogin} 
                    onChange={this.handleChange}
                    type="text"
                    placeholder="veuillez entrer votre username"
                    name="usernameLogin"
                    required
                    onBlur={this.handleBlur('usernameLogin')}
                    onFocus={this.handleFocus('usernameLogin')}
                  />
                  <div className="error-box">
                    {this.state.fieldLoginBlur.usernameLogin === true &&
                      <p className="error-field">Le username ne semble pas avoir le format habituel</p>
                  }
                  </div>
                  <label className="form-label">
                          Password:
                  </label>
                  <input
                    className="input"
                    value={this.state.passwordLogin}
                    onChange={this.handleChange}
                    type="password"
                    placeholder="Veuillez entrer votre password"
                    name="passwordLogin"
                    required
                    onBlur={this.handleBlur('passwordLogin')}
                    onFocus={this.handleFocus('passwordLogin')}
                  />
                  <div className="error-box">
                    {this.state.fieldLoginBlur.passwordLogin === true &&
                      <p className="error-field">Le mot de passe ne semble pas avoir la longueur habituelle</p>
                  }
                  </div>
                  <button
                    className={`loginView-form-button btn ${this.state.formValid ? "" : "ripple-error"} ripple`}
                    type='submit'
                    disabled={!this.state.formValid}
                  >
                      Connexion
                  </button>
                </form>
                <div className="connexion-message">
                  {message === 'NOPE'
                    && <p className="submit-error">L'identifiant ou le mot de passe ne correspondent pas</p>
                    }
                      </div>
                  </React.Fragment>
                ) : (
              <React.Fragment>
                  <p className="submit-success-loginview">Bonjour {localStorage.getItem('userName')}! <br></br>Vous vous êtes connecté avec succès!</p>
                  <button 
                    className="loginView-disconnect-button ripple"
                    type="button"
                    onClick={() => {localStorage.clear()}}
                    >
                    Deconnexion
                    </button>
              </React.Fragment>
                  )}
            </div>
        );
    }
}


export default LoginView;


