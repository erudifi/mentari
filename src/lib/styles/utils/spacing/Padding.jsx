import React from 'react';
import PropTypes from 'prop-types';
import { PaddingWrapper } from './Styled';

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

const Padding = ({ top, right, bottom, left, vertical, horizontal, children }) => (
  <PaddingWrapper
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    vertical={vertical}
    horizontal={horizontal}
  >
    {children}
  </PaddingWrapper>
);

Padding.defaultProps = defaultProps;

Padding.propTypes = propTypes;

export default Padding;
