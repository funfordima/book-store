import React from 'react';
import styled from 'styled-components';
import ContentGallery from './ContentGallery/ContentGallery';

const Main = styled.main`
  margin: 10px;
  min-height: 75vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const books = [
  {
    "id": "String",
    "count": 42,
    "price": 11,
    "title": "String",
    "author": "String",
    "level": "String",
    "description": "String",
    "cover": "String",
    "tags": ["String"]
  },
];

const Gallery: React.FC = () => (
  <Main>
    <Container>
      <ContentGallery books={books} />
    </Container>
  </Main>
);

export default Gallery;
