import React from 'react';
import PropTypes from 'prop-types';

import './login.scss';

class Register extends React.Component {
    
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        role: '1',
        passwordConfirm: '',
        errors: {email: '', username: '', password: '', passwordConfirm:''},
        emailValid: false,
        passwordValid: false,
        passwordConfirmValid: false,
        usernameValid: false,
        formValid: false,
        fieldBlur: {
            username: false,
            email: false,
            password: false,
            passwordValid: false,
        },
    }


    handleChange = (event) => {
        const {name, value } = event.target;
        this.setState({[name]: value},
            () => {this.validateInput(name, value) });
    }


    validateInput(inputName, value) {
        let inputErrors = this.state.errors;
        let usernameValid = this.state.usernameValid
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let passwordConfirmValid = this.state.passwordConfirmValid;

        switch(inputName) {
            case 'username':
                usernameValid = /^[a-zA-Z0-9]{6,20}/.test(value);
                inputErrors.username = usernameValid ? '' : 'NOPE'
                break;

            case 'email':
                emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
                console.log(emailValid);
                inputErrors.email = emailValid ? '' : 'NOPE';
                console.log(value);
                break;

            case 'password':
                passwordValid = /^[^\s]{8,20}$/.test(value);
                inputErrors.password = passwordValid ? '' : 'NOPE';
                console.log(value)
                break;

            case 'passwordConfirm':
                passwordConfirmValid = value === this.state.password;
                inputErrors.passwordConfirm = passwordConfirmValid ? '' : 'NOPE';
                break;

            default:
                break;
            }

            this.setState({
                errors: inputErrors,
                usernameValid: usernameValid,
                emailValid: emailValid,
                passwordValid: passwordValid,
                passwordConfirmValid: passwordConfirmValid,
            }, this.validateForm);
    } 

    validateForm() {
        this.setState({formValid: this.state.username && this.state.emailValid && this.state.passwordValid && this.state.passwordConfirmValid});
    }

    errorClassname(error) {
        return(error.length === 0 ? '' : 'error');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('handlesubmit register')

        const { submitNewUser } = this.props;
        console.log(this.props);

        const newUserRegister = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role,
        };
        console.log(newUserRegister);
        submitNewUser(newUserRegister);
    }

    handleBlur = (field) => () => {
        if (this.state.errors[field] !== '') {
            this.setState({
                fieldBlur: {...this.state.fieldBlur, [field]: true},
            })
        }  
        return null;
    }

    handleFocus = (field) => () => {
        if (this.state.errors[field] !== '') {
        this.setState({
            fieldBlur: {...this.state.fieldBlur, [field]: false},
        })
        }
    }

            render() {
                const { messageSubmit } = this.props;
                
                return (
                <div>
                    <div className="register-text">
                        <h2>Vous souhaitez créer un compte?</h2>
                        <p>Veuillez renseigner les champs suivants</p>
                    </div>
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <label className="form-label">
                        Username:
                    </label>
                        <input
                        className="input"
                        type="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Veuillez entrer un Username"
                        required
                        onBlur={this.handleBlur('username')}
                        onFocus={this.handleFocus('username')}
                        />
                        <div className="error-box">
                        {this.state.fieldBlur.username === true &&
                            <p className="error-field">Le username doit comporter entre 6 et 20 chiffres et/ou lettres</p>
                        }
                        </div>
                    <label className="form-label">
                        Email:
                    </label>
                        <input
                        className="input"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Veuillez saisir un email valide"
                        required
                        onBlur={this.handleBlur('email')}
                        onFocus={this.handleFocus('email')}
                        />
                        <div className="error-box">
                        {this.state.fieldBlur.email === true &&
                            <p className="error-field">L'email n'est pas valide</p>
                        }
                        </div>
                    <label className="form-label">
                        Mot de passe:
                    </label>
                        <input
                        className="input"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Veuillez entrer un mot de passe"
                        required
                        onBlur={this.handleBlur('password')}
                        onFocus={this.handleFocus('password')}
                        />
                        <div className="error-box">
                        {this.state.fieldBlur.password === true &&
                            <p className="error-field">Le mot de passe doit comporter entre 8 et 20 caractères</p>
                        }
                        </div>
                    <label className="form-label">
                        Vérification mot de passe:
                    </label>
                        <input
                        className="input"
                        type="password"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                        placeholder="Entrez à nouveau le mot de passe"
                        required
                        onBlur={this.handleBlur('passwordConfirm')}
                        onFocus={this.handleFocus('passwordConfirm')}
                        />
                        <div className="error-box">
                        {this.state.fieldBlur.passwordConfirm === true &&
                            <p className="error-field">La vérification du mot de passe ne correspond pas</p>
                        }
                        </div>
                        <button 
                        type='submit' 
                        className={`register-form-button btn ${this.state.formValid ? "" : "ripple-error"} ripple`}
                        disabled={!this.state.formValid}
                        >
                        S'enregistrer
                        </button>
                    </form>
                    {messageSubmit === 'OK'
                    && 
                    <p className="submit-success">Nouvel utilisateur enregistré</p>
                    }
                    {messageSubmit === 'NOPE'
                    && 
                    <p className="submit-error">Une erreur est survenue, nous n'avons pas pu vous enregistrer <br/>
                    Veuillez contacter le webmaster du site</p>
                    }
                </div>
                );
            }
}

Register.propTypes = {
    submitNewUser: PropTypes.func.isRequired,
};

export default Register;

