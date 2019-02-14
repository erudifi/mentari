import styled, { css } from 'styled-components';

import Color from '../Styles/bases/Color';
import { Transition } from '../Styles/utils';

const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  background-color: ${Color.white};
  color: ${Color.grey111};
  border: 1px solid ${Color.grey191};
  cursor: pointer;
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
    props.colorType
      ? css`
          background-color: ${Color.blue};
          color: ${Color.white} !important;
          border: none;
          &:hover,
          &:focus,
          &:active {
            color: ${Color.white};
            background-color: ${Color.darkMdBlue};
          }
        `
      : null};
  ${props =>
    props.colorType && props.outline
      ? css`
          background-color: ${Color.white};
          border: 1px solid ${Color.blue};
          color: ${Color.blue} !important;
          &:hover,
          &:focus,
          &:active {
            color: ${Color.blue};
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
            color: ${Color.grey191};
            background-color: ${Color.grey239};
          }
        `
      : null};
`;

export default ButtonLink;
