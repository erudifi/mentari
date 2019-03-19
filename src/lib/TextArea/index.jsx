/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import { TextAreaWrapper, TextAreaPrefix } from './Styled';
import { Margin } from '../Styles/utils';
import Color from '../Styles/bases/Color';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.node,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  }).isRequired
};

const defaultProps = {
  id: '',
  testid: '',
  name: '',
  placeholder: null,
  disabled: false,
  prefix: '',
  label: ''
};

const TextArea = ({
  id,
  name,
  testid,
  label,
  placeholder,
  prefix,
  disabled,
  input,
  meta: { error, touched }
}) => (
  <TextAreaWrapper
    valLength={input.value && input.value.length}
    error={error}
    touched={touched}
    hasPrefix={!!prefix}
    disabled={disabled}
  >
    {prefix ? <TextAreaPrefix>{prefix}</TextAreaPrefix> : null}
    <textarea
      id={id}
      data-testid={testid}
      name={name}
      rows="3"
      placeholder={placeholder}
      value={disabled ? '' : input.value === undefined ? '' : input.value}
      onBlur={input.onBlur}
      onChange={input.onChange}
      disabled={disabled}
    />
    <label htmlFor={id}>{label}</label>
    {touched && error && (
      <Margin top={8}>
        <span style={{ color: Color.red }}>{error}</span>
      </Margin>
    )}
  </TextAreaWrapper>
);

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
