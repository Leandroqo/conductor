import React from 'react'
import { Route, Switch } from 'react-router';
import { PATH } from 'routes';
import Executions from 'modules/Executions';
import Menu from 'modules/Main/Menu';
import Header from 'modules/Main/Header';
import StyledMain from 'modules/Main/styled';

const Main: React.FC = () => (
  <StyledMain.Wrapper>
    <Menu />
    <StyledMain.Container>
      <Header />
      <StyledMain.Content>
        <Switch>
          <Route exact path={PATH.MAIN} component={Executions} />
        </Switch>
      </StyledMain.Content>
    </StyledMain.Container>
  </StyledMain.Wrapper>
);

export default Main;
