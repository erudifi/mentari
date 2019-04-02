import styled, { css } from 'styled-components';
import Color from '../Styles/bases/Color';

const InputWrapper = styled.div`
  position: relative;
  p {
    margin-bottom: 8px;
    &.help-block {
      font-weight: 400;
      font-style: italic;
      margin-bottom: 20px;
    }
  }
  input[type='file'] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    + label {
      font-size: 16px;
      cursor: pointer;
      padding: 8px 16px;
      display: block;
      border-radius: 4px;
      margin: 8px 0 16px 0;
      overflow: hidden;
      white-space: nowrap;
      > span {
        width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      }
    }
  }
  ${props =>
    props.error && props.touched
      ? css`
          input[type='file'] {
            + label {
              border: 1px solid ${Color.red};
            }
          }
        `
      : css`
          input[type='file'] {
            + label {
              border: 1px solid ${Color.grey191};
            }
          }
        `}
`;

const IconUpload = styled.div`
  position: absolute;
  top: 34px;
  right: 16px;
`;

export { InputWrapper, IconUpload };
