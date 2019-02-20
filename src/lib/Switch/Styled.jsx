import styled from 'styled-components';
import Color from '../Styles/bases/Color';

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked {
    + span {
      background-color: ${Color.blue};
      &:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        border: 2px solid ${Color.blue};
      }
    }
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 24px;
  &:before {
    position: absolute;
    border-radius: 50%;
    border: 2px solid ${Color.grey191};
    content: '';
    height: 24px;
    width: 24px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export { SwitchWrapper, SwitchInput, SwitchSlider };
