import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from 'routes';
import { ThemeProvider } from 'styled-components';
import Main from 'modules/Main';
import GlobalStyle from 'core/assets/style/global';
import { DarkTheme } from 'core/assets/themes/dark';

const App: React.FC = () => (
  <ThemeProvider theme={DarkTheme}>
    <Router history={history}>
      <GlobalStyle />
      <Main />
    </Router>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
