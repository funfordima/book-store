import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import UserBar from '../../Components/UserBar/UserBarContainer';
import Header from '../../Components/Header/Header';
import MainSearch from '../../Components/MainSearch/MainSearchContainer';

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(236, 240, 241, .73);
  border-radius: .5rem;
`;

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
        ? <Container>
          <Wrapper>
            <UserBar />
            <Header />
            <MainSearch />
            <div> CatalogPage </div>
          </Wrapper>
        </Container>
        : <Redirect to="/login" />
      }
    </>
  );
};

export default CatalogPage;
