import PropTypes from 'prop-types';
import React from 'react';
import { SwitchWrapper, SwitchInput, SwitchSlider } from './Styled';

const propTypes = {
  disabled: PropTypes.bool,
  customOnChange: PropTypes.func,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    onChange: PropTypes.func
  }).isRequired
};

const defaultProps = {
  disabled: false,
  customOnChange: () => {}
};

const SwitchField = ({ disabled, customOnChange, input }) => (
  <React.Fragment>
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        disabled={disabled}
        onChange={value => {
          // Custom onChange function to make form dynamic
          customOnChange(value);
          // Redux Form onChange function to sync field value with state
          input.onChange(value);
        }}
      />
      <SwitchSlider />
    </SwitchWrapper>
  </React.Fragment>
);

SwitchField.propTypes = propTypes;
SwitchField.defaultProps = defaultProps;

export default SwitchField;
