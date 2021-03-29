import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../../../Redux/reducers';

import LoginPage from '../LoginPage';

const store = createStore(
  reducer as any,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

test('renders the correct content if isAuth=false', () => {
  const root = document.createElement('div');
  ReactDOM.render((<Provider store={store}><BrowserRouter><LoginPage isAuth={false} /></BrowserRouter></Provider>), root);

  expect(root.querySelector('h1')).toHaveTextContent('JS Band Store');
});
