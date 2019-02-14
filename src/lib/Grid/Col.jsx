/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { ColWrapper } from './Styled';

const propTypes = {
  children: PropTypes.node,
  span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object
};

const defaultProps = {
  children: null,
  span: null,
  lg: null,
  md: null,
  sm: null,
  xs: null,
  className: null,
  style: null
};

const Col = ({ children, lg, md, sm, xs, span, className, style }) => (
  <ColWrapper lg={lg} md={md} sm={sm} xs={xs} span={span} className={className} style={style}>
    {children}
  </ColWrapper>
);

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
