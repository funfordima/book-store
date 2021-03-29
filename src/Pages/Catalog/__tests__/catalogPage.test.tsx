import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../../../Redux/reducers';

import CatalogPage from '../CatalogPageContainer';

const defaultState = {
  isAuth: 'mm8am0skxgmp8inwuqo3i',
  isLoading: false,
  error: '',
  user: {
    avatar: "https://api.hello-avatar.com/adorables/100/nick.png",
    username: "Nick"
  },
  searchBook: '',
  books: [{
    author: "JuanMa Garrido",
    count: 13,
    cover: "https://jsbooks.revolunet.com/img/cover-apuntes-javascript-intermedio.png",
    description: "(En Castellano) Revision de conceptos (actuales) de javascript desde basicos hasta un nivel intermedio",
    id: "1",
    level: "Intermediate",
    price: 14.94,
    tags: ["core"],
    title: "Apuntes de Javascript I - Nivel Intermedio",
  },
  {
    author: "JuanMa Garrido",
    count: 9,
    cover: "https://jsbooks.revolunet.com/img/cover-apuntes-javascript-avanzado.png",
    description: "(En Castellano) Revision de conceptos (actuales) de javascript avanzados",
    id: "2",
    level: "Advanced",
    price: 34.74,
    tags: ["core"],
    title: "Apuntes de Javascript I - Nivel Avanzado",
  }
  ],
  fetchBookErr: '',
  isLoad: false,
  filteredBooks: null,
  booksInCart: [],
  book: {},
  LoadBook: true,
  purchaseSuccess: '',
  purchaseError: '',
};

const store = createStore(
  reducer as any,
  defaultState,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

test('renders the correct content', () => {
  const root = document.createElement('div');
  ReactDOM.render((<Provider store={store}><BrowserRouter><CatalogPage /></BrowserRouter></Provider>), root);
  const linkElement = root.querySelector('#search-book');
  expect(linkElement).not.toBeNull();
  expect(linkElement?.getAttribute('placeholder')).toEqual('Search book');
});
