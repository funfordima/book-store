export interface User {
  username: string,
  avatar: string,
  token: string,
}

export interface State {
  isAuth: boolean,
  isLoading: boolean,
  error: string,
  user: User,
}

export interface UpdateCurrentUser {
  type: string,
  payload: boolean,
}

export interface SetUserStarted {
  type: string,
}

export interface SetUserSuccess {
  type: string,
  payload: User,
}

export interface SetUserFailure {
  type: string,
  payload: string,
}
