import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as CartSvg } from '../../public/cart-empty.svg';
import CountBar from '../CountBar/CountBar';
import { Book, CartBooks } from '../../Redux/interfaces';

const Container = styled.div`
  padding-left: 2rem;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  margin: 0px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  background: #f6f6fb;
`;

const Span = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 400;
  color: #2c293b;
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

interface PriceProps {
  book: Book;
  booksInCart: CartBooks[];
  setBooksInCart: (arg: CartBooks[]) => void;
}

const Price: React.FC<PriceProps> = ({ book, booksInCart, setBooksInCart }) => {
  const { price, count, id } = book;
  const [totalPrice, setTotalPrice] = useState(price);

  const calcTotalPrice = (arg: number) => {
    setTotalPrice(() => (+(price * arg).toFixed(2)));
  };

  const handleClick = () => {
    const countBook = `${totalPrice / price}`;

    setBooksInCart([...booksInCart, { id, count: countBook }]);
  };

  useEffect(() => {
    localStorage.setItem('booksInCart', JSON.stringify(booksInCart));
  }, [booksInCart]);

  return (
    <Container>
      <Row>
        <Span>
          Price, $
      </Span>
        <Span>
          {price}
        </Span>
      </Row>
      <Row>
        <Span>
          Count
      </Span>
        <CountBar totalBookCount={count} calcTotalPrice={calcTotalPrice} />
      </Row>
      <Row>
        <Span>
          Total Price, $
      </Span>
        <Span>
          {totalPrice}
        </Span>
      </Row>
      <AddBtn
        disabled={!totalPrice}
        onClick={handleClick}
      >
        <CartSvg />
      Add to cart
    </AddBtn>
    </Container>
  );
};

export default Price;
