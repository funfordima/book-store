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
    console.log(json);
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

export const fetchBooks = (token: string) => (dispatch: any) => {
  dispatch(getBookStarted());

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
