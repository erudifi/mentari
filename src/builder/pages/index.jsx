import React, { Fragment } from 'react';
import '../../index.scss';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SidebarShared from '../shared/Leftbar';
import { ContentWrapper } from './Styled';
import ButtonPage from './Button';
import ColorPage from './Color';
import WelcomePage from './Welcome';

const history = createBrowserHistory();

const MainPage = () => (
  <Router history={history}>
    <Fragment>
      <SidebarShared />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/color" component={ColorPage} />
          <Route exact path="/button" component={ButtonPage} />
        </Switch>
      </ContentWrapper>
    </Fragment>
  </Router>
);

export default MainPage;
