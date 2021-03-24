import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnHidden } from '../../public/close.svg';
import { ReactComponent as SearchSvg } from '../../public/search.svg';

const Form = styled.form`
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
  background: #fff;
  padding: 16px 24px;
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
    width: 16px;
    left: auto;
    right: 12px;
    position: absolute;
    top: 1rem;
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
  padding: 7px 40px;
  width: 100%;
  font-size: 13px;
  line-height: 20px;
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
}

const MainSearch: React.FC<CityFilterSearchProps> = ({ searchBook, setSearchBook }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchBook(event.target.value);
  };

  useEffect(() => {
    (inputRef.current as HTMLInputElement).focus();
  }, []);

  return (
    <Form role='search'>
      <Label
        htmlFor='search-book'
      >
        <InputWrapper>
          <Input
            type='search'
            id='search-book'
            name='search-book'
            placeholder='Search book'
            required
            value={searchBook}
            onChange={handleChangeInput}
            ref={inputRef}
          />
          <SearchSvg />
          <BtnHidden
            className='isHidden'
          />
        </InputWrapper>
      </Label>
    </Form>
  );
};

export default MainSearch;
