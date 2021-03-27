import { State, User, Book, CartBooks } from './interfaces';
import { 
  UPDATE_CURRENT_USER,
  SET_USER_STARTED,
  SET_USER_SUCCESS,
  SET_USER_FAILURE, 
  REMOVE_USER_FAILURE, 
  SET_SEARCH_BOOK, 
  GET_BOOK_STARTED, 
  GET_BOOK_SUCCESS, 
  GET_BOOK_FAILURE, 
  SET_BOOK_FILTERED, 
  SET_BOOK_IN_CART, 
  GET_BOOK_DESCRIPTION, 
  GET_BOOK_BY_ID_STARTED, 
  GET_BOOK_BY_ID_FAILURE, 
 } from './consts';

const defaultState = {
  isAuth: !!localStorage.getItem('token'),
  isLoading: true,
  error: '',
  user: {} as User,
  searchBook: '',
  books: [] as Book[],
  fetchBookErr: '',
  isLoad: true,
  filteredBooks: null,
  booksInCart: JSON.parse(String(localStorage.getItem('booksInCart'))) || [] as CartBooks[],
  book: {} as Book,
  LoadBook: true,
};

const reducer = (state = defaultState, action: any): State => {
  switch (action.type) {
    case UPDATE_CURRENT_USER: {
      return {
        ...state,
        isAuth: action.payload,
      } 
    }

    case SET_USER_STARTED: {
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    }

    case SET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      }
    }

    case SET_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    }

    case REMOVE_USER_FAILURE: {
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    }

    case SET_SEARCH_BOOK: {
      return {
        ...state,
        searchBook: action.payload,
      }
    }

    case GET_BOOK_STARTED: {
      return {
        ...state,
        isLoad: true,
        fetchBookErr: '',
      }
    }

    case GET_BOOK_SUCCESS: {
      return {
        ...state,
        books: action.payload,
        isLoad: false,
      }
    }

    case GET_BOOK_FAILURE: {
      return {
        ...state,
        isLoad: true,
        fetchBookErr: action.payload,
      }
    }

    case SET_BOOK_FILTERED: {
      return {
        ...state,
        filteredBooks: action.payload as Book[] | null,
      }
    }

    case SET_BOOK_IN_CART: {
      return {
        ...state,
        booksInCart: action.payload,
      }
    }

    case GET_BOOK_BY_ID_STARTED: {
      return {
        ...state,
        LoadBook: true,
        fetchBookErr: '',
      }
    }

    case GET_BOOK_BY_ID_FAILURE: {
      return {
        ...state,
        LoadBook: true,
        fetchBookErr: action.payload,
      }
    }

    case GET_BOOK_DESCRIPTION: {
      return {
        ...state,
        book: action.payload,
        LoadBook: false,
      }
    }

    default: {
      return {...state};
    }
  };
};

export default reducer;