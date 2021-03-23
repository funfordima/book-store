import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter/AppRouter';
import './App.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
