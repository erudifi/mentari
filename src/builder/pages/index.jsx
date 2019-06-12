import React, { Component } from 'react';
import '../../index.scss';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SidebarShared from '../shared/Leftbar';
import { ContentWrapper, HeaderMenuMobile, TrigerMenuMobile } from './Styled';
import AvatarPage from './Avatar';
import ButtonPage from './Button';
import ButtonLikPage from './ButtonLink';
import CheckboxPage from './Checkbox';
import ColorPage from './Color';
import DatePickerSelectPage from './DatePicker';
import FlashMessagePage from './FlashMessage';
import GridPages from './Grid';
import ProgressPage from './Progress';
import RadioPage from './Radio';
import SelectPage from './Select';
import SwitchPage from './Switch';
import TextAreaPage from './TextArea';
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
        <div id="demoPage">
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
              <Route exact path="/button" component={ButtonPage} />
              <Route exact path="/button-link" component={ButtonLikPage} />
              <Route exact path="/color" component={ColorPage} />
              <Route exact path="/date-picker-select" component={DatePickerSelectPage} />
              <Route exact path="/flash-message" component={FlashMessagePage} />
              <Route exact path="/grid" component={GridPages} />
              <Route exact path="/progress" component={ProgressPage} />
              <Route exact path="/radio" component={RadioPage} />
              <Route exact path="/select" component={SelectPage} />
              <Route exact path="/switch" component={SwitchPage} />
              <Route exact path="/textarea" component={TextAreaPage} />
              <Route exact path="/textfield" component={TextfieldPage} />
              <Route exact path="/" component={WelcomePage} />
            </Switch>
          </ContentWrapper>
        </div>
      </Router>
    );
  }
}

export default MainPage;
