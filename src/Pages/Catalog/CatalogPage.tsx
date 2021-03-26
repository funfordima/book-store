import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Container, Wrapper } from '../../utils/styledComponents';
import UserBar from '../../Components/UserBar/UserBarContainer';
import Header from '../../Components/Header/HeaderContainer';
import MainSearch from '../../Components/MainSearch/MainSearchContainer';
import Gallery from '../../Components/Gallery/GalleryContainer';
import Menu from '../../Components/Menu/MenuContainer';
import { LOGIN_ROUTE } from '../../utils/constants';

const Wrap = styled(Wrapper)`
  height: 100%;
`;

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
`;

interface CatalogPageProps {
  isAuth: boolean;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ isAuth }) => (
  <>
    {isAuth
      ? <Container>
        <Wrap>
          <UserBar />
          <Header />
          <ControlBar>
            <MainSearch />
            <Menu />
          </ControlBar>
          <Gallery />
        </Wrap>
      </Container>
      : <Redirect to={LOGIN_ROUTE} />
    }
  </>
);

export default CatalogPage;
