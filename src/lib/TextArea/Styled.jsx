import styled, { css } from 'styled-components';

import Color from '../Styles/bases/Color';
import { Transition } from '../Styles/utils';

const TextAreaWrapper = styled.div`
  position: relative;
  font-size: 16px;
  textarea:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }
  textarea {
    position: relative;
    border: 1px solid ${Color.grey191};
    line-height: 1.6;
    font-size: 16px;
    display: block;
    min-height: 46px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px;
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
      z-index: 2;
      left: 8px;
      background-color: ${Color.white};
      padding: 0 8px;
      top: 12px;
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
          textarea {
            padding-top: 14px;
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
          textarea {
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
          textarea {
            padding-left: 44px;
          }
        `
      : null};
`;

const TextAreaPrefix = styled.div`
  position: absolute;
  z-index: 2;
  top: 12px;
  left: 14px;
`;

export { TextAreaWrapper, TextAreaPrefix };
