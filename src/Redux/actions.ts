import { 
  UpdateCurrentUser,
  SetUserStarted,
  User,
  SetUserSuccess,
  SetUserFailure, 
  SetSearchBook, 
  Book, 
  GetBookStarted, 
  GetBookFailure, 
  GetBookSuccess, 
  SetBooksFiltered, 
  SetBooksInCart, 
  CartBooks, 
  GetBookDescription, 
  SetPurchaseSuccess, 
  SetPurchaseError, 
 } from './interfaces';
import { 
  UPDATE_CURRENT_USER, 
  MAIN_URL,
  SET_USER_STARTED,
  SET_USER_SUCCESS,
  SET_USER_FAILURE, 
  SET_SEARCH_BOOK, 
  GET_BOOK_STARTED, 
  GET_BOOK_SUCCESS, 
  GET_BOOK_FAILURE, 
  SET_BOOK_FILTERED, 
  SET_BOOK_IN_CART, 
  GET_BOOK_DESCRIPTION, 
  GET_BOOK_BY_ID_STARTED, 
  GET_BOOK_BY_ID_FAILURE, 
  SET_PURCHASE_SUCCESS, 
  SET_PURCHASE_ERROR, 
} from './consts';

export const updateCurrentUser = (value: boolean): UpdateCurrentUser => ({
  type: UPDATE_CURRENT_USER,
  payload: value
});

export const setUserStarted = (): SetUserStarted => ({
  type: SET_USER_STARTED,
});

export const setUserSuccess = (user: User): SetUserSuccess => ({
  type: SET_USER_SUCCESS,
  payload: user,
});

export const setUserFailure = (error: string): SetUserFailure => ({
  type: SET_USER_FAILURE,
  payload: error,
});

export const setUser = (username: string) => (dispatch: any) => {
  dispatch(setUserStarted());

  fetch(`${MAIN_URL}signin`, {
    method: 'POST',
    body: JSON.stringify({
      username
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .then((json) => {
    dispatch(setUserSuccess(json));
    const currentUser = {
      username: json.username,
      avatar: json.avatar,
    };

    localStorage.setItem('token', json.token);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    dispatch(updateCurrentUser(true));
  })
  .catch((error) => {
    dispatch(setUserFailure(error.message));
    dispatch(updateCurrentUser(false));
  });
};

export const setSearchBook = (inputValue: string): SetSearchBook => ({
  type: SET_SEARCH_BOOK,
  payload: inputValue,
});

export const getBookStarted = (): GetBookStarted => ({
  type: GET_BOOK_STARTED,
});

export const getBookSuccess = (books: Book[]): GetBookSuccess => ({
  type: GET_BOOK_SUCCESS,
  payload: books,
});

export const getBookFailure = (error: string): GetBookFailure => ({
  type: GET_BOOK_FAILURE,
  payload: error,
});

export const getBookByIdStarted = (): GetBookStarted => ({
  type: GET_BOOK_BY_ID_STARTED,
});

export const fetchBooks = (token: string) => (dispatch: any) => {
  dispatch(getBookByIdStarted());

  fetch(`${MAIN_URL}books`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if (!res.ok) {
      localStorage.clear();
      throw new Error('Unauthorized');
    }

    return res.json();
  })
  .then((json) => {
    dispatch(getBookSuccess(json));
  })
  .catch((error) => {
    dispatch(updateCurrentUser(false));
    dispatch(getBookFailure(error.message));
  });
};

export const setBooksFiltered = (books: Book[] | null): SetBooksFiltered => ({
  type: SET_BOOK_FILTERED,
  payload: books,
});

export const setBooksInCart = (arg: CartBooks[]): SetBooksInCart => ({
  type: SET_BOOK_IN_CART,
  payload: arg,
});

export const getBookDescription = (arg: Book): GetBookDescription => ({
  type: GET_BOOK_DESCRIPTION,
  payload: arg,
});

export const getBookByIdFailure = (error: string): GetBookFailure => ({
  type: GET_BOOK_BY_ID_FAILURE,
  payload: error,
});

export const fetchBookBuId = (token: string, id: string) => (dispatch: any) => {
  dispatch(getBookStarted());

  fetch(`${MAIN_URL}books/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if (!res.ok) {
      localStorage.clear();
      throw new Error('Unauthorized');
    }

    return res.json();
  })
  .then((json) => {
    dispatch(getBookDescription(json));
  })
  .catch((error) => {
    dispatch(updateCurrentUser(false));
    dispatch(getBookByIdFailure(error.message));
  });
};

export const setPurchaseSuccess = (data: string): SetPurchaseSuccess => ({
  type: SET_PURCHASE_SUCCESS,
  payload: data,
});

export const setPurchaseError = (error: string): SetPurchaseError => ({
  type: SET_PURCHASE_ERROR,
  payload: error,
});

export const fetchPurchase = (token: string, books: string[]) => (dispatch: any) => {

  fetch(`${MAIN_URL}purchase`, {
    method: 'POST',
    body: JSON.stringify({books}),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
  .then((res) => {
    if (res.status !== 200) {
      throw new Error(`${res.status}`);
    }

    return res.json();
  })
  .then((json) => {
    dispatch(setPurchaseSuccess(json.message));
  })
  .catch((error) => {
    if (error.message === '400') {
      dispatch(setPurchaseError("Please provide list of ids in format: { books: [...] }"));
    } else if (error.message === '400') {
      dispatch(setPurchaseError("Unauthorized"));
      localStorage.clear();
      dispatch(updateCurrentUser(false));
    } else {
      dispatch(setPurchaseError("Something went wrong! Unhandled exception"));
    }
  });
};
