import styled, { css } from 'styled-components';
import Color from '../Styles/bases/Color';
import { Checkmark } from '../icons';

const CheckboxWrapper = styled.div`
  display: inline-block;
`;

const CheckboxInput = styled.input`
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
    display: inline-block;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 24px;
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: ${Color.white};
      border: 1px solid ${Color.grey191};
      border-radius: 2px;
      display: inline-block;
    }
    ${props =>
      props.disabled
        ? css`
            color: ${Color.grey191};
            cursor: not-allowed;
            &:before {
              background-color: ${Color.grey239};
              border: 1px solid ${Color.grey216};
            }
          `
        : null};
  }
  &:checked + label {
    &:before {
      background-color: ${Color.white};
      border-color: ${Color.grey191};
    }
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-image: url('${Checkmark}');
      background-position: center;
      background-repeat: no-repeat;
      top: 0;
    }
  }
`;

export { CheckboxWrapper, CheckboxInput };
