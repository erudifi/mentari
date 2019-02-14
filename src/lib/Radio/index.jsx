/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import { RadioWrapper, RadioInput, RadioGroup } from './Styled';

const propTypes = {
  fieldData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string
    })
  ).isRequired,
  customOnChange: PropTypes.func,
  slideOption: PropTypes.bool,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func
  }).isRequired
};

const defaultProps = {
  customOnChange: () => {},
  slideOption: false
};

const Radio = ({ fieldData, input, customOnChange, slideOption }) => (
  <RadioGroup slideOption={slideOption}>
    {fieldData.map(option => (
      <RadioWrapper key={option.id}>
        <RadioInput
          id={option.id}
          data-testid={option.id}
          name={input.name}
          type="radio"
          value={option.id}
          checked={input && input.value === option.id}
          slideOption={slideOption}
          onChange={value => {
            customOnChange(value);
            input.onChange(value);
          }}
        />
        <label htmlFor={option.id}>{option.name}</label>
      </RadioWrapper>
    ))}
  </RadioGroup>
);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
