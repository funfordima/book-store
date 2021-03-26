import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as CartSvg } from '../../public/cart-empty.svg';
import CountBar from '../CountBar/CountBar';
import { AddBtn } from '../../utils/styledComponents';
import { Book, CartBooks } from '../../Redux/interfaces';

const Container = styled.div`
  padding-left: 2rem;
  width: 30%;
  min-width: 28rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1020px) {
    padding: 0;
  }
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

    if (booksInCart.some((book) => book.id === id)) {
      const newBooks = booksInCart.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            count: (+countBook).toFixed(),
          };
        }

        return book;
      });

      setBooksInCart(newBooks);
    } else {
      setBooksInCart([...booksInCart, { id, count: countBook }]);
    }
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
