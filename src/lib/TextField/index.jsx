/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  TextFieldWrapper,
  TextFieldPrefix,
  TextFieldTooltip,
  TextFieldSuffix,
  TextFieldOptional
} from './Styled';
import Color from '../Styles/bases/Color';
import { Margin } from '../Styles/utils';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  userExist: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  autoFocus: PropTypes.bool,
  autoComplete: PropTypes.string,
  label: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.any]),
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
  type: 'text',
  label: '',
  placeholder: '',
  prefix: null,
  suffix: null,
  autoFocus: false,
  autoComplete: 'on',
  tooltip: null,
  disabled: false,
  optional: false,
  userExist: null,
  min: null,
  max: null
};

const TextField = ({
  id,
  testid,
  type,
  label,
  placeholder,
  input,
  prefix,
  suffix,
  autoFocus,
  autoComplete,
  disabled,
  optional,
  tooltip,
  min,
  max,
  userExist,
  meta: { error, touched }
}) => (
  <TextFieldWrapper
    valLength={input.value && input.value.length}
    error={error}
    touched={touched}
    hasPrefix={!!prefix}
    disabled={disabled}
  >
    {tooltip ? <TextFieldTooltip>{tooltip}</TextFieldTooltip> : null}
    {prefix ? <TextFieldPrefix>{prefix}</TextFieldPrefix> : null}
    {suffix ? <TextFieldSuffix>{suffix}</TextFieldSuffix> : null}
    <input
      id={id}
      data-testid={testid}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={input.value === undefined ? '' : input.value}
      onBlur={input.onBlur}
      onChange={e => {
        if (type === 'number') {
          if (max && e.target.value > max) {
            return input.onChange(max);
          }
          if (min && e.target.value.length !== 0 && e.target.value < min) {
            return input.onChange(min);
          }
          return input.onChange(e.target.value);
        }
        return input.onChange(e.target.value);
      }}
      autoFocus={autoFocus}
      tooltip={tooltip}
      disabled={disabled}
      min={min}
      max={max}
    />
    <label htmlFor={id}>{label}</label>
    {optional ? (
      <TextFieldOptional error={error}>
        <i>* jika ada</i>
      </TextFieldOptional>
    ) : null}
    {touched && error && (
      <Margin top={8}>
        <span style={{ color: Color.red }}>{error}</span>
        {userExist && error === 'Alamat email sudah terdaftar' ? (
          <Fragment>
            . Masuk&nbsp;
            <Link style={{ color: Color.blue, cursor: 'pointer' }} to={userExist}>
              di sini
            </Link>
          </Fragment>
        ) : null}
      </Margin>
    )}
  </TextFieldWrapper>
);

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
