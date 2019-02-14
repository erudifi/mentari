import styled, { css } from 'styled-components';

import Color from '../styles/bases/Color';
import { Transition } from '../styles/utils';

const TextFieldWrapper = styled.div`
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

const TextFieldPrefix = styled.div`
  position: absolute;
  z-index: 2;
  top: 14px;
  left: 14px;
`;

const TextFieldSuffix = styled.div`
  position: absolute;
  z-index: 2;
  top: 16px;
  right: 14px;
`;

const TextFieldTooltip = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 64px;
  left: 0;
  background-color: ${Color.black};
  padding: 8px 16px;
  width: 100%;
  max-width: 320px;
  color: ${Color.white};
  border-radius: 8px;
  visibility: hidden;
  opacity: 0;
  &:before {
    width: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${Color.black};
    content: '';
    bottom: -10px;
    left: 24px;
    position: absolute;
  }
  ${TextFieldWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    ${Transition('opacity ease-in-out 0.4s')};
  }
`;

const TextFieldOptional = styled.div`
  text-align: right;
  margin-top: 5px;
  font-size: 14px;
  ${props =>
    props.error
      ? css`
          position: absolute;
          right: 0;
        `
      : null}
`;

export { TextFieldWrapper, TextFieldPrefix, TextFieldSuffix, TextFieldTooltip, TextFieldOptional };
