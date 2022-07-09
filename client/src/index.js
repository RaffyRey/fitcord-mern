import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle} from './style/global-style'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

