import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CartEmptySvg } from '../../public/cart-empty.svg';

const HeaderElement = styled.header`
  margin-top: 1.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3e50;
  color: #ecf0f1;
  border: 1px solid #dee2e6;
  border-bottom: 0;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  color: #ecf0f1;

  @media (max-width: 505px) {
    font-size: 3rem;
  }

  @media (max-width: 415px) {
    font-size: 2rem;
    white-space: nowrap;
  }
`;

const CartContainer = styled(NavLink)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  color: #fff;
  text-decoration: none;

  &:hover {
    border: 1px solid #2c3e50;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    fill: #fff;
  }
`;

const CartTitle = styled.h3`
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 2.5rem;
  font-weight: 300;

  @media (max-width: 505px) {
    font-size: 2rem;
  }

  @media (max-width: 415px) {
    font-size: 1.4rem;
  }
`;

const CountGoods = styled.span`
  display: inline-block;

  @media (max-width: 415px) {
    white-space: nowrap;
  }
`;

const Subtitle = styled.p`
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 300;
  background-color: #2c3e50;
  color: #fff;
  border: 1px solid #dee2e6;
  border-top: 0;

  @media (max-width: 505px) {
    font-size: 2rem;
  }

  @media (max-width: 415px) {
    font-size: 1.4rem;
  }
`;

const Header: React.FC = () => (
  <>
    <HeaderElement>
      <Title>
        JS Band Store
    </Title>
      <CartContainer to='/cart'>
        <CartEmptySvg />
        <CartTitle>
          cart
      </CartTitle>
        <CountGoods>
          ( 5 )
      </CountGoods>
      </CartContainer>
    </HeaderElement>
    <Subtitle>
      Buy books - time is running out!
    </Subtitle>
  </>
);

export default Header;
