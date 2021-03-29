import HttpService from '../HttpService';
import { 
  setUser, 
  fetchBooks, 
  setUserStarted, 
  setUserSuccess, 
  updateCurrentUser,
  getBookStarted,
  getBookSuccess,
  getBookFailure, 
  fetchBookBuId, 
  getBookByIdStarted, 
  getBookDescription, 
  getBookByIdFailure, 
  fetchPurchase, 
  setPurchaseSuccess, 
  setPurchaseError,
 } from '../../Redux/actions';

jest.mock('../HttpService');
const HttpServiceMock = HttpService as jest.Mocked<typeof HttpService>;

const result = {
  username: 'Nick',
  avatar: 'src',
  token: '9999',
};

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

test('test login user', async () => {
  HttpServiceMock.fetchUser.mockResolvedValue(result);
  const thunk = setUser('Nick');
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, setUserStarted());
  expect(dispatchMock).toHaveBeenNthCalledWith(2, setUserSuccess(result));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, updateCurrentUser(true));
});

test('test get all books success', async () => {
  HttpServiceMock.getBooks.mockReturnValue(Promise.resolve(bookData));

  const thunk = fetchBooks('token');
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(2);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, getBookStarted());
  expect(dispatchMock).toHaveBeenNthCalledWith(2, getBookSuccess(bookData));
});

test('test get all books failure', async () => {
  HttpServiceMock.getBooks.mockRejectedValue(new Error('Error'));

  const thunk = fetchBooks('token');
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, getBookStarted());
  expect(dispatchMock).toHaveBeenNthCalledWith(2, updateCurrentUser(false));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, getBookFailure('Error'));
});

test('test get book by ID success', async () => {
  HttpServiceMock.getBookById.mockReturnValue(Promise.resolve(bookData[0]));

  const thunk = fetchBookBuId('token', '1');
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(2);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, getBookByIdStarted());
  expect(dispatchMock).toHaveBeenNthCalledWith(2, getBookDescription(bookData[0]));
});

test('test get book by ID failure', async () => {
  HttpServiceMock.getBookById.mockRejectedValue(new Error('Error'));

  const thunk = fetchBookBuId('token', '1');
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, getBookByIdStarted());
  expect(dispatchMock).toHaveBeenNthCalledWith(2, updateCurrentUser(false));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, getBookByIdFailure('Error'));
});

test('test set purchase success', async () => {
  HttpServiceMock.setPurchase.mockReturnValue(Promise.resolve({message: 'Thank you'}));

  const thunk = fetchPurchase('token', ['1', '2']);
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(1);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, setPurchaseSuccess('Thank you'));
});

test('test set purchase failure', async () => {
  HttpServiceMock.setPurchase.mockRejectedValue(new Error('401'));

  const thunk = fetchPurchase('token', ['1', '2']);
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(2);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, setPurchaseError('Unauthorized'));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, updateCurrentUser(false));
});
