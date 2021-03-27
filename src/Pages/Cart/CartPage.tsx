import React from 'react';
import styled from 'styled-components';
import UserBar from '../../Components/UserBar/UserBarContainer';
import Header from '../../Components/Header/HeaderContainer';
import CartContent from '../../Components/CartContent/CartContentContainer';
import Footer from '../../Components/Footer/Footer';
import { Container, Wrapper, BackButton, AddBtn } from '../../utils/styledComponents';
import { ReactComponent as ArrowSvg } from '../../public/arrow-left.svg';
import { ReactComponent as CartSvg } from '../../public/cart-empty.svg';
import { CATALOG_ROUTE } from '../../utils/constants';
import { CartBooks } from '../../Redux/interfaces';
import ModalDialog from '../../Components/ModalDialog';
import { AlertSuccess, AlertError } from '../../utils/styledComponents';

const Row = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-of-type {
    width: 100%;
    padding: 0.5rem 1rem;
    justify-content: flex-end;
  }

  &:first-of-type {
    @media (max-width: 620px) {
      flex-direction: column;

      & div {
        align-self: unset;
      }
    }
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

  @media (max-width: 620px) {
    font-size: 2.5rem;
  }
`;

const EmptyContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  font-weight: 300;
  background-color: #c7c7c7;
  border: 2px solid #c7c7c7;

  & svg {
    width: 20rem;
    height: 20rem;
  }
`;

interface CartPageProps {
  booksInCart: CartBooks[];
  fetchPurchase: (token: string, books: string[]) => void;
  setPurchaseSuccess: (param: string) => void;
  setPurchaseError: (param: string) => void;
  setBooksInCart: (param: CartBooks[]) => void;
  purchaseSuccess: string,
  purchaseError: string,
}

const CartPage: React.FC<CartPageProps> = ({ booksInCart, fetchPurchase, purchaseSuccess, purchaseError, setPurchaseSuccess, setPurchaseError, setBooksInCart }) => {
  const handlePurchaseClick = () => {
    const token = localStorage.getItem('token');
    console.log(booksInCart);
    const purchaseBooks = booksInCart.reduce((acc: string[], book) => {
      const { id, count } = book;
      acc.push(...Array(+((+count).toFixed())).fill(id));

      return acc;
    }, []);

    console.log(purchaseBooks, token);

    if (token) {
      fetchPurchase(token, purchaseBooks);
    }
  };

  const handleCloseModalWindow = () => {
    setPurchaseSuccess('');
    setBooksInCart([]);
  };

  const handleCloseErrorWindow = () => {
    setPurchaseError('');
  };

  return (
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
          <AddBtn
            disabled={!booksInCart.length}
            onClick={handlePurchaseClick}
          >
            <CartSvg />
            Purchase
          </AddBtn>
        </Row>
        {
          booksInCart.length
            ? <CartContent />
            : (
              <EmptyContainer>
                <CartSvg />
              Cart empty ...
              </EmptyContainer>)
        }
        {
          purchaseSuccess
          && (
            <ModalDialog>
              <AlertSuccess>{purchaseSuccess}</AlertSuccess>
              <CartContent />
              <Row>
                <AddBtn onClick={handleCloseModalWindow}>
                  Close
                </AddBtn>
              </Row>
            </ModalDialog>)
        }
        {
          purchaseError
          && (
            <ModalDialog>
              <AlertError>{purchaseError}</AlertError>
              <Row>
                <AddBtn onClick={handleCloseErrorWindow}>
                  Close
                </AddBtn>
              </Row>
            </ModalDialog>)
        }
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default CartPage;
