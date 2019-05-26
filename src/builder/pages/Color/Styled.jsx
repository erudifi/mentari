import styled, { css } from 'styled-components';
import { Color } from '../../../lib';

const ColorBox = styled.div`
  display: inline-block;
  width: calc(100% / 3 - 24px);
  margin: 0 24px 24px 0;
  height: 80px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${Color.white};
  font-weight: 800;
  text-transform: uppercase;
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

// eslint-disable-next-line import/prefer-default-export
export { ColorBox };
