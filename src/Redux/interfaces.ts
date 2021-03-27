export interface User {
  username: string,
  avatar: string,
  token: string,
}

export interface Book {
  id: string,
  count: number,
  price: number,
  title: string,
  author: string,
  level: string,
  description: string,
  cover: string,
  tags: string[],
}

export interface CartBooks {
  id: string,
  count: string,
}

export interface State {
  isAuth: boolean,
  isLoading: boolean,
  error: string,
  user: User,
  searchBook: string,
  books: Book[],
  fetchBookErr: string,
  isLoad: boolean,
  filteredBooks: Book[] | null,
  booksInCart: CartBooks[],
  book: Book,
  LoadBook: boolean,
  purchaseSuccess: string,
  purchaseError: string,
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

export interface SetSearchBook {
  type: string,
  payload: string,
}

export interface GetBookStarted {
  type: string,
}

export interface GetBookSuccess {
  type: string,
  payload: Book[],
}

export interface GetBookFailure {
  type: string,
  payload: string,
}

export interface SetBooksFiltered {
  type: string,
  payload: Book[] | null,
}

export interface SetBooksInCart {
  type: string,
  payload: CartBooks[],
}

export interface GetBookDescription {
  type: string,
  payload: Book,
}

export interface SetPurchaseBooks {
  type: string,
  payload: string[],
}

export interface SetPurchaseSuccess {
  type: string,
  payload: string,
}

export interface SetPurchaseError {
  type: string,
  payload: string,
}
