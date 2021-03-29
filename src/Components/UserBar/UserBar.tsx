import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LogoutSvg } from '../../public/logout.svg';
import { User } from '../../Redux/interfaces';
import { LOGIN_ROUTE } from '../../utils/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  background-color: #fff;
`;

const AvatarContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0.8rem;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;

  @media (max-width: 415px) {
    width: 3rem;
    height: 3rem;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;  
  color: transparent;
  object-fit: cover;
  text-align: center;
`;

const UserName = styled.h4`
  margin: 0.8rem;
  color: #000;
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 1.2;

  @media (max-width: 415px) {
    font-size: 2rem;
  }
`;

const SignOutBtn = styled.button`
  padding: 0 1rem;
  margin-right: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  border: 1px solid #95a5a6;
  background-color: #95a5a6;
  border-radius: .4rem;
  user-select: none;
  cursor: pointer;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:hover {
    background-color: #809395;
    border-color: #798d8f;
  }

  & svg {
    margin: 0.8rem;
    width: 2rem;
    height: 2rem;
    color: #212529;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.5;
    cursor: pointer;
    user-select: none;
  }

  @media (max-width: 415px) {
    padding: 0 0.2rem;
    margin-right: 0.2rem;
  }
`;

interface UserBarProps {
  currentUser: User;
  updateCurrentUser: (param: boolean) => void;
}

const UserBar: React.FC<UserBarProps> = ({ currentUser, updateCurrentUser }) => {
  let { username, avatar } = currentUser;
  const history = useHistory();

  if (!username) {
    const user = JSON.parse(String(localStorage.getItem('currentUser'))) as User;

    if (user) {
      username = user.username;
      avatar = user.avatar;
    }
  }

  const handleSignOut = () => {
    localStorage.clear();
    updateCurrentUser(false);
    history.push(LOGIN_ROUTE);
  };

  return (
    <Container>
      <AvatarContainer>
        <AvatarImage src={avatar} alt={username} />
      </AvatarContainer>
      <UserName>
        {username}
      </UserName>
      <SignOutBtn onClick={handleSignOut}>
        SignOut
        <LogoutSvg />
      </SignOutBtn>
    </Container>
  );
};

export default UserBar;