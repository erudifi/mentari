import React, { Component, Fragment } from 'react';
import '../../index.scss';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SidebarShared from '../shared/Leftbar';
import { ContentWrapper, HeaderMenuMobile, TrigerMenuMobile } from './Styled';
import AvatarPage from './Avatar';
import ButtonPage from './Button';
import CheckboxPage from './Checkbox';
import ColorPage from './Color';
import ProgressPage from './Progress';
import RadioPage from './Radio';
import TextfieldPage from './Textfield';
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
              <Route exact path="/avatar" component={AvatarPage} />
              <Route exact path="/checkbox" component={CheckboxPage} />
              <Route exact path="/color" component={ColorPage} />
              <Route exact path="/button" component={ButtonPage} />
              <Route exact path="/progress" component={ProgressPage} />
              <Route exact path="/radio" component={RadioPage} />
              <Route exact path="/textfield" component={TextfieldPage} />
              <Route exact path="/" component={WelcomePage} />
            </Switch>
          </ContentWrapper>
        </Fragment>
      </Router>
    );
  }
}

export default MainPage;
