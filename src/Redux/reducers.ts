import { State, User } from './interfaces';
import { 
  UPDATE_CURRENT_USER,
  SET_USER_STARTED,
  SET_USER_SUCCESS,
  SET_USER_FAILURE, 
  REMOVE_USER_FAILURE, 
  SET_SEARCH_BOOK, 
 } from './consts';

const defaultState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {} as User,
  searchBook: '',
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

    default: {
      return {...state};
    }
  };
};

export default reducer;