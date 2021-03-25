import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchSvg } from '../../public/search.svg';
import { ReactComponent as CloseSvg } from '../../public/close.svg';
import { Book } from '../../Redux/interfaces';

const Form = styled.form`
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
  background: #fff;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const Label = styled.label`
  width: 100%;
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  position: relative;

  & svg {
    width: 1.6rem;
    left: auto;
    right: 1.2rem;
    position: absolute;
    top: 1.1rem;
    color: rgba(0, 0, 0, 0.16);
    fill: currentColor;
    z-index: 1;
    transition-duration: 0.12s;
    transition-timing-function: ease-in-out;
    touch-action: manipulation;
    cursor: pointer;
  }

  & svg:first-of-type {
    left: 1.2rem;
    right: auto;
    top: 1rem;
  }

  & svg:hover {
    fill: #000;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0.7rem 3rem 0.7rem 4rem;
  width: 100%;
  font-size: 1.3rem;
  line-height: 2rem;
  overflow: hidden;
  touch-action: manipulation;
  outline: none;
  border-radius: 2px;
  transition-property: border-color;
  transition-duration: 0.12s;
  transition-timing-function: ease-in-out;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.16);

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    border-color: #46cdd6;
  }
`;

interface CityFilterSearchProps {
  searchBook: string;
  setSearchBook: (inputValue: string) => void;
  books: Book[];
  setBooksFiltered: (param: Book[] | null) => void;
}

const MainSearch: React.FC<CityFilterSearchProps> = ({ searchBook, setSearchBook, books, setBooksFiltered }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchBook(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filterBooks = books.filter(({ title }) => title.includes(searchBook));

    setBooksFiltered(filterBooks);
  };

  const handleSearchClick = () => {
    const filterBooks = books.filter(({ title }) => title.includes(searchBook));

    setBooksFiltered(filterBooks);
  };

  const handleClearSearch = () => {
    setBooksFiltered(null);
    setSearchBook('');
  };

  useEffect(() => {
    (inputRef.current as HTMLInputElement).focus();
  }, []);

  return (
    <Form role='search' onSubmit={handleSubmit}>
      <Label
        htmlFor='search-book'
      >
        <InputWrapper>
          <Input
            type='text'
            id='search-book'
            name='search-book'
            placeholder='Search book'
            required
            value={searchBook}
            onChange={handleChangeInput}
            ref={inputRef}
          />
          <SearchSvg onClick={handleSearchClick} />
          <CloseSvg
            style={{ 'display': `${searchBook ? 'block' : 'none'}` }}
            onClick={handleClearSearch}
          />
        </InputWrapper>
      </Label>
    </Form>
  );
};

export default MainSearch;
