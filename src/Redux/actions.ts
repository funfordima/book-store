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
import HttpService from '../utils/HttpService';

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

export const setUser = (username: string) => async (dispatch: any) => {
  dispatch(setUserStarted());

  try {
    const json = await HttpService.fetchUser(username);
    dispatch(setUserSuccess(json));
    const currentUser = {
      username: json.username,
      avatar: json.avatar,
    };

    localStorage.setItem('token', json.token);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    dispatch(updateCurrentUser(true));
  } catch (error) {
    dispatch(setUserFailure(error.message));
    dispatch(updateCurrentUser(false));
  };
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

export const fetchBooks = (token: string) => async (dispatch: any) => {
  dispatch(getBookStarted());

  try {
    const json = await HttpService.getBooks(token);
    dispatch(getBookSuccess(json));
  } catch (error) {
    dispatch(updateCurrentUser(false));
    dispatch(getBookFailure(error.message));
  }
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

export const fetchBookBuId = (token: string, id: string) => async (dispatch: any) => {
  dispatch(getBookByIdStarted());

  try {
    const json = await HttpService.getBookById(token, id);
    dispatch(getBookDescription(json));
  } catch (err) {
    dispatch(updateCurrentUser(false));
    dispatch(getBookByIdFailure(err.message));
  }
};

export const setPurchaseSuccess = (data: string): SetPurchaseSuccess => ({
  type: SET_PURCHASE_SUCCESS,
  payload: data,
});

export const setPurchaseError = (error: string): SetPurchaseError => ({
  type: SET_PURCHASE_ERROR,
  payload: error,
});

export const fetchPurchase = (token: string, books: string[]) => async (dispatch: any) => {

  try {
    const json = await HttpService.setPurchase(token, books);
    // @ts-ignore
    dispatch(setPurchaseSuccess(json.message));
  } catch (error) {
    if (error.message === '400') {
      dispatch(setPurchaseError("Please provide list of ids in format: { books: [...] }"));
    } else if (error.message === '401') {
      dispatch(setPurchaseError("Unauthorized"));
      localStorage.clear();
      dispatch(updateCurrentUser(false));
    } else {
      dispatch(setPurchaseError("Something went wrong! Unhandled exception"));
    }
  }
};
