import styled, { css } from 'styled-components';
import { Color, MaxWidth } from '../../../lib';

const ColorBoxWrapper = styled.div`
  background-color: ${Color.white};
  display: inline-block;
  width: calc(100% / 3 - 24px);
  margin: 0 24px 24px 0;
  border-radius: 4px;
  border: 1px solid ${Color.grey216};
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(49, 81, 170, 0.09);
`;

const ColorBox = styled.div`
  height: 80px;
  display: block;
  color: ${Color.white};
  border-bottom: 1px solid ${Color.grey216};
  font-weight: 800;
  text-transform: uppercase;
  ${MaxWidth.md`
    width: calc(100% / 2 - 24px);
  `}
  ${MaxWidth.sm`
    width: 100%;
  `}
  ${props =>
    props.bgColor === 'lightBlue'
      ? css`
          background-color: ${Color.lightBlue};
          color: ${Color.black};
        `
      : null};
  ${props =>
    props.bgColor === 'blue'
      ? css`
          background-color: ${Color.blue};
        `
      : null};
  ${props =>
    props.bgColor === 'green'
      ? css`
          background-color: ${Color.green};
        `
      : null};
  ${props =>
    props.bgColor === 'orange'
      ? css`
          background-color: ${Color.orange};
        `
      : null};
  ${props =>
    props.bgColor === 'red'
      ? css`
          background-color: ${Color.red};
        `
      : null};
  ${props =>
    props.bgColor === 'darkBlue'
      ? css`
          background-color: ${Color.darkBlue};
        `
      : null};
`;

const ColorDesc = styled.div`
  padding: 16px;
  display: inline-block;
`;

const ColorCopyHex = styled.div`
  float: right;
  padding: 16px;
  cursor: pointer;
`;

export { ColorBox, ColorBoxWrapper, ColorDesc, ColorCopyHex };
