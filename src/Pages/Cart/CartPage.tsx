import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import UserBar from '../../Components/UserBar/UserBarContainer';
import Header from '../../Components/Header/HeaderContainer';
import CartContent from '../../Components/CartContent/CartContentContainer';
import Footer from '../../Components/Footer/Footer';
import { ReactComponent as ArrowSvg } from '../../public/arrow-left.svg';
import { ReactComponent as CartSvg } from '../../public/cart-empty.svg';
import { CATALOG_ROUTE } from '../../utils/constants';

const Container = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 992px) {
    max-width: 93rem;
  }

  @media (max-width: 768px) {
    max-width: 72rem;
  }

  @media (max-width: 576px) {
    max-width: 54rem;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem 2rem 4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(236, 240, 241, .73);
  border-radius: .5rem;
  position: relative;
`;

export const BackButton = styled(NavLink)`
  padding: 1.6rem 1.6rem 1.6rem 0;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #fff;
  text-decoration: none;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  & span {
    margin-left: 0.5rem;
    color: #573ba3;
  }

  & svg {
    fill: #000;
    vertical-align: bottom;
    transform-origin: center;
    transform: rotate(180deg);
    border-radius: 50%;
    background-color: #ccc;
  }

  &:hover {
    color: rgba(255,255,255,0.8);
  }

  @media only screen and (max-width: 767px) and (min-width: 0) {
    padding: 2rem 1.6rem;
    color: rgba(0,0,0,0.48);

    &:hover {
      color: rgba(0,0,0,0.8);
    }

    & svg {
      background-color: rgba(0,0,0,0.1);
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-of-type {
    width: 100%;
    padding: 0.5rem 1rem;
    justify-content: flex-end;
  }
`;

const AddBtn = styled.button`
  padding: 0 1rem;
  margin-right: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
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

const BookTitle = styled.h3`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5rem;
  letter-spacing: 0.21rem;
  line-height: 130%;
  font-weight: 700;
  color: #2c293b;
`;

const CartPage: React.FC = () => (
  <Container>
    <Wrapper>
      <Row>
        <BackButton to={CATALOG_ROUTE}>
          <ArrowSvg />
          <span>Back to Catalog</span>
        </BackButton>
        <UserBar />
      </Row>
      <Header />
      <Row>
        <BookTitle>
          Shopping Cart
        </BookTitle>
        <AddBtn>
          <CartSvg />
            Purchase
        </AddBtn>
      </Row>
      <CartContent />
      <Footer />
    </Wrapper>
  </Container>
);

export default CartPage;
