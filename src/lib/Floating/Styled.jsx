import styled, { css, keyframes } from 'styled-components';
import Color from '../Styles/bases/Color';

const FloatingArrowWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  background-color: ${Color.lightBlue};
  color: ${Color.darkBlue};
  box-shadow: 0 2px 4px 0 rgba(49, 81, 170, 0.09);
  padding: 4px 10px;
  border-radius: 50px;
  border: 2px solid ${Color.darkBlue};
  ${props =>
    props.icon
      ? css`
          width: 170px;
        `
      : css`
          width: auto;
        `};
  ${props =>
    props.hidden
      ? css`
          display: none;
        `
      : css`
          display: block;
        `};
`;

const Bounce = keyframes`
  0% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -moz-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const ArrowBounce = styled.div`
  display: inline-block;
  width: 30px;
  position: relative;
  .arrow-down {
    -moz-animation: ${Bounce} 2s infinite;
    -webkit-animation: ${Bounce} 2s infinite;
    animation: ${Bounce} 2s infinite;
    position: absolute;
    left: 20px;
    top: -14px;
    &.icon {
      &::before {
        content: '';
        position: absolute;
        width: 12px;
        left: 50%;
        top: 40%;
        height: 12px;
        border-top: solid 2px ${Color.darkBlue};
        border-right: solid 2px ${Color.darkBlue};
        -webkit-transform: translateX(-50%) rotate(135deg);
        transform: translateX(-50%) rotate(135deg);
      }
    }
  }
`;

export { FloatingArrowWrapper, ArrowBounce };
