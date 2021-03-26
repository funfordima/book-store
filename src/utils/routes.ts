import CartPage from '../Pages/Cart/CartPageContainer';
import CatalogPage from '../Pages/Catalog/CatalogPageContainer';
import LoginPage from '../Pages/Login/LoginPageContainer';
import NotFoundPage from '../Pages/NotFound/NotFoundPage';
import BookDetailPage from '../Pages/BookDetail/BookDetailPage';
import { LOGIN_ROUTE, CART_ROUTE, CATALOG_ROUTE, NOTFOUND_ROUTE } from './constants';
import { Path } from '../interfaces';

export const authRoutes: Array<Path> = [
  {
    path: CART_ROUTE,
    Component: CartPage,
  },
  {
    path: CATALOG_ROUTE,
    Component: CatalogPage,
  },
  {
    path: `${CATALOG_ROUTE}/:id`,
    Component: BookDetailPage,
  },
];

export const publicRoutes: Array<Path> = [
  {
    path: '/',
    Component: LoginPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: NOTFOUND_ROUTE,
    Component: NotFoundPage,
  },
];
