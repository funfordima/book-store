import React from 'react';
import styled from 'styled-components';
import UserBar from '../../Components/UserBar/UserBarContainer';
import Header from '../../Components/Header/Header';
import BookDescription from '../../Components/BookDescription/BookDescriptionContainer';
import Footer from '../../Components/Footer/Footer';

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

// interface BookDetailPageProps {
//   isAuth: boolean;
// }

const BookDetailPage: React.FC = () => (
  <Container>
    <Wrapper>
      <UserBar />
      <Header />
      <BookDescription />
      <Footer />
    </Wrapper>
  </Container>
);

export default BookDetailPage;
