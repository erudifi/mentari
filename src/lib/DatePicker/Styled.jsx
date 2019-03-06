import styled, { css } from 'styled-components';

import Color from '../Styles/bases/Color';
import { Transition } from '../Styles/utils';

const DateWrapper = styled.div`
  position: relative;

  .react-datepicker__close-icon::after {
    color: ${Color.grey191};
    font-size: 24px;
    right: 3px;
    background-color: transparent;
  }

  .react-datepicker__day--outside-month {
    color: ${Color.grey191};
  }

  .react-datepicker {
    font-family: proxima-nova, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
    border-radius: 10px;
    .react-datepicker__triangle {
      &:before {
        border-bottom-color: ${Color.white} !important;
      }
    }
    .react-datepicker__navigation--previous {
      border-width: 8px;
    }
    .react-datepicker__navigation--next {
      border-width: 8px;
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${Color.blue};
    &:hover {
      background-color: ${Color.blue};
    }
  }

  .react-datepicker__header {
    background-color: ${Color.white};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .react-datepicker__current-month {
      font-size: 16px;
      color: ${Color.darkBlue};
    }
  }

  .react-datepicker__month {
    margin: 10px;
  }

  .react-datepicker__today-button {
    background-color: ${Color.white};
    font-size: 16px;
    padding: 12px;
  }

  .react-datepicker__month-container {
    width: 100%;
    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      width: 3.2rem;
      font-size: 14px;
      line-height: 3.2rem;
      margin: 4px;
    }
  }
  .react-datepicker-popper {
    width: 300px;
    z-index: 400;
  }
  .react-datepicker {
    width: 100%;
  }
  .react-datepicker__input-container,
  .react-datepicker-wrapper {
    width: 100%;
    display: block;
  }

  .react-datepicker__month-dropdown,
  .react-datepicker__year-dropdown {
    width: 160px;
    font-size: 14px;
    left: -75%;
    top: 0;
  }

  .react-datepicker__month-read-view,
  .react-datepicker__year-read-view {
    font-size: 14px;
  }

  .react-datepicker__month-option,
  .react-datepicker__year-option {
    line-height: 23px;
  }

  .react-datepicker__year-option {
    &:first-child,
    &:last-child {
      padding: 10px;
    }
  }

  .react-datepicker__header__dropdown {
    margin: 10px 0;
  }

  position: relative;
  font-size: 16px;
  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }
  input[type='text'],
  input[type='number'],
  input[type='email'],
  input[type='password'] {
    position: relative;
    border: 1px solid ${Color.grey191};
    line-height: 1.6;
    display: block;
    min-height: 49px;
    max-height: 49px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px;
    color: white;
    ${Transition('all ease-in-out 0.2s')} outline: none;
    &::placeholder {
      color: white;
    }
    &:focus,
    &:active {
      border-color: ${Color.blue};
      padding-top: 14px;
      + label {
        top: -10px;
        color: ${Color.blue};
        font-size: 12px;
        font-weight: 600;
      }
      &::placeholder {
        color: ${Color.grey191};
      }
    }
    + label {
      position: absolute;
      z-index: 20;
      left: 8px;
      background-color: ${Color.white};
      padding: 0 8px;
      top: 14px;
      ${Transition('all ease-in-out 0.2s')};
      cursor: text;
      color: ${Color.grey191};
      height: 24px;
      display: flex;
      align-items: center;
    }
    &:disabled {
      background-color: ${Color.white};
      cursor: not-allowed;
      color: ${Color.grey216};
      border-color: ${Color.grey239};
      &::placeholder {
        color: ${Color.grey239};
        opacity: 0;
      }
      + label {
        background-color: ${Color.white};
        color: ${Color.grey216};
        cursor: not-allowed;
      }
      &:active {
        padding-top: 14px;
        border-color: ${Color.grey191};
        + label {
          top: 12px;
          color: ${Color.grey191};
          font-size: 14px;
          font-weight: 400;
        }
        &::placeholder {
          color: ${Color.grey191};
        }
      }
    }
  }
  ${props =>
    props.valLength > 0
      ? css`
          input[type='text'],
          input[type='email'],
          input[type='number'],
          input[type='password'] {
            padding-top: 14px;
            color: black;
            + label {
              top: -10px;
              color: ${Color.grey191};
              font-size: 12px;
              font-weight: 600;
            }
          }
        `
      : null};
  ${props =>
    props.touched && props.error
      ? css`
          input[type='text'],
          input[type='email'],
          input[type='number'],
          input[type='password'] {
            border: 1px solid ${Color.red};
            &:focus,
            &:hover,
            &:active {
              border-color: ${Color.red};
              + label {
                color: ${Color.red};
              }
            }
            + label {
              color: ${Color.red};
            }
          }
        `
      : null};
  ${props =>
    props.hasPrefix
      ? css`
          input[type='text'],
          input[type='email'],
          input[type='number'],
          input[type='password'] {
            padding-left: 44px;
          }
        `
      : null};
`;

const DatePrefix = styled.div`
  position: absolute;
  z-index: 2;
  top: 14px;
  left: 14px;
`;

export { DateWrapper, DatePrefix };
