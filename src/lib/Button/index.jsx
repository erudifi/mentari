/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper, Loader } from './Styled';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  color: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object
};

const defaultProps = {
  id: '',
  testid: '',
  children: '',
  type: '',
  color: '',
  block: false,
  outline: false,
  disabled: false,
  onClick: null,
  className: null,
  loading: false,
  size: null,
  style: null
};

const Button = ({
  id,
  testid,
  children,
  type,
  block,
  color,
  outline,
  disabled,
  onClick,
  className,
  loading,
  style,
  size
}) => (
  <ButtonWrapper
    id={id}
    data-testid={testid}
    type={type}
    colorType={color}
    block={block}
    outline={outline}
    disabled={disabled}
    onClick={onClick}
    className={className}
    style={style}
    size={size}
  >
    {loading ? <Loader /> : children}
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
