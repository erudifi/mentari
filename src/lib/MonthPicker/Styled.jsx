import styled, { css } from 'styled-components';

import Color from '../Styles/bases/Color';
import { Transition } from '../Styles/utils';

const MonthWrapper = styled.div`
  .ryms-container {
    width: 300px;
    z-index: 100;
    background: #fff;
    border: 2px solid #eee;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    position: absolute;
  }
  .ryms-clickout {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: transparent;
    display: none;
  }
  /*  SECTIONS  */
  .ryms-section_mp {
    clear: both;
    padding: 0px;
    margin: 0px;
  }

  /*  COLUMN SETUP  */
  .ryms-col_mp {
    display: block;
    float: left;
    text-align: center;
  }
  .ryms-col_mp:first-child {
    margin-left: 0;
  }

  /*  GROUPING  */
  .ryms-group_mp:before,
  .group:after {
    content: '';
    display: table;
  }
  .ryms-group_mp:after {
    clear: both;
  }
  .ryms-group_mp {
    zoom: 1; /* For IE 6/7 */
  }

  /*  GRID OF THREE  */
  .ryms-span_1_of_3_mp {
    width: 33.33%;
  }

  .ryms-col_mp {
    font-size: 16px;
    padding-bottom: 12px;
    padding-top: 12px;
  }

  .ryms-col_mp:hover {
    color: ${Color.black};
    background-color: ${Color.grey239};
    cursor: pointer;
  }
  .ryms-selected_date_mp {
    font-size: 16px;
    color: ${Color.darkBlue};
    font-weight: bold;
    padding-top: 13px;
  }
  .ryms-selected_cell {
    background-color: ${Color.blue};
    font-weight: 600;
    font-style: normal;
    color: ${Color.white};
    border-radius: 4px;
    &:hover {
      background-color: ${Color.blue};
      color: ${Color.white};
    }
  }
  .ryms-arrows_mp {
    font-weight: bold;
    font-size: 18px;
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

const MonthPrefix = styled.div`
  position: absolute;
  z-index: 2;
  top: 14px;
  left: 14px;
`;

export { MonthWrapper, MonthPrefix };
