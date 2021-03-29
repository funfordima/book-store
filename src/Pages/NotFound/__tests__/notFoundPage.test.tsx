import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../../../Redux/reducers';

import NotFoundPage from '../NotFoundPage';

const store = createStore(
  reducer as any,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

test('renders the correct content if isAuth=false', () => {
  const root = document.createElement('div');
  ReactDOM.render((<Provider store={store}><BrowserRouter><NotFoundPage /></BrowserRouter></Provider>), root);
  const linkElement = root.querySelector('span');
  expect(linkElement?.textContent).toEqual('Back to Login');
  expect(root.querySelector('a')).not.toBeNull();
});
