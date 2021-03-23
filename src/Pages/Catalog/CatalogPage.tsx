import React from 'react';
import { Redirect } from 'react-router-dom';

interface CatalogPageProps {
  isAuth: boolean;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ isAuth }) => (
  <>
    {isAuth
      ? <div> CatalogPage </div>
      : <Redirect to="/login" />
    }
  </>
);

export default CatalogPage;
