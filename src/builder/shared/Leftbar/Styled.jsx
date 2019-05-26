import styled, {css} from 'styled-components';
import { MaxWidth, Color } from '../../../lib';

const LeftWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 200px;
  min-height: 100vh;
  padding: 24px 16px;
  border-right: 1px solid #e1e1e1;
  z-index: 2;
  transition: all ease .4s;
  h3 {
    margin-bottom: 8px;
  }
  ul {
    li {
      list-style: none;
      a {
        padding: 6px 0;
        display: block;
        text-decoration: none;
        color: ${Color.black};
      }
    }
  }
  ${MaxWidth.md`
    ${props => props.menuMobile ? css`
      transform: translateX(0);
      background-color: ${Color.white};
      padding-top: 80px;
      min-height: calc(100vh + 16px);
    ` : css`
      transform: translateX(-100%);
    `}
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export { LeftWrapper };
