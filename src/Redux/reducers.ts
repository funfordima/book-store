import { State } from './interfaces';
import { UPDATE_CURRENT_USER } from './consts';

const defaultState = {
  isAuth: false,
};

const reducer = (state = defaultState, action: any): State => {
  switch (action.type) {
    case UPDATE_CURRENT_USER: {
      return {
        ...state,
        isAuth: action.payload,
      } 
    }

    default: {
      return {...state};
    }
  };
};

export default reducer;