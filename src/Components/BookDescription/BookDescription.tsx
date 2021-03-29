import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Redirect } from 'react-router-dom';
import { ReactComponent as TagSvg } from '../../public/ticket.svg';
import Price from '../Price/PriceContainer';
import Loader from '../../Components/Loader/Loader';
import { Book } from '../../Redux/interfaces';
import { LOGIN_ROUTE } from '../../utils/constants';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: #000;
  border-radius: 0.9rem;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  padding: 1.5rem;
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin-bottom: 3rem;
  display: block;
  height: 80%;
  border: 1px solid #46cdd6;
  border-radius: 0.9rem 0px 0px 0.9rem;
`;

const ContentContainer = styled.div`
  margin: 2rem 2rem 0 2.9rem;
  width: 35rem;

  @media (max-width: 1125px) {
    margin: 0;
    width: 30rem;
  }
`;

const BookTitle = styled.h3`
  margin-bottom: 1rem;
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5rem;
  letter-spacing: 0.21rem;
  line-height: 130%;
  font-weight: 700;
  color: #2c293b;
`;

const BookAuthor = styled.h4`
  margin-bottom: 2rem;
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 115%;
  letter-spacing: 0.12rem;
  color: #573ba3;
`;

const Description = styled.h5`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 110%;
  letter-spacing: 0.09rem;
  line-height: normal;
`;

const AdditionalInfo = styled.div`
  margin-bottom: 1.2rem;
  padding: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 110%;
  letter-spacing: 0.09rem;
  border-radius: 0.25rem;
  border: 2px solid #573ba3;
  background-color: #f6f5f7;
  color: #1fa5a3;

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
`;

const SpanAuthor = styled.span`
  color: grey;
`;

interface ParamRoute {
  id: string;
}

interface BookDescriptionProps {
  book: Book;
  LoadBook: boolean;
  error: string;
  fetchBookBuId: (token: string, id: string) => void;
}

const BookDescription: React.FC<BookDescriptionProps> = ({ book, fetchBookBuId, LoadBook, error }) => {
  const { id }: ParamRoute = useParams();
  const { title, author, description, cover, tags } = book as Book;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetchBookBuId(token, id);
    }
  }, [id, fetchBookBuId]);

  return (
    <>
      {LoadBook
        ? (
          <>
            <Loader />
            {error
              && <Redirect to={LOGIN_ROUTE} />}
          </>
        )
        : (
          <Container>
            <ImageContainer>
              <Image
                src={cover}
                alt={title}
              />
              <Description>
                {description}
              </Description>
            </ImageContainer>
            <Wrapper>
              <ContentContainer>
                <BookTitle>
                  {title}
                </BookTitle>
                <BookAuthor>
                  {author}
          &nbsp;
          <SpanAuthor>(Author)</SpanAuthor>
                </BookAuthor>
                <AdditionalInfo>
                  <TagSvg />
                  {tags.join(', ')}
                </AdditionalInfo>
              </ContentContainer>
              <Price book={book as Book} />
            </Wrapper>
          </Container>
        )}
    </>
  );
};

export default BookDescription;