import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../../utils/routes';
import { NOTFOUND_ROUTE } from '../../utils/constants';

interface AppRouterProps {
  isAuth: boolean;
}

const AppRouter: React.FC<AppRouterProps> = ({ isAuth }) => (
  <Switch>
    {isAuth
      && authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))
    }
    {
      publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))
    }
    <Redirect to={NOTFOUND_ROUTE} />
  </Switch>
);

export default AppRouter;
