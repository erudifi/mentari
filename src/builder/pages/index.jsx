import React, { Component, Fragment } from 'react';
import '../../index.scss';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SidebarShared from '../shared/Leftbar';
import { ContentWrapper, HeaderMenuMobile, TrigerMenuMobile } from './Styled';
import ButtonPage from './Button';
import ColorPage from './Color';
import WelcomePage from './Welcome';

const history = createBrowserHistory();

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuMobile: false
    };
  }

  render() {
    const { menuMobile } = this.state;
    return (
      <Router history={history}>
        <Fragment>
          <SidebarShared menuMobile={menuMobile} />
          <HeaderMenuMobile>
            <h2>Mentari</h2>
            <TrigerMenuMobile onClick={() => this.setState({ menuMobile: !menuMobile })}>
              <div />
              <div />
              <div />
            </TrigerMenuMobile>
          </HeaderMenuMobile>
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
  }
}

export default MainPage;
