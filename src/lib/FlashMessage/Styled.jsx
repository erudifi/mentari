import styled, { css } from 'styled-components';

import Color from '../Styles/bases/Color';

const FlashMessageWrapper = styled.div`
  color: ${Color.white};
  padding: 4px 0;
  position: relative;
  ${props =>
    props.type === 'success'
      ? css`
          background-color: ${Color.green};
        `
      : css`
          background-color: ${Color.red};
        `};
`;

const FlashMessageContent = styled.div`
  font-size: 14px;
  padding-right: 24px;
`;

const FlashMessageDismiss = styled.div`
  position: absolute;
  top: 2px;
  right: 16px;
  width: 16px;
  height: 16px;
  span {
    transition: 0.25s ease-in-out;
    width: 14px;
    height: 2px;
    background-color: white;
    display: block;
    position: relative;
    cursor: pointer;
    &:nth-child(1) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 6px;
    }
    &:nth-child(2) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 4px;
      left: 0;
    }
  }
`;

export { FlashMessageWrapper, FlashMessageContent, FlashMessageDismiss };
