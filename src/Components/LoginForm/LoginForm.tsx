import React, { useState } from 'react';
import styled from 'styled-components';
import { AlertError } from '../../utils/styledComponents';
import Loader from '../Loader/Loader';

const Form = styled.form`
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #000;

  @media only screen and (max-width: 767px) and (min-width: 0) {
   max-width: 28rem;
  }
`;

const FormField = styled.div`
  margin-top: 2rem;
  position: relative;
`;

const InputText = styled.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  padding: 1.2rem 1.6rem;
  font-size: 1.5rem;
  line-height: 2.2rem;
  height: 4.8rem;
  margin-top: 2rem;
  color: #7b8a8b;
  width: 100%;
  background-clip: padding-box;
  box-sizing: border-box;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;

  &:focus,
  &:hover {
    color: #7b8a8b;
    background-color: #fff;
    border-color: #597ea2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, .25);
  }
`;

const FormOptions = styled.div`
  margin: 16px 0 0 0;
  font-size: 1.5rem;
  text-align: right;

  & div {
    display: none;
  }

  & a {
    color: #0095cc;
    text-decoration: none;
  }
`;

const InputBtnLogin = styled.input`
  margin-top: 2rem;
  width: 100%;
  height: 4.8rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  background-color: #2c3e50;
  border-color: #2c3e50;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-clip: padding-box;

  &:hover {
    color: #fff;
    background-color: #1e2b37;
    border-color: #1a252f;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, .5);
    outline: none;
  }
`;

interface LogInPageProps {
  setUser: (username: string) => void;
  setUserFailure: (err: string) => void;
  error: string;
  isLoading: boolean;
}

const LogInForm: React.FC<LogInPageProps> = ({ setUser, error, setUserFailure, isLoading }) => {
  const [name, setName] = useState('');

  const handleChangeInputName = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setName(target.value);
    setUserFailure('');
  };

  const logInAccount = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const regExp = /^.{4,16}$/;

    if (!regExp.test(name)) {
      setUserFailure('Username is not valid');
    } else {
      setUser(name);
    }
  };

  return (
    <>
      {isLoading
        ? <Loader />
        : (
          <Form onSubmit={logInAccount}>
            {error && <AlertError>{error}</AlertError>}
            <FormField>
              <InputText
                tab-index="0"
                name="username"
                placeholder='Enter name'
                type="text"
                autoComplete="off"
                required
                onChange={handleChangeInputName}
                value={name}
              />
            </FormField>
            <FormOptions>
              <InputBtnLogin
                tab-index="0"
                type="submit"
                value='Login'
                name="login"
              />
            </FormOptions>
          </Form>
        )
      }
    </>
  );
};

export default LogInForm;
