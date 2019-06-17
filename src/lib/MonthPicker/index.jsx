/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-for */
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import YearMonthSelector from 'react-year-month-selector';
import { MonthWrapper } from './Styled';
import { Margin } from '../Styles/utils';
import Color from '../Styles/bases/Color';

const propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  defaultPickerValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
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
  id: null,
  placeholder: null,
  label: null,
  name: null,
  disabled: false,
  defaultPickerValue: null,
  withRedux: true,
  input: {},
  meta: {}
};

class MonthPicker extends Component {
  constructor(props) {
    super(props);
    const { defaultPickerValue } = props;
    this.state = {
      pickerOpen: false,
      valueOfState: '',
      month:
        defaultPickerValue !== null
          ? Number(moment(defaultPickerValue).format('MM')) - 1
          : new Date().getMonth(),
      year:
        defaultPickerValue !== null
          ? Number(moment(defaultPickerValue).format('YYYY'))
          : new Date().getFullYear()
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleOpen() {
    this.setState({
      pickerOpen: true
    });
  }

  handleClose() {
    this.setState({ pickerOpen: false });
  }

  handleChange(year, month) {
    const { input, withRedux } = this.props;
    {
      withRedux &&
        input.onChange(
          year !== ''
            ? moment()
                .year(year)
                .month(month)
                .format('YYYY-MM')
            : ''
        );
    }
    this.setState({
      month,
      year,
      valueOfState: `${year}-${month + 1}`
    });
  }

  handleClickOutside(e) {
    if (this.node !== null && !this.node.contains(e.target)) {
      this.setState({
        pickerOpen: false
      });
    }
  }

  render() {
    const {
      id,
      name,
      placeholder,
      disabled,
      label,
      withRedux,
      input,
      meta: { error, touched }
    } = this.props;
    const { pickerOpen, month, year, valueOfState } = this.state;
    return (
      <Fragment>
        {withRedux ? (
          <MonthWrapper
            valLength={input.value && input.value.length}
            touched={touched}
            error={error}
          >
            <input
              id={id}
              data-testid={id}
              name={name}
              type="text"
              placeholder={placeholder}
              onClick={this.handleOpen}
              onClose={this.handleClose}
              value={input.value !== 'Invalid date' ? input.value : ''}
              autoComplete="off"
              onChange={input.onChange}
              disabled={disabled}
              readOnly
            />
            <label htmlFor={id}>{label}</label>
            <div ref={node => (this.node = node)}>
              <YearMonthSelector
                year={year}
                month={month}
                open={pickerOpen}
                onClose={this.handleClose}
                onChange={this.handleChange}
              />
            </div>
            {touched && error && (
              <Margin top={8}>
                <span style={{ color: Color.red }}>{error}</span>
              </Margin>
            )}
          </MonthWrapper>
        ) : (
          <MonthWrapper valLength={valueOfState && valueOfState.length}>
            <input
              id={id}
              data-testid={id}
              name={name}
              type="text"
              placeholder={placeholder}
              onClick={this.handleOpen}
              onClose={this.handleClose}
              value={valueOfState}
              autoComplete="off"
              onChange={this.handleChangevalueOfState}
              disabled={disabled}
              readOnly
            />
            <label htmlFor={id}>{label}</label>
            <div ref={node => (this.node = node)}>
              <YearMonthSelector
                year={year}
                month={month}
                open={pickerOpen}
                onClose={this.handleClose}
                onChange={this.handleChange}
              />
            </div>
          </MonthWrapper>
        )}
      </Fragment>
    );
  }
}

MonthPicker.propTypes = propTypes;
MonthPicker.defaultProps = defaultProps;

export default MonthPicker;
