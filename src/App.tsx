import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Redux/reducers';
import AppRouter from './Components/AppRouter/AppRouterContainer';
import './App.scss';

const store = createStore(
  reducer as any,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

const App: React.FC = () => (
  <Provider store={store}>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </Provider>
);

export default App;
