import styled, { css, keyframes } from 'styled-components';

import Color from '../Styles/bases/Color';
import { Transition } from '../Styles/utils';

const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  max-height: 44px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  background-color: ${Color.white};
  color: ${Color.grey111};
  border: 1px solid ${Color.grey191};
  cursor: pointer;
  position: relative;
  font-family: inherit;
  width: ${props => (props.block ? '100%' : 'auto')};
  ${Transition('all ease-in-out 0.2s')};
  ${props =>
    props.size === 'small'
      ? css`
          min-height: auto;
          padding: 6px 12px;
          min-width: 80px;
        `
      : null};
  ${props =>
    props.colorType === 'blue'
      ? css`
          background-color: ${Color.blue};
          color: ${Color.white};
          border: none;
          &:hover,
          &:focus,
          &:active {
            background-color: ${Color.darkMdBlue};
          }
        `
      : null};
  ${props =>
    props.colorType === 'blue' && props.outline
      ? css`
          background-color: ${Color.white};
          border: 1px solid ${Color.blue};
          color: ${Color.blue};
          &:hover,
          &:focus,
          &:active {
            background-color: ${Color.white};
          }
        `
      : null};
  ${props =>
    props.disabled
      ? css`
          background-color: ${Color.grey239};
          border: 1px solid ${Color.grey216};
          color: ${Color.grey191};
          cursor: not-allowed;
          &:hover,
          &:focus,
          &:active {
            background-color: ${Color.grey239};
          }
        `
      : null};
`;

const rotateSpinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 12px;
  left: calc(50% - 20px);
  transform: translateX(-50%);
  border-radius: 50%;
  border-right: 2px solid transparent;
  border-top: 2px solid ${Color.grey191};
  animation: ${rotateSpinner} 1s linear infinite;
`;

export { ButtonWrapper, Loader };
