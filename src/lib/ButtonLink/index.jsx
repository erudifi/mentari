/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import ButtonLink from './Styled';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object
};

const defaultProps = {
  id: '',
  testid: '',
  children: '',
  color: '',
  block: false,
  outline: false,
  disabled: false,
  href: null,
  className: null,
  target: null,
  style: null,
  size: null
};

const Button = ({
  id,
  testid,
  children,
  href,
  block,
  color,
  outline,
  disabled,
  className,
  target,
  style,
  size
}) => (
  <ButtonLink
    id={id}
    size={size}
    data-testid={testid}
    colorType={color}
    block={block}
    outline={outline}
    disabled={disabled}
    className={className}
    target={target}
    href={href}
    style={style}
  >
    {children}
  </ButtonLink>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
