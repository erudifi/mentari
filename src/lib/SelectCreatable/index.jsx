/* eslint-disable class-methods-use-this */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { css } from 'emotion';
import { SelectCreatableWrapper, SelectCreatableInput, SelectCreatableLabel } from './Styled';
import Color from '../Styles/bases/Color';
import { Margin } from '../Styles/utils';

const propTypes = {
  placeholder: PropTypes.string,
  testid: PropTypes.string,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  customOnChange: PropTypes.func,
  withRedux: PropTypes.bool,
  valueSelect: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  fieldData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string
    })
  ).isRequired,
  withReset: PropTypes.bool,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
    onChange: PropTypes.func
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  })
};

const defaultProps = {
  placeholder: null,
  testid: null,
  isDisabled: false,
  autoFocus: false,
  withReset: false,
  withRedux: true,
  label: '',
  valueSelect: undefined,
  customOnChange: () => {},
  input: {},
  onChange: null,
  meta: {}
};

const CustomOption = params => {
  const {
    innerProps,
    isDisabled,
    isFocused,
    isSelected,
    className,
    data,
    cx,
    getStyles,
    label
  } = params;
  return !isDisabled ? (
    <div
      className={cx(
        css(getStyles('option', params)),
        {
          option: true,
          'option--is-disabled': isDisabled,
          'option--is-focused': isFocused,
          'option--is-selected': isSelected
        },
        className
      )}
      {...innerProps}
      data-testid={data.id}
    >
      {label}
    </div>
  ) : null;
};

class SelectCreatable extends Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.isValidNewOption = this.isValidNewOption.bind(this);
  }

  isValidNewOption(inputValue, selectValue, selectOptions) {
    if (
      inputValue.trim().length === 0 ||
      selectOptions.find(option => option.id === inputValue) ||
      selectOptions.find(option => option.name === inputValue)
    ) {
      return false;
    }
    return true;
  }

  handleReset() {
    const { input } = this.props;
    input.onChange('');
  }

  render() {
    const {
      placeholder,
      autoFocus,
      isDisabled,
      fieldData,
      withReset,
      customOnChange,
      input,
      label,
      testid,
      withRedux,
      valueSelect,
      onChange,
      meta: { error, touched }
    } = this.props;
    return (
      <div data-testid={testid}>
        {withRedux ? (
          <SelectCreatableWrapper isDisabled={isDisabled}>
            {input.value !== '' ? <SelectCreatableLabel>{label}</SelectCreatableLabel> : null}
            <SelectCreatableInput
              placeholder={placeholder}
              autoFocus={autoFocus}
              isDisabled={isDisabled}
              options={fieldData}
              components={{
                Option: CustomOption
              }}
              getOptionLabel={option => option.name}
              getOptionValue={option => option.name}
              getNewOptionData={(inputValue, optionLabel) => ({
                id: inputValue.toLowerCase(),
                name: optionLabel,
                __isNew__: true
              })}
              formatCreateLabel={value => `Tambahkan ${value}`}
              isValidNewOption={this.isValidNewOption}
              classNamePrefix="rselect"
              className={classNames({ 'has-error': touched && error })}
              style={{ borderWith: 1, minHeight: 60, maxHeight: 60 }}
              theme={theme => ({
                ...theme,
                borderRadius: 4,
                colors: {
                  ...theme.colors,
                  primary25: Color.lightBlue,
                  primary: Color.blue
                }
              })}
              value={
                input.value || undefined
                  ? typeof input.value === 'number' || typeof input.value === 'string'
                    ? fieldData.find(obj => obj.id === input.value)
                    : input.value
                  : input.value
              }
              onChange={value => {
                customOnChange(value.id);
                input.onChange(value.id);
              }}
              onBlur={() => input.onBlur()}
            />
            {input.value !== '' && withReset ? (
              <span
                style={{
                  position: 'absolute',
                  right: 12,
                  top: 10,
                  fontSize: 26,
                  color: '#bfbfbf',
                  cursor: 'pointer'
                }}
                onClick={this.handleReset}
              >
                &times;
              </span>
            ) : null}
            {touched && error && (
              <Margin top={8}>
                <span style={{ color: Color.red }}>{error}</span>
              </Margin>
            )}
          </SelectCreatableWrapper>
        ) : (
          <SelectCreatableWrapper isDisabled={isDisabled}>
            {valueSelect.id !== undefined ? (
              <SelectCreatableLabel>{label}</SelectCreatableLabel>
            ) : null}
            <SelectCreatableInput
              placeholder={placeholder}
              autoFocus={autoFocus}
              isDisabled={isDisabled}
              options={fieldData}
              components={{
                Option: CustomOption
              }}
              getOptionLabel={option => option.name}
              getOptionValue={option => option.name}
              getNewOptionData={(inputValue, optionLabel) => ({
                id: inputValue.toLowerCase(),
                name: optionLabel,
                __isNew__: true
              })}
              formatCreateLabel={value => `Tambahkan ${value}`}
              isValidNewOption={this.isValidNewOption}
              classNamePrefix="rselect"
              className={classNames({ 'has-error': touched && error })}
              style={{ borderWith: 1, minHeight: 60, maxHeight: 60 }}
              value={valueSelect}
              onChange={onChange}
              theme={theme => ({
                ...theme,
                borderRadius: 4,
                colors: {
                  ...theme.colors,
                  primary25: Color.lightBlue,
                  primary: Color.blue
                }
              })}
            />
          </SelectCreatableWrapper>
        )}
      </div>
    );
  }
}

SelectCreatable.propTypes = propTypes;
SelectCreatable.defaultProps = defaultProps;

export default SelectCreatable;
