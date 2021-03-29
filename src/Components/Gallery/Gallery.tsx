import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import ContentGallery from './ContentGallery/ContentGallery';
import Loader from '../Loader/Loader';
import { LOGIN_ROUTE } from '../../utils/constants';
import { Book } from '../../Redux/interfaces';

const Main = styled.main`
  margin: 1rem;
  min-height: 75vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 1rem;
  margin: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

interface GalleryProps {
  fetchBooks: (token: string) => void;
  isLoad: boolean;
  error: string;
  books: Book[],
  filteredBooks: Book[] | null,
}

const Gallery: React.FC<GalleryProps> = ({ fetchBooks, isLoad, error, books, filteredBooks }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetchBooks(token);
    }
  }, [fetchBooks]);

  return (
    <>
      {isLoad
        ? (
          <>
            <Loader />
            {error
              && <Redirect to={LOGIN_ROUTE} />}
          </>
        )
        : (<Main>
          <Container>
            {!!filteredBooks
              ? <ContentGallery books={filteredBooks as unknown as Book[]} />
              : <ContentGallery books={books} />
            }
          </Container>
        </Main>
        )
      }
    </>
  );
};

export default Gallery;