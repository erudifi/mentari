/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { RowWrapper } from './Styled';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  align: PropTypes.string,
  justify: PropTypes.string
};

const defaultProps = {
  children: null,
  className: null,
  style: null,
  align: null,
  justify: null
};

const Row = ({ children, className, style, justify, align }) => (
  <RowWrapper justify={justify} align={align} className={className} style={style}>
    {children}
  </RowWrapper>
);

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
