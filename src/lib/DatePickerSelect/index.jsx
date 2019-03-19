/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import PropTypes from 'prop-types';
import { Margin } from '../Styles/utils';
import Color from '../Styles/bases/Color';
import SelectWrapper from './Styled';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  label: PropTypes.string,
  defaultPickerValue: PropTypes.string,
  disabled: PropTypes.bool,
  yearMaxOption: PropTypes.number,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    value: PropTypes.string,
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
  label: '',
  defaultPickerValue: '',
  disabled: false,
  yearMaxOption: 0
};

class DatePickerSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDate: '',
      selectMonth: '',
      selectYear: '',
      valueHidden: props.disabled ? undefined : ''
    };
    this.renderDateOption = this.renderDateOption.bind(this);
    this.renderMonthOption = this.renderMonthOption.bind(this);
    this.renderYearOption = this.renderYearOption.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeDate(e) {
    const { selectDate, selectMonth, selectYear } = this.state;
    const { input, defaultPickerValue, disabled } = this.props;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        input.onChange(
          `${disabled ? undefined : selectYear || moment(defaultPickerValue).format('YYYY')}-${
            disabled ? undefined : selectMonth || moment(defaultPickerValue).format('MM')
          }-${disabled ? undefined : selectDate || moment(defaultPickerValue).format('DD')}`
        );
      }
    );
  }

  renderDateOption(date) {
    const options = [];
    for (let i = 1; i < date + 1; i += 1) {
      options.push(
        <option value={i < 10 ? `0${i}` : i} key={i}>
          {i < 10 ? `0${i}` : i}
        </option>
      );
    }
    return options;
  }

  renderMonthOption(date) {
    const options = [];
    for (let i = 1; i < date + 1; i += 1) {
      options.push(
        <option value={i < 10 ? `0${i}` : i} key={i}>
          {moment()
            .month(i - 1)
            .locale('id')
            .format('MMMM')}
        </option>
      );
    }
    return options;
  }

  renderYearOption(start, end) {
    const options = [];
    for (let i = start; i > end; i--) {
      options.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
    return options;
  }

  render() {
    const { selectDate, selectMonth, selectYear, valueHidden } = this.state;
    const {
      id,
      label,
      testid,
      defaultPickerValue,
      input,
      yearMaxOption,
      disabled,
      meta: { error, touched }
    } = this.props;
    return (
      <SelectWrapper touched={touched} error={error} testid={testid} disabled={disabled}>
        <input
          type="hidden"
          id={id}
          name={input.name}
          value={valueHidden || (input.value ? input.value : defaultPickerValue)}
          onChange={() => {}}
          onBlur={input.onBlur}
        />
        <p>{label}</p>
        <select
          name="selectDate"
          value={disabled ? undefined : selectDate || moment(defaultPickerValue).format('DD')}
          onChange={this.handleChangeDate}
          onBlur={this.handleChangeDate}
          className="dc-date"
          disabled={disabled}
        >
          <option value="">Tanggal</option>
          {this.renderDateOption(31)}
        </select>
        <select
          name="selectMonth"
          value={disabled ? undefined : selectMonth || moment(defaultPickerValue).format('MM')}
          onChange={this.handleChangeDate}
          onBlur={this.handleChangeDate}
          className="dc-month"
          disabled={disabled}
        >
          <option value="">Bulan</option>
          {this.renderMonthOption(12)}
        </select>
        <select
          name="selectYear"
          value={disabled ? undefined : selectYear || moment(defaultPickerValue).format('YYYY')}
          onChange={this.handleChangeDate}
          onBlur={this.handleChangeDate}
          className="dc-year"
          disabled={disabled}
        >
          <option value="">Tahun</option>
          {this.renderYearOption(new Date().getFullYear() + yearMaxOption, 1949)}
        </select>
        {touched && error && (
          <Margin top={8}>
            <span style={{ color: Color.red }}>{error}</span>
          </Margin>
        )}
      </SelectWrapper>
    );
  }
}

DatePickerSelect.propTypes = propTypes;
DatePickerSelect.defaultProps = defaultProps;

export default DatePickerSelect;
