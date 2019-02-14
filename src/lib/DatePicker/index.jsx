import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';

import { DateWrapper, DatePrefix } from './Styled';
import Color from '../Styles/bases/Color';
import { Margin } from '../Styles/utils';

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultPickerValue: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.node,
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
  label: '',
  placeholder: null,
  defaultPickerValue: null,
  disabled: false,
  prefix: null
};

class DatePicker extends Component {
  constructor(props) {
    super(props);
    const { defaultPickerValue } = props;
    this.state = {
      selected: defaultPickerValue ? new Date(props.defaultPickerValue) : new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
  }

  componentDidMount() {
    const { id, label } = this.props;
    const addLabel = document.createElement('label');
    const textLabel = document.createTextNode(label);
    addLabel.appendChild(textLabel);
    addLabel.setAttribute('for', id);
    const input = document.getElementById(id);
    input.parentNode.insertBefore(addLabel, input.nextSibling);
  }

  handleChange(date) {
    const { input } = this.props;
    this.setState({
      selected: date
    });
    input.onChange(date !== null ? moment(date).format('YYYY-MM-DD') : '');
  }

  // eslint-disable-next-line class-methods-use-this
  handleDateChangeRaw(e) {
    e.preventDefault();
  }

  render() {
    const { selected } = this.state;

    const {
      id,
      placeholder,
      input,
      disabled,
      prefix,
      meta: { error, touched }
    } = this.props;

    return (
      <div data-testid={id}>
        <DateWrapper
          hasPrefix={!!prefix}
          disabled={disabled}
          valLength={input.value && input.value.length}
          touched={touched}
          error={error}
        >
          {prefix ? <DatePrefix>{prefix}</DatePrefix> : null}
          <ReactDatePicker
            id={id}
            autoComplete="off"
            placeholderText={placeholder}
            isClearable={input.value !== ''}
            dateFormat="yyyy-MM-dd"
            selected={selected}
            className="rcDate"
            disabled={disabled}
            onChange={this.handleChange}
            onBlur={input.onBlur}
            onChangeRaw={this.handleDateChangeRaw}
            showMonthDropdown
            showYearDropdown
          />
          {touched && error && (
            <Margin top={8}>
              <span style={{ color: Color.red }}>{error}</span>
            </Margin>
          )}
        </DateWrapper>
      </div>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
