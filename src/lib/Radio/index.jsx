/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { RadioWrapper, RadioInput, RadioGroup } from './Styled';

const propTypes = {
  fieldData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  withRedux: PropTypes.bool,
  block: PropTypes.bool,
  customOnChange: PropTypes.func,
  onChange: PropTypes.func,
  slideOption: PropTypes.bool,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func
  })
};

const defaultProps = {
  customOnChange: () => {},
  onChange: () => {},
  defaultValue: '',
  slideOption: false,
  withRedux: true,
  block: false,
  input: {}
};

const Radio = ({
  fieldData,
  input,
  customOnChange,
  slideOption,
  withRedux,
  onChange,
  name,
  block,
  defaultValue
}) => (
  <Fragment>
    {withRedux ? (
      <RadioGroup slideOption={slideOption}>
        {fieldData.map(option => (
          <RadioWrapper key={option.id} block={block}>
            <RadioInput
              id={option.id}
              data-testid={option.id}
              name={input.name}
              type="radio"
              block={block}
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
    ) : (
      <RadioGroup slideOption={slideOption}>
        {fieldData.map(option => (
          <RadioWrapper key={option.id} block={block}>
            <RadioInput
              id={option.id}
              data-testid={option.id}
              name={name}
              type="radio"
              value={option.id}
              slideOption={slideOption}
              onChange={onChange}
              checked={defaultValue === option.id}
            />
            <label htmlFor={option.id}>{option.name}</label>
          </RadioWrapper>
        ))}
      </RadioGroup>
    )}
  </Fragment>
);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
