import styled, { css } from 'styled-components';

import Color from '../Styles/bases/Color';

const RadioGroup = styled.div`
  ${props =>
    props.slideOption
      ? css`
          display: inline-block;
          border: 1px solid ${Color.grey191};
          border-radius: 10px;
          > div {
            margin-right: 0;
            > label {
              padding: 4px 8px;
            }
            > label::before {
              display: none;
            }
            > label::after {
              width: 100% !important;
              height: 100% !important;
              border-radius: 10px !important;
              left: 0 !important;
              background-color: transparent !important;
              border: 2px solid ${Color.darkBlue};
            }
          }
        `
      : css`
          display: block;
        `};
`;

const RadioWrapper = styled.div`
  font-size: 14px;
  display: inline-block;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  &:focus {
    & + label {
      &:before {
        border: 1px solid;
        border-color: ${Color.blue};
      }
    }
  }
  & + label {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 400;
    margin-bottom: 0;
    &:before {
      content: '';
      margin-right: 8px;
      display: inline-block;
      vertical-align: middle;
      width: 18px;
      height: 18px;
      background-color: ${Color.white};
      border: 1px solid ${Color.grey191};
      border-radius: 100%;
    }
  }
  &:checked + label {
    &:before {
      background-color: ${Color.white};
      border-color: ${Color.grey191};
    }
    &:after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: ${Color.orange};
      border-radius: 100%;
      left: 3px;
      ${props =>
        props.slideOption
          ? css`
              top: 0;
            `
          : css`
              top: 3px;
            `}
    }
  }
`;

export { RadioWrapper, RadioInput, RadioGroup };
