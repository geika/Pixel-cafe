import React from 'react';

import FormErrors from './FormErrors';
import './login.scss';

class LostPass extends React.Component {

    state = {
        email: '',
        errors: {email: ''},
        emailValid: false,
        formValid: false,
    }


    handleChange = (event) => {
        const {name, value } = event.target;
        this.setState({[name]: value},
            () => {this.validateInput(name, value) });
    }


    validateInput(inputName, value) {
        let inputErrors = this.state.errors;
        let emailValid = this.state.emailValid;
        switch(inputName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                inputErrors.email = emailValid ? '' : 'l\'email n\'est pas valide';
                break;
            default:
                break;
            }

            this.setState({
                errors: inputErrors,
                emailValid: emailValid,
            }, this.validateForm);
    } 

    validateForm() {
        this.setState({formValid: this.state.emailValid});
    }

    errorClassname(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('email recovery handlesubmit')

        const { submitEmail } = this.props;
        console.log(this.props);

        const sendEmail = {
            email: this.state.email,
        };
        console.log(sendEmail);
        submitEmail(sendEmail);
    }

        render() {
        
            return(
                <div>
                    <div className="recover-text">
                    <h2>Vous avez oublié votre mot de passe?</h2>
                    <p>Renseignez votre email, nous vous enverrons un email afin de le réinitialiser</p>
                    </div>
                    <div className="panel panel-default">
                        <FormErrors errors={this.state.errors} />
                    </div>
                    <form className='recover-form' onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                    </label>
                    <div className={`form-group ${this.errorClassname(this.state.errors.email)}`}>
                    <input
                        className="input-recover"
                        type="email"
                        name="Email"
                        value={this.state.email}
                        onchange={this.handleChange}
                        placeholder="Entrez votre email"
                        />
                    </div>
                        <button
                        type="submit"
                        className="button-recover ripple"
                        //disabled={!this.state.formValid}
                        >
                            Soumettre
                        </button>
                    </form>
                    {messageEmailSubmit === 'OK'
                    && <p className="submit-success">Nouvel utilisateur enregistré</p>
                    }
                    {messageEmailSubmit === 'NOPE'
                    && <p className="submit-error">Nouvel utilisateur non enregistré</p>
                    }
                </div>
            )
        }
};

export default LostPass;
