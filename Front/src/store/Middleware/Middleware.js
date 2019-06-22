import {
  LOAD_GAMES,
  receiveDataGames,
  receiveDataMenu,
  LOAD_MENU,
  LOAD_EVENTS,
  receiveDataEvents,
  SEND_MSG,
  SEND_DATA_EVENT,
  getDataEvents,
  setEventSubmited,
  SEND_VOTE,
} from 'src/store/reducer';

import axios from 'axios';


const menuUrl = 'http://92.243.8.69/api/types';
const gamesUrl = 'http://92.243.8.69/api/consoles';
const eventsUrl = 'http://92.243.8.69/api/events';
const sendMsgUrl = 'http://92.243.8.69/api/comment/new';
const sendDataEventUrl = 'http://92.243.8.69/api/event/new';
const sendVoteUrl = 'http://92.243.8.69/api/event/vote/';


const Middleware = store => next => (action) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  };

  switch (action.type) {
    case LOAD_GAMES:
      axios
        .get(gamesUrl)
        .then(({ data }) => {
          store.dispatch(receiveDataGames(data));
        })
        .catch(() => {
          console.error('Error receiveDataGames');
        });
      break;

    case LOAD_MENU:
      axios
        .get(menuUrl)
        .then(({ data }) => {
          store.dispatch(receiveDataMenu(data));
        })
        .catch(() => {
          console.error('Error receiveDataMenu');
        });
      break;

    case LOAD_EVENTS:
      axios
        .get(eventsUrl)
        .then(({ data }) => {
          store.dispatch(receiveDataEvents(data));
        })
        .catch(() => {
          console.error('Error receiveDataMenu');
        });
      break;

    case SEND_MSG:
      axios
        .post(sendMsgUrl, action.msg)
        .then(() => {
          store.dispatch(getDataEvents());
          console.log('cool ca marche');
        })
        .catch(() => {
          console.error('puree');
        });
      break;

    case SEND_VOTE:
      axios
        .post(sendVoteUrl + action.eventId, action.vote)
        .then(() => {
          store.dispatch(getDataEvents());
          console.log('cool ca marche');
        })
        .catch(() => {
          console.error('puree');
          console.log(config);
        });
      break;

    case SEND_DATA_EVENT:
      axios
        .post(sendDataEventUrl, action.data)
        .then(() => {
          store.dispatch(setEventSubmited());
          console.log('cool ca marche');
        })
        .catch(() => {
          console.error('puree');
        });
      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default Middleware;
