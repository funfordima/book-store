import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 9.4rem;
  height: 4rem;
  padding: 0 2.6rem;
  box-sizing: border-box;
  border: 1px solid #dfe1f0;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
`;

const QuantityDown = styled.span`
  width: 2.6rem;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  font-size: 0;
  background: #f6f8fd;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 0.2rem;
    width: 0.8rem;
    margin: -1px 0 0 -4px;
    background: #000;
  }
`;

const QuantityUp = styled(QuantityDown)`
  right: 0;
  left: auto;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 0.8rem;
    width: 0.2rem;
    margin: -4px 0 0 -1px;
    background: #000;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem 0;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: center;
  border: none;
  outline: none;
  color: #555;
  vertical-align: middle;
`;

interface CountBarProps {
  totalBookCount: number;
  calcTotalPrice: (arg: number) => void;
}

const CountBar: React.FC<CountBarProps> = ({ totalBookCount, calcTotalPrice }) => {
  const [count, setCount] = useState('1');

  const handleChangeCount = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCount(target.value.trim());
  };

  const handleClickDown = () => {
    setCount((state) => {
      if ((+state - 1) <= 0) {
        return '0';
      }

      return `${+state - 1}`;
    });
  };

  const handleClickUp = () => {
    setCount((state) => {
      if ((+state + 1) >= totalBookCount) {
        return `${totalBookCount}`;
      }

      return `${+state + 1}`;
    });
  };

  useEffect(() => {
    calcTotalPrice(+count);
  }, [count, calcTotalPrice]);

  return (
    <Container>
      <QuantityDown onClick={handleClickDown} />
      <Input
        type='text'
        tab-index='0'
        value={count}
        onChange={handleChangeCount}
      />
      <QuantityUp onClick={handleClickUp} />
    </Container>
  );
};

export default CountBar;
