

// Import
import {
  SUBMIT_LOGINS,
  errorConnexion,
  SUBMIT_NEW_USER,
  messageSubmitNewUser,
  loginResponse,
  userIsConnected,
  stockTheToken,
} from 'src/store/reducer';

import axios from 'axios';
import decode from 'jwt-decode';

const sendLoginUser = 'http://92.243.8.69/api/login_check';
const sendNewUser = 'http://92.243.8.69/api/user/new';


const LoginMiddleware = store => next => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SUBMIT_LOGINS:
      console.log('axios: submitLogin');

      const obj = {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          data: JSON.stringify({
              'username': action.logins.username,
              'password': action.logins.password,
              })
      }
      //axios
      axios(sendLoginUser, obj)
        //en cas de succès
        .then((response) => {
          // Le token du membre connecté est stocké dans le localStorage
          const stockedToken = response.data.token;
          //{localStorage.setItem('connect_token', response.data.token)}
          // On récupère l'id du membre connecté
          const token = decode(response.data.token);
          const usernameIsConnected = token.username;
          const isAdmin = token.roles[0];
          console.log(token);
          //const userConnectedId = token;
          // On récupère les informations du membre connecté
          //console.log('connexion ok');
          store.dispatch(stockTheToken(stockedToken));
          store.dispatch(userIsConnected(usernameIsConnected));
          store.dispatch(userIsAdmin(isAdmin))
          store.dispatch(loginResponse('OK'));
          
      })
      //en cas d'échec
      .catch((error) => {
          console.error('erreur Connexion: ' + error);
          store.dispatch(loginResponse('NOPE'));
      });
      break;

      case SUBMIT_NEW_USER:
      //console.log('axios: submitNewUser');
          axios
          .post(sendNewUser, action.newUserRegister)
          // en cas de succès
          .then((resp) => {
              console.log('c est bon ca marche' + resp)
              store.dispatch(messageSubmitNewUser('OK'));
          })
          //en cas d'échec
          .catch((err) => {
              console.error('pas d\'envoi des informations:' + err);
              store.dispatch(messageSubmitNewUser('NOPE'));
          });
          break;


      default:
          break;
  }

  // Passe à ton voisin
  next(action);
};

export default LoginMiddleware;

