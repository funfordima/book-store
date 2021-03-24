import { 
  UpdateCurrentUser,
  SetUserStarted,
  User,
  SetUserSuccess,
  SetUserFailure,
 } from './interfaces';
import { 
  UPDATE_CURRENT_USER, 
  MAIN_URL,
  SET_USER_STARTED,
  SET_USER_SUCCESS,
  SET_USER_FAILURE, 
  // REMOVE_USER_FAILURE, 
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

// export const removeUserFailure = (error: string): SetUserFailure => ({
//   type: SET_USER_FAILURE,
//   payload: error,
// });

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
