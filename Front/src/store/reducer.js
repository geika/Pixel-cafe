const initialState = {
  pathName: '',
  token: '',
  isConnected: false,
  dataGames: [],
  dataMenu: [],
  dataEvents: [],
  eventSubmitView: true,
  usernameIsConnected: '',
  messageSubmit: '',
};

/**
 * Types
 */
const SET_PATH_NAME = 'SET_PATH_NAME';
const SET_DISPLAY_NAME = 'SET_DISPLAY_NAME';
const SET_DISPLAY_SUBTITLE = 'SET_DISPLAY_SUBTITLE';
export const LOAD_GAMES = 'LOAD_GAMES';
const RECEIVE_DATA_GAMES = ' RECEIVE_DATA_GAMES';
export const LOAD_MENU = 'LOAD_MENU';
const RECEIVE_DATA_MENU = 'RECEIVE_DATA_MENU';
export const LOAD_EVENTS = 'LOAD_EVENTS';
const RECEIVE_DATA_EVENTS = 'RECEIVE_DATA_EVENTS';
export const SEND_MSG = 'SEND_MSG';
export const SEND_VOTE = 'SEND_VOTE';
export const SEND_DATA_EVENT = 'SEND_DATA_EVENT';
export const SET_EVENT_SUBMITED = 'SET_EVENT_SUBMITED';


const USER_IS_CONNECTED = 'USER_IS_CONNECTED';
const RECEIVED_TOKEN = 'RECEIVED_TOKEN';
const SET_CONNECTED = 'SET_CONNECTED';

export const SUBMIT_NEW_USER = 'SUBMIT_NEW_USER';
const MESSAGE_SUBMIT_NEW_USER = 'MESSAGE_SUBMIT_NEW_USER';
export const SUBMIT_LOGINS = 'SUBMIT_LOGINS';
const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
const STOCK_THE_TOKEN = 'STOCK_THE_TOKEN';
const USER_DISCONNECT = 'USER_DISCONNECT';
const USER_IS_ADMIN = 'USER_IS_ADMIN';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PATH_NAME:
      return {
        ...state,
        pathName: action.pathName,
      };

    case SET_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.label,
      };

    case SET_DISPLAY_SUBTITLE:
      return {
        ...state,
        displaySubtitle: action.subtitle,
      };

    case RECEIVE_DATA_GAMES:
      return {
        ...state,
        dataGames: action.dataGames,
      };

    case RECEIVE_DATA_MENU:
      return {
        ...state,
        dataMenu: action.dataMenu,
      };

    case RECEIVE_DATA_EVENTS:
      return {
        ...state,
        dataEvents: action.dataEvents,
      };

    case SET_EVENT_SUBMITED:
      return {
        ...state,
        eventSubmitView: !state.eventSubmitView,
      };

    case RECEIVED_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case USER_IS_CONNECTED:
    { localStorage.setItem('userName', action.usernameIsConnected);
      return {
        ...state,
        isConnected: true,
        usernameIsConnected: action.usernameIsConnected,
      };
    }

    case LOGIN_RESPONSE:
      return {
        ...state,
        message: action.message,
      };

    case MESSAGE_SUBMIT_NEW_USER:
      return {
        ...state,
        messageSubmit: action.message,
      };

    case STOCK_THE_TOKEN:
    { localStorage.setItem('token', action.stockedToken);
      return {
        ...state,
        token: action.stockedToken,
      };
    }

    case USER_DISCONNECT:
      return {
        ...state,
        token: '',
        usernameIsConnected: '',
        isAdmin: '',
      };

    case USER_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.isAdmin,
      };

    case SET_CONNECTED:
      return {
        ...state,
        isConnected: action.toggle,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const setMenuName = pathName => ({
  type: SET_PATH_NAME,
  pathName,
});

export const setDisplayNane = label => ({
  type: SET_DISPLAY_NAME,
  label,
});

export const setDisplaySubtitle = subtitle => ({
  type: SET_DISPLAY_SUBTITLE,
  subtitle,
});

export const getDataGames = () => ({
  type: LOAD_GAMES,
});

export const receiveDataGames = dataGames => ({
  type: RECEIVE_DATA_GAMES,
  dataGames,
});

export const getDataMenu = () => ({
  type: LOAD_MENU,
});

export const receiveDataMenu = dataMenu => ({
  type: RECEIVE_DATA_MENU,
  dataMenu,
});

export const getDataEvents = () => ({
  type: LOAD_EVENTS,
});

export const receiveDataEvents = dataEvents => ({
  type: RECEIVE_DATA_EVENTS,
  dataEvents,
});

export const sendMsg = msg => ({
  type: SEND_MSG,
  msg,
});

export const sendData = data => ({
  type: SEND_DATA_EVENT,
  data,
});

export const setEventSubmited = () => ({
  type: SET_EVENT_SUBMITED,
});

export const sendVote = (vote, eventId, token) => ({
  type: SEND_VOTE,
  vote,
  eventId,
  token,
});

export const submitLogins = logins => ({
  type: SUBMIT_LOGINS,
  logins,
});

export const submitNewUser = newUserRegister => ({
  type: SUBMIT_NEW_USER,
  newUserRegister,
});

export const messageSubmitNewUser = message => ({
  type: MESSAGE_SUBMIT_NEW_USER,
  message,
});

export const loginResponse = message => ({
  type: LOGIN_RESPONSE,
  message,
});

export const userIsConnected = usernameIsConnected => ({
  type: USER_IS_CONNECTED,
  usernameIsConnected,
});

export const stockTheToken = stockedToken => ({
  type: STOCK_THE_TOKEN,
  stockedToken,
});

export const userDisconnect = () => ({
  type: USER_DISCONNECT,
});

export const userIsAdmin = isAdmin => ({
  type: USER_IS_ADMIN,
  isAdmin,
})

export const setConnected = toggle => ({
  type: SET_CONNECTED,
  toggle,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
