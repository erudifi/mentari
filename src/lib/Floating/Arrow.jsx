import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FloatingArrowWrapper, ArrowBounce } from './Styled';

const propTypes = {
  text: PropTypes.string,
  withArrow: PropTypes.bool
};

const defaultProps = {
  text: null,
  withArrow: null
};

class FloatingArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrolling } = this.state;
    if (window.scrollY === 0 && scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY > 180 && scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }

  render() {
    const { text, withArrow } = this.props;
    const { scrolling } = this.state;
    return (
      <FloatingArrowWrapper hidden={scrolling} icon={withArrow}>
        <span>{text}</span>
        {withArrow ? (
          <ArrowBounce>
            <div className="arrow-down icon" />
          </ArrowBounce>
        ) : null}
      </FloatingArrowWrapper>
    );
  }
}

FloatingArrow.propTypes = propTypes;
FloatingArrow.defaultProps = defaultProps;

export default FloatingArrow;
