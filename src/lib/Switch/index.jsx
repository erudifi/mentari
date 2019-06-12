/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { SwitchWrapper, SwitchInput, SwitchSlider } from './Styled';

const propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  customOnChange: PropTypes.func,
  withRedux: PropTypes.bool,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    onChange: PropTypes.func
  })
};

const defaultProps = {
  disabled: false,
  withRedux: true,
  input: {},
  className: null,
  style: null,
  customOnChange: () => {}
};

const SwitchField = ({ className, style, withRedux, disabled, customOnChange, input }) => (
  <Fragment>
    {withRedux ? (
      <SwitchWrapper className={className} style={style}>
        <SwitchInput
          type="checkbox"
          disabled={disabled}
          checked={input.value}
          onChange={value => {
            // Custom onChange function to make form dynamic
            customOnChange(value);
            // Redux Form onChange function to sync field value with state
            input.onChange(value);
          }}
        />
        <SwitchSlider />
      </SwitchWrapper>
    ) : (
      <SwitchWrapper className={className} style={style}>
        <SwitchInput type="checkbox" disabled={disabled} />
        <SwitchSlider />
      </SwitchWrapper>
    )}
  </Fragment>
);

SwitchField.propTypes = propTypes;
SwitchField.defaultProps = defaultProps;

export default SwitchField;
