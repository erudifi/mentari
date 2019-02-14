/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types';
import React from 'react';

import { CheckboxWrapper, CheckboxInput } from './Styled';
import Color from '../Styles/bases/Color';
import { Margin, Padding } from '../Styles/utils';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  }).isRequired
};

const defaultProps = {
  id: null,
  testid: '',
  name: null,
  label: '',
  disabled: false
};

const Checkbox = ({ id, testid, name, label, input, disabled, meta: { touched, error } }) => (
  <CheckboxWrapper>
    <CheckboxInput
      id={id}
      data-testid={testid}
      disabled={disabled}
      type="checkbox"
      name={name}
      value={input.value}
      onBlur={input.onBlur}
      onChange={input.onChange}
    />
    <label htmlFor={id}>
      <Padding left={28}>{label}</Padding>
    </label>
    {touched && error && (
      <Margin top={8} left={28}>
        <span style={{ color: Color.red }}>{error}</span>
      </Margin>
    )}
  </CheckboxWrapper>
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
