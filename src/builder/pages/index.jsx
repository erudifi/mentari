import React, { Fragment } from 'react';
import '../../index.scss';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SidebarShared from '../shared/Sidebar';
import { ContentWrapper } from './Styled';
import WelcomePage from './Welcome';
import ButtonPage from './Button';

const history = createBrowserHistory();

const MainPage = () => (
  <Fragment>
    <SidebarShared />
    <ContentWrapper>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/button" component={ButtonPage} />
        </Switch>
      </Router>
    </ContentWrapper>
  </Fragment>
);

export default MainPage;
