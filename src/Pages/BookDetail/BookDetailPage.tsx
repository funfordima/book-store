import React from 'react';
import UserBar from '../../Components/UserBar/UserBarContainer';
import Header from '../../Components/Header/HeaderContainer';
import BookDescription from '../../Components/BookDescription/BookDescriptionContainer';
import Footer from '../../Components/Footer/Footer';
import { Container, Wrapper, BackButton, Row } from '../../utils/styledComponents';
import { ReactComponent as ArrowSvg } from '../../public/arrow-left.svg';
import { CATALOG_ROUTE } from '../../utils/constants';

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
