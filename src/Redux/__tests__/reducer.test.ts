import reducer from '../reducers';
import { State, Book, User, CartBooks } from '../interfaces';
import { 
  updateCurrentUser,
  setUserSuccess,
  setUserFailure,
  setSearchBook,
  getBookSuccess,
  getBookStarted,
  getBookFailure,
  setBooksFiltered, 
  setBooksInCart, 
  getBookByIdStarted, 
  getBookByIdFailure,
  getBookDescription,  
  setPurchaseSuccess, 
  setPurchaseError, 
 } from '../actions';

describe('test action creators', () => {
  let state: State;

  beforeAll(() => {
    state = {
      isAuth: false,
      isLoading: false,
      error: '',
      user: {} as User,
      searchBook: '',
      books: [] as Book[],
      fetchBookErr: '',
      isLoad: false,
      filteredBooks: null,
      booksInCart: [] as CartBooks[],
      book: {} as Book,
      LoadBook: false,
      purchaseSuccess: '',
      purchaseError: '',
    };
  });

  test('test action updateCurrentUser', () => {  
    expect(state.isAuth).toBeFalsy();
    const newState = reducer(state, updateCurrentUser(true));
    expect(newState.isAuth).toBeTruthy();
  });

  test('test action setUserSuccess', () => {  
    expect(state.user).not.toHaveProperty('token');
    expect(state.user).not.toHaveProperty('username');
    
    const userData = {
      token: 'mm8am0skxgmp8inwuqo3i',
      avatar: "https://api.hello-avatar.com/adorables/100/nick.png",
      username: "Nick"
    };

    const newState = reducer(state, setUserSuccess(userData));
    expect(newState.user).toHaveProperty('token');
    expect(newState.user).toHaveProperty('username', 'Nick');
    expect(newState.isLoading).toBeFalsy();
  });

  test('test action setUserFailure', () => {  
    expect(state.error).toBeFalsy();
    const newState = reducer(state, setUserFailure('Something went wrong'));
    expect(newState.error).toBeTruthy();
  });

  test('test action setSearchBook', () => {  
    expect(state.searchBook).toBeFalsy();
    const newState = reducer(state, setSearchBook('Find some books'));
    expect(newState.searchBook).toBeTruthy();
    expect(newState.searchBook).toEqual('Find some books');
  });

  test('test action getBookSuccess', () => {  
    expect(state.books).toEqual(expect.any(Array));
    
    const booksData = [{
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
    }];

    const newState = reducer(state, getBookSuccess(booksData));
    expect(newState.books).toHaveLength(2);
    expect(newState.books).toEqual(expect.arrayContaining(booksData));
    expect(newState.isLoad).toBeFalsy();
  });

  test('test action getBookStarted && getBookSuccess', () => {  
    expect(state.isLoad).toBeFalsy();
    expect(state.fetchBookErr).toBeFalsy();
    
    const booksData = [{
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
    }];

    const tempState = reducer(state, getBookStarted());

    expect(tempState.isLoad).toBeTruthy();
    expect(tempState.fetchBookErr).toBeFalsy();

    const newState = reducer(tempState, getBookSuccess(booksData));
    expect(newState.books).toHaveLength(2);
    expect(newState.isLoad).toBeFalsy();
  });

  test('test action getBookFailure', () => {  
    expect(state.isLoad).toBeFalsy();
    expect(state.fetchBookErr).toBeFalsy();
    
    const tempState = reducer(state, getBookFailure('Error load book'));

    expect(tempState.isLoad).toBeTruthy();
    expect(tempState.fetchBookErr).toBeTruthy();
  });

  test('test action setBooksFiltered', () => {  
    expect(state.filteredBooks).toBeFalsy();
    expect(state.filteredBooks).toBeNull();

    const bookData = [{
      author: "JuanMa Garrido",
      count: 13,
      cover: "https://jsbooks.revolunet.com/img/cover-apuntes-javascript-intermedio.png",
      description: "(En Castellano) Revision de conceptos (actuales) de javascript desde basicos hasta un nivel intermedio",
      id: "1",
      level: "Intermediate",
      price: 14.94,
      tags: ["core"],
      title: "Apuntes de Javascript I - Nivel Intermedio",
    }];
    
    const tempState = reducer(state, setBooksFiltered(bookData));

    expect(tempState.filteredBooks).not.toBeNull();
    expect(tempState.filteredBooks).toHaveLength(1);
  });

  test('test action setBooksInCart', () => {  
    expect(state.booksInCart).toHaveLength(0);
    expect(state.booksInCart).toEqual(expect.any(Array));

    const bookData = [{
      count: 13,
      id: "1",
    }];
    
    const tempState = reducer(state, setBooksInCart(bookData as CartBooks[]));

    expect(tempState.booksInCart).toContainEqual({ id: '1', count: 13 });
    expect(tempState.booksInCart).toHaveLength(1);
  });

  test('test action getBookByIdStarted && getBookDescription && getBookByIdFailure', () => {  
    expect(state.LoadBook).toBeFalsy();
    expect(state.fetchBookErr).toBeFalsy();

    const state_1 = reducer(state, getBookByIdStarted());

    expect(state_1.LoadBook).toBeTruthy();
    expect(state_1.fetchBookErr).toBeFalsy();

    const state_2 = reducer(state, getBookByIdFailure('Error get book'));

    expect(state_2.LoadBook).toBeTruthy();
    expect(state_2.fetchBookErr).toBeTruthy();

    const bookData = 
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
    };

    const state_3 = reducer(state, getBookDescription(bookData));
    
    expect(state_3.LoadBook).toBeFalsy();
    expect(state_3.book).toHaveProperty('author');
    expect(state_3.book).toHaveProperty('id', '2');
    expect(state_3.book).toMatchObject({ id: '2' });
  });

  test('test action setPurchaseSuccess && setPurchaseError', () => {  
    expect(state.purchaseSuccess).toBeFalsy();
    expect(state.purchaseError).toBeFalsy();

    const state_1 = reducer(state, setPurchaseSuccess('Done!'));

    expect(state_1.purchaseSuccess).toBeTruthy();
    expect(state_1.purchaseSuccess).toEqual('Done!');

    const state_2 = reducer(state, setPurchaseError('Error!'));

    expect(state_2.purchaseError).toBeTruthy();
    expect(state_2.purchaseError).toEqual('Error!');
  });
});

