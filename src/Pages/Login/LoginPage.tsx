import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import LogInForm from '../../Components/LoginForm/LoginFormContainer';
import { CATALOG_ROUTE } from '../../utils/constants';

const Container = styled.div`
  width: 100%;
  max-width: 114rem;
  padding: 1.5rem;
  margin: 0 auto;
  margin-top: 5%;
  
  @media (min-width: 992px) {
    max-width: 96rem;
  }

  @media (min-width: 768px) {
    max-width: 72rem;
  }

  @media (min-width: 576px) {
    max-width: 54rem;
  }
`;

const Title = styled.h1`
  margin: 1.5rem auto;
  font-size: 6rem;
  font-weight: 500;
  line-height: 1.2;
  color: #2c3e50;
  text-align: center;
`;

interface LoginPageProps {
  isAuth: boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({ isAuth }) => {
  const addBodyClass = (className: string): void =>
    document.body.classList.add(className);
  const removeBodyClass = (className: string): void =>
    document.body.classList.remove(className);

  useEffect(() => {
    addBodyClass('body');

    return () => {
      removeBodyClass('body');
    };
  }, []);

  return (
    <>
      {isAuth
        ? <Redirect to={CATALOG_ROUTE} />
        : (
          <Container>
            <Title>
              JS Band Store
            </Title>
            <LogInForm />
          </Container>
        )
      }
    </>
  );
};

export default LoginPage;
