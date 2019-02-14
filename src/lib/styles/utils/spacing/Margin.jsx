import React from 'react';
import PropTypes from 'prop-types';
import { MarginWrapper } from './Styled';

const defaultProps = {
  top: null,
  right: null,
  bottom: null,
  left: null,
  vertical: null,
  horizontal: null,
  children: null
};

const propTypes = {
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
  children: PropTypes.node
};

const Margin = ({ top, right, bottom, left, vertical, horizontal, children }) => (
  <MarginWrapper
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    vertical={vertical}
    horizontal={horizontal}
  >
    {children}
  </MarginWrapper>
);

Margin.defaultProps = defaultProps;

Margin.propTypes = propTypes;

export default Margin;
