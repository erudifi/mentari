import styled, { css } from 'styled-components';
import { Color, MaxWidth } from '../../../lib';

const AssetsBoxWrapper = styled.div`
  background-color: ${Color.white};
  display: inline-block;
  width: calc(100% / 3 - 24px);
  margin: 0 24px 24px 0;
  border-radius: 4px;
  border: 1px solid ${Color.grey216};
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(49, 81, 170, 0.09);
`;

const AssetsBox = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Color.white};
  border-bottom: 1px solid ${Color.grey216};
  font-weight: 800;
  text-transform: uppercase;
  ${props =>
    props.bg === 'blue' &&
    css`
      background-color: ${Color.darkBlue};
    `}
  ${MaxWidth.md`
    width: calc(100% / 2 - 24px);
  `}
  ${MaxWidth.sm`
    width: 100%;
  `}
`;

const AssetsDownload = styled.div`
  width: calc(100% / 2);
  display: inline-block;
  padding: 16px;
  text-align: center;
  ${props =>
    props.bordered &&
    css`
      border-right: 1px solid ${Color.grey216};
    `}
  a {
    color: ${Color.black};
    text-decoration: none;
    display: block;
  }
`;

export { AssetsBox, AssetsBoxWrapper, AssetsDownload };
