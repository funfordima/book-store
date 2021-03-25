import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuContentComponent from './MenuContent/MenuContent';
import { ReactComponent as ClearSvg } from '../../public/close.svg';
import { Book } from '../../Redux/interfaces';
import { data } from '../../utils/constants';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  position: relative;

  & svg {
    width: 1.6rem;
    left: 1rem;
    right: auto;
    position: absolute;
    top: 1.2rem;
    color: rgba(0, 0, 0, 0.16);
    fill: currentColor;
    z-index: 1;
    transition-duration: 0.12s;
    transition-timing-function: ease-in-out;
    touch-action: manipulation;
    cursor: pointer;
  }

  & svg:hover {
    fill: #000;
  }
`;

const MenuContainer = styled.div`
  margin: 0 auto;
`;

const Menu = styled.div`
  position: relative;
  width: 23rem;
  height: 4rem;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 18rem;
    height: 3rem;
  }
`;

const MenuContent = styled.div`
  position: absolute;
  top: 4rem;
  left: 0.3rem;
  display: flex;
  flex-direction: column;
  width: calc(100% - 6px);
  background-color: #ffffff;
  border: 1px solid #c7ccd1;
  border-top: none;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition: all 0.3s ease-out;
  opacity: 0;
  z-index: 8;

  @media (max-width: 767px) {
    top: 3rem;
  }
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.8rem 4rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  border: solid 1px #c7ccd1;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 1.6rem;
    display: block;
    width: 1rem;
    height: 0.2rem;
    transition: all 0.3s ease-out;
    background-color: #333333;
    transform: translate(-3px, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(3px, -50%) rotate(-45deg);
  }

  &: hover {
    border-color: #46cdd6;

    &::before,
    &::after {
      background-color: #46cdd6;
    }
  }
`;

interface MenuComponentProps {
  books: Book[];
  setBooksFiltered: (param: Book[] | null) => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ books, setBooksFiltered }) => {
  const [isActive, setActive] = useState(false);
  const [isShowTitle, setShowTitle] = useState('');

  const handleClickResetTitle = (): void => {
    setShowTitle('');
    setActive(false);
    setBooksFiltered(null);
  };

  const handleMenuClick = (): void => {
    setActive((state) => !state);
  };

  const handleTitleClick = (str: string): void => {
    setActive((state) => !state);
    setShowTitle(str);
  };

  useEffect(() => {
    if (isShowTitle) {
      const condition = data[isShowTitle];
      const filterBooks = books.filter(({ price }) => {
        if (Array.isArray(condition)) {
          const [min, max] = condition;

          return (price >= min && price <= max);
        }

        return price >= condition;
      });

      setBooksFiltered(filterBooks);
    }
  }, [isShowTitle, books, setBooksFiltered]);

  return (
    <Form name='price-form'>
      <MenuContainer>
        <Menu
          data-state={isActive ? 'active' : ''}
          className='menu'
          onClick={handleMenuClick}
        >
          <MenuContent className='menu__content'>
            <MenuContentComponent data={Object.keys(data)} handleClick={handleTitleClick} />
          </MenuContent>
          <MenuTitle
            className='menu__title'
            data-default={isShowTitle}
            tab-index='0'
          >
            {isShowTitle}
          </MenuTitle>
        </Menu>
      </MenuContainer>
      <ClearSvg
        style={{ 'display': `${isShowTitle ? 'block' : 'none'}` }}
        onClick={handleClickResetTitle}
      />
    </Form >
  )
};

export default MenuComponent;
