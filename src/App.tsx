import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Redux/reducers';
import AppRouter from './Components/AppRouter/AppRouterContainer';
import './App.scss';

const store = createStore(reducer);

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
);

export default App;
