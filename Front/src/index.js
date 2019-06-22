/**
 * NPM import
 */
import '@babel/polyfill';
import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/containers/App';

import store from 'src/store';

/**
 * Render
 */
// 1. Le composant racine à rendre (le tronc de l'arbre)
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// 2. La cible dans le DOM
const target = document.getElementById('root');

// rendu de react-dom : react VERS dom
render(rootComponent, target);
