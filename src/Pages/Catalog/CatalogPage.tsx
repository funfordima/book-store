import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

interface CatalogPageProps {
  isAuth: boolean;
  updateCurrentUser: (param: boolean) => void;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ isAuth, updateCurrentUser }) => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      updateCurrentUser(true);
    }
  }, [updateCurrentUser]);

  return (
    <>
      {isAuth
        ? <div> CatalogPage </div>
        : <Redirect to="/login" />
      }
    </>
  );
};

export default CatalogPage;
