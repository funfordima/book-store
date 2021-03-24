import React, { useEffect } from 'react';
import styled from 'styled-components';
import ContentGallery from './ContentGallery/ContentGalleryContainer';
import Loader from '../Loader/Loader';
import { AlertError } from '../../utils/styledComponents';

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
  isLoading: boolean;
  error: string;
}

const Gallery: React.FC<GalleryProps> = ({ fetchBooks, isLoading, error }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetchBooks(token);
    }
  }, [fetchBooks]);

  return (
    <>
      {isLoading
        ? (
          <>
            <Loader />
            {error
              && <AlertError>{error}</AlertError>}
          </>
        )
        : (<Main>
          <Container>
            <ContentGallery />
          </Container>
        </Main>)
      }
    </>
  );
};

export default Gallery;
