import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Book } from '../../../Redux/interfaces';
import { CATALOG_ROUTE } from '../../../utils/constants';

const Link = styled(NavLink)`
  margin: 10px 10px 10px 0;
  color: #0d6efd;
  text-decoration: underline;
`;

const Container = styled.div`
  width: 250px;
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
  border-radius: 4px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
`;

const Button = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: block;
  align-items: center;
  justify-content: center;
  text-align: inherit;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  outline: 0;
  position: relative;
  user-select: none;
  vertical-align: middle;
`;

const BookImage = styled.div<{ cover: string, title: string }>`
  width: 100%;
  height: 140px;
  padding-top: 56.25%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ cover }) => `url(${cover})`};
`;

const BookDescriptionContainer = styled.div`
  padding: 16px;
`;

const BookTitle = styled.h2`
  margin-bottom: 0.35em;
  font-size: 1.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0em;
`;

const BookAuthor = styled.h3`
font-size: 1rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 400;
line-height: 1.43;
letter-spacing: 0.01em;
color: rgba(0, 0, 0, 0.54);
`;

const DetailBook = styled.div`
`;

const PriceContainer = styled.span`
  color: #0e037c;
  font-size: 1rem;
  font-weight: bold;
  line-height: 0.5;
`;

const ViewButton = styled.button`
`;

interface ContentGalleryProps {
  books: Book[];
}

const ContentGallery: React.FC<ContentGalleryProps> = ({ books }) => (
  <>
    {books.map(({ id, cover, title, author, price }) => (
      <Link to={`${CATALOG_ROUTE}/:id`} key={id}>
        <Container>
          <Button tab-index='0'>
            <BookImage
              title={title}
              cover={cover}
            />
            <BookDescriptionContainer>
              <BookTitle>
                {title}
              </BookTitle>
              <BookAuthor>
                {author}
              </BookAuthor>
              <DetailBook>
                <PriceContainer>
                  {price}
                </PriceContainer>
                <ViewButton>
                  View
                </ViewButton>
              </DetailBook>
            </BookDescriptionContainer>
          </Button>
        </Container>
      </Link>
    ))}
  </>
);

export default ContentGallery;
