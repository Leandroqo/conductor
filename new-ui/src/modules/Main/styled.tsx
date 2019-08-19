import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background};
`;

const Menu = styled(({ toggle, ...rest }: any) => <menu {...rest} />)`
  width: ${({ toggle }) => toggle ? '220px' : '60px'};
  height: 100vh;
  padding: 0;
  margin: 0;
`;

const Header = styled.header`
  width: 100%;
  height: 70px;
`;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.section`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.backgroundDark};
  border-top-left-radius: 25px;
`;

const StyledMain = {
  Wrapper,
  Menu,
  Header,
  Container,
  Content,
};

export default StyledMain;
