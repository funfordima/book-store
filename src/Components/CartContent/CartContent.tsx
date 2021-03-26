import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Book, CartBooks } from '../../Redux/interfaces';
import { ReactComponent as BinSvg } from '../../public/bin.svg';

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #c8c8c8;
  border: 1px solid #eee;
  color: #2c293b;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 6fr 1fr 1fr 2fr;
  row-gap: 2px;
  column-gap: 2px;
  width: 100%;
  height: 6rem;
  background-color: #c7c7c7;
  border: 2px solid #c7c7c7;
`;

const TableItem = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2rem;
  font-weight: 500;
  background-color: #fff;
  position: relative;

  &:last-of-type {
    padding-right: 1rem;
    justify-content: flex-end;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: 500;
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

interface CartContentProps {
  books: Book[];
  booksInCart: CartBooks[];
  setBooksInCart: (arg: CartBooks[]) => void;
}

const CartContent: React.FC<CartContentProps> = ({ books, booksInCart, setBooksInCart }) => {
  const purchaseBooks: Book[] = books.reduce((acc: Book[], book) => {
    const index = booksInCart.findIndex(({ id }) => id === book.id);

    if (index !== -1) {
      acc.push({ ...book, count: +booksInCart[index].count });
    }

    return acc;
  }, []);

  const [chooseBooks, setChooseBooks] = useState(purchaseBooks);
  const totalPrice = purchaseBooks.reduce((acc, { count, price }) => acc + count * price, 0).toFixed(2);

  const handleDelBookFromCart = (event: React.MouseEvent<SVGElement>) => {
    const newChooseBooks = chooseBooks.filter(({ id }) => id !== event.currentTarget.id);
    const changeBooksInCart = booksInCart.filter(({ id }) => id !== event.currentTarget.id);

    setBooksInCart(changeBooksInCart);
    setChooseBooks(newChooseBooks);
  };

  useEffect(() => {
    localStorage.setItem('booksInCart', JSON.stringify(booksInCart));
  }, [booksInCart]);

  return (
    <Container>
      <TableRow>
        {['Name', 'Count', 'Price', 'Total'].map((item) => <TableItem key={item}>{item}</TableItem>)}
      </TableRow>
      {chooseBooks.map(({ title, count, price, id }) => {
        return (
          <TableRow key={id}>
            <TableItem>{title}</TableItem>
            <TableItem>{count}</TableItem>
            <TableItem>{price.toFixed(2)}</TableItem>
            <TableItem>
              {(count * price).toFixed(2)}
              <BinSvg id={id} onClick={handleDelBookFromCart} />
            </TableItem>
          </TableRow>
        );
      })}
      <Row>
        <Span>
          Total Price:
          </Span>
          &nbsp;
          <Span>
          {totalPrice}$
          </Span>
      </Row>
    </Container>
  );
};

export default CartContent;
