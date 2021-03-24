import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7f5a83;
  background-image: radial-gradient(#7f5a83 0, #0d324d 74%);
  z-index: 20;
`;

const Spinner = styled.div`
  width: 17rem;
  height: 17rem;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%,-50%);
`;

const FirstCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  border-width: 4px;

  width: 15rem;
  height: 15rem;
  top: 1rem;
  left: 1rem;
  border-color: #88d2ff transparent;
  animation: spin 1.5s cubic-bezier(.075,.82,.165,1) 0s infinite;

  @keyframes spin {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
  }
`;

const SecondCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  border-width: 4px;

  width: 17rem;
  height: 17rem;
  top: 0;
  left: 0;
  border-color: transparent #e485fc;
  animation: spin 1s cubic-bezier(.25,.46,.45,.94) 0s infinite;

  @keyframes spin {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
  }
`;

const Loader: React.FC = () => (
  <Container>
    <Spinner>
      <FirstCircle />
      <SecondCircle />
    </Spinner>
  </Container>
);

export default Loader;
