import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import UserBar from '../../Components/UserBar/UserBarContainer';
import Header from '../../Components/Header/HeaderContainer';
import BookDescription from '../../Components/BookDescription/BookDescriptionContainer';
import Footer from '../../Components/Footer/Footer';
import { ReactComponent as ArrowSvg } from '../../public/arrow-left.svg';
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
  display: flex;
  flex-direction: column;
  background-color: rgba(236, 240, 241, .73);
  border-radius: .5rem;
`;

export const BackButton = styled(NavLink)`
  padding: 16px 16px 16px 0;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  & span {
    margin-left: 5px;
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
    padding: 20px 16px;
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
`;

// interface BookDetailPageProps {
//   isAuth: boolean;
// }

const BookDetailPage: React.FC = () => (
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
      <BookDescription />
      <Footer />
    </Wrapper>
  </Container>
);

export default BookDetailPage;
