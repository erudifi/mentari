import styled from 'styled-components';
import { MaxWidth, Color } from '../../lib';

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: inline-block;
  padding: 24px 48px;
  position: relative;
  padding-left: calc(200px + 48px);
  ${MaxWidth.md`
    padding: 24px 16px;
  `}
`;

const HeaderMenuMobile = styled.div`
  display: none;
  ${MaxWidth.md`
    display: block;
    border-bottom: 1px solid ${Color.grey216}
    padding: 16px;
    text-align: center;
    position: relative;
    h2 {
      margin-bottom: 0;
    }
  `}
`;

const TrigerMenuMobile = styled.div`
  position: absolute;
  left: 16px;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  div {
    background-color: ${Color.grey82};
    display: block;
    width: 24px;
    height: 4px;
    margin-bottom: 4px;
    border-radius: 4px;
  }
`;

const ContentWithRightBar = styled.div`
  width: calc(100% - 320px);
  ${MaxWidth.md`
    width: 100%;
  `}
`;

export { ContentWrapper, ContentWithRightBar, HeaderMenuMobile, TrigerMenuMobile };
