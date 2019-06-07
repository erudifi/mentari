/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { FlashMessageWrapper, FlashMessageContent, FlashMessageDismiss } from './Styled';
import { Container } from '../Styles/bases/General';

const propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  content: PropTypes.node.isRequired
};

const defaultProps = {
  className: null,
  style: null
};

class FlashMessage extends Component {
  constructor() {
    super();
    this.state = {
      showMessage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      showMessage: true
    });
    setTimeout(() => {
      this.setState({
        showMessage: false
      });
      document.getElementById('dc-alert').remove();
    }, 5000);
  }

  handleClick() {
    this.setState({
      showMessage: false
    });
  }

  render() {
    const { content, type, className, style } = this.props;
    const { showMessage } = this.state;
    return (
      <Fragment>
        {showMessage ? (
          <FlashMessageWrapper type={type} className={className} style={style}>
            <Container>
              <FlashMessageContent>{content}</FlashMessageContent>
              <FlashMessageDismiss onClick={this.handleClick}>
                <span />
                <span />
              </FlashMessageDismiss>
            </Container>
          </FlashMessageWrapper>
        ) : null}
      </Fragment>
    );
  }
}

FlashMessage.propTypes = propTypes;
FlashMessage.defaultProps = defaultProps;

export default function flashMessage(type, content, className, style) {
  const alertDiv = document.createElement('div');
  const height = document.getElementById('dc-sub-header') ? '141px' : '56px';
  const defaultHeight = document.getElementById('demoPage');
  alertDiv.setAttribute('id', 'dc-alert');
  alertDiv.style.position = 'fixed';
  alertDiv.style.zIndex = '100';
  alertDiv.style.width = '100%';
  alertDiv.style.top = defaultHeight ? '0px' : height;
  ReactDOM.render(
    <FlashMessage type={type} content={content} className={className} style={style} />,
    document.getElementById('root').insertAdjacentElement('beforeend', alertDiv)
  );
}
