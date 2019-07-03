/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import 'moment/locale/tl-ph';
import PropTypes from 'prop-types';
import { Margin } from '../Styles/utils';
import Color from '../Styles/bases/Color';
import SelectWrapper from './Styled';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  label: PropTypes.string,
  defaultPickerValue: PropTypes.string,
  language: PropTypes.string,
  disabled: PropTypes.bool,
  yearMaxOption: PropTypes.number,
  yearMinOption: PropTypes.number,
  withRedux: PropTypes.bool,
  // input prop is passed by redux-form to keep field in sync with state
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  })
};

const defaultProps = {
  id: '',
  testid: '',
  label: '',
  defaultPickerValue: '',
  disabled: false,
  yearMaxOption: 0,
  yearMinOption: 0,
  withRedux: true,
  input: {},
  meta: {},
  language: ''
};

class DatePickerSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDate: '',
      selectMonth: '',
      selectYear: '',
      valueHidden: ''
    };
    this.renderDateOption = this.renderDateOption.bind(this);
    this.renderMonthOption = this.renderMonthOption.bind(this);
    this.renderYearOption = this.renderYearOption.bind(this);
    this.renderPlaceholder = this.renderPlaceholder.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { disabled } = this.props;
    if (prevProps.disabled !== disabled) {
      this.setState({
        selectDate: '',
        selectMonth: '',
        selectYear: ''
      });
    }
  }

  handleChangeDate(e) {
    const { selectDate, selectMonth, selectYear } = this.state;
    const { input, defaultPickerValue, withRedux } = this.props;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        {
          withRedux
            ? input.onChange(
                `${selectYear || moment(defaultPickerValue).format('YYYY')}-${selectMonth ||
                  moment(defaultPickerValue).format('MM')}-${selectDate ||
                  moment(defaultPickerValue).format('DD')}`
              )
            : '';
        }
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
    const { language } = this.props;
    const options = [];
    for (let i = 1; i < date + 1; i += 1) {
      options.push(
        <option value={i < 10 ? `0${i}` : i} key={i}>
          {moment()
            .month(i - 1)
            .locale(language ? `${language}` : 'id')
            .format('MMMM')}
        </option>
      );
    }
    return options;
  }

  renderPlaceholder(language) {
    switch (language) {
      case 'en':
        return ['Date', 'Month', 'Year'];
      case 'tl-ph':
        return ['Araw', 'Buwan', 'Taon'];
      default:
        return ['Tanggal', 'Bulan', 'Tahun'];
    }
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
      yearMinOption,
      disabled,
      language,
      withRedux,
      meta: { error, touched }
    } = this.props;

    const placeholder = this.renderPlaceholder(language);
    return (
      <Fragment>
        {withRedux ? (
          <SelectWrapper error={error} testid={testid} disabled={disabled}>
            <input
              type="hidden"
              id={id}
              name={input.name}
              value={valueHidden || input.value ? input.value : defaultPickerValue}
              onChange={() => {}}
              onBlur={input.onBlur}
            />
            <p className="label-select">{label}</p>
            <select
              name="selectDate"
              value={disabled ? selectDate : selectDate || moment(defaultPickerValue).format('DD')}
              onChange={this.handleChangeDate}
              onBlur={this.handleChangeDate}
              className="dc-date"
              disabled={disabled}
            >
              <option value="">{placeholder[0]}</option>
              {this.renderDateOption(31)}
            </select>
            <select
              name="selectMonth"
              value={
                disabled ? selectMonth : selectMonth || moment(defaultPickerValue).format('MM')
              }
              onChange={this.handleChangeDate}
              onBlur={this.handleChangeDate}
              className="dc-month"
              disabled={disabled}
            >
              <option value="">{placeholder[1]}</option>
              {this.renderMonthOption(12)}
            </select>
            <select
              name="selectYear"
              value={
                disabled ? selectYear : selectYear || moment(defaultPickerValue).format('YYYY')
              }
              onChange={this.handleChangeDate}
              onBlur={this.handleChangeDate}
              className="dc-year"
              disabled={disabled}
            >
              <option value="">{placeholder[2]}</option>
              {this.renderYearOption(
                new Date().getFullYear() + yearMaxOption,
                new Date().getFullYear() - (1 + yearMinOption)
              )}
            </select>
            {touched && error && (
              <Margin top={8}>
                <span style={{ color: Color.red }}>{error}</span>
              </Margin>
            )}
          </SelectWrapper>
        ) : (
          <SelectWrapper testid={testid} disabled={disabled}>
            <input
              type="hidden"
              id={id}
              name={input.name}
              value={valueHidden ? '' : defaultPickerValue}
              onChange={() => {}}
            />
            <p className="label-select">{label}</p>
            <select
              name="selectDate"
              value={disabled ? selectDate : selectDate || moment(defaultPickerValue).format('DD')}
              onChange={this.handleChangeDate}
              className="dc-date"
              disabled={disabled}
            >
              <option value="">{placeholder[0]}</option>
              {this.renderDateOption(31)}
            </select>
            <select
              name="selectMonth"
              value={
                disabled ? selectMonth : selectMonth || moment(defaultPickerValue).format('MM')
              }
              onChange={this.handleChangeDate}
              className="dc-month"
              disabled={disabled}
            >
              <option value="">{placeholder[1]}</option>
              {this.renderMonthOption(12)}
            </select>
            <select
              name="selectYear"
              value={
                disabled ? selectYear : selectYear || moment(defaultPickerValue).format('YYYY')
              }
              onChange={this.handleChangeDate}
              className="dc-year"
              disabled={disabled}
            >
              <option value="">{placeholder[2]}</option>
              {this.renderYearOption(
                new Date().getFullYear() + yearMaxOption,
                new Date().getFullYear() - (1 + yearMinOption)
              )}
            </select>
          </SelectWrapper>
        )}
      </Fragment>
    );
  }
}

DatePickerSelect.propTypes = propTypes;
DatePickerSelect.defaultProps = defaultProps;

export default DatePickerSelect;
