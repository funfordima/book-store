import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Book } from '../../../Redux/interfaces';
import { CATALOG_ROUTE } from '../../../utils/constants';

const Card = styled.div`
  margin: 1rem 1rem 1rem 0;
  color: #0d6efd;
  text-decoration: underline;
`;

const Container = styled.div`
  width: 25rem;
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
  position: relative;
  user-select: none;
  vertical-align: middle;
`;

const BookImage = styled.div<{ cover: string, title: string }>`
  width: 100%;
  height: 14rem;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ cover }) => `url(${cover})`};
`;

const BookDescriptionContainer = styled.div`
  padding: 1.6rem;
`;

const BookTitle = styled.h2`
  margin-bottom: 0.8rem;
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, .87);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
`;

const BookAuthor = styled.h3`
  font-size: 1.4rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.54);
`;

const DetailBook = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceContainer = styled.span`
  color: #0e037c;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 0.5;
`;

const ViewButton = styled(NavLink)`
  padding: 0.3rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 400;
  color: #fff;
  border: 1px solid #95a5a6;
  background-color: #95a5a6;
  border-radius: .4rem;
  user-select: none;
  cursor: pointer;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover {
    background-color: #809395;
    border-color: #798d8f;
  }
`;

interface ContentGalleryProps {
  books: Book[];
}

const ContentGallery: React.FC<ContentGalleryProps> = ({ books }) => (
  <>
    {books.map(({ id, cover, title, author, price }) => (
      <Card key={id}>
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
                  {`${price}$`}
                </PriceContainer>
                <ViewButton to={`${CATALOG_ROUTE}/${id}`} >
                  View
                </ViewButton>
              </DetailBook>
            </BookDescriptionContainer>
          </Button>
        </Container>
      </Card>
    ))}
  </>
);

export default ContentGallery;
