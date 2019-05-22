/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { CheckboxWrapper, CheckboxInput } from './Styled';
import Color from '../Styles/bases/Color';
import { Margin, Padding } from '../Styles/utils';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
  withRedux: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  })
};

const defaultProps = {
  id: null,
  testid: '',
  name: null,
  label: '',
  disabled: false,
  withRedux: true,
  checked: true,
  input: {},
  meta: {},
  onChange: null
};

const Checkbox = ({
  id,
  testid,
  name,
  label,
  input,
  disabled,
  meta: { touched, error },
  withRedux,
  checked,
  onChange
}) => (
  <CheckboxWrapper>
    {withRedux ? (
      <Fragment>
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
      </Fragment>
    ) : (
      <Fragment>
        <CheckboxInput
          id={id}
          data-testid={testid}
          disabled={disabled}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id}>
          <Padding left={28}>{label}</Padding>
        </label>
      </Fragment>
    )}
  </CheckboxWrapper>
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
