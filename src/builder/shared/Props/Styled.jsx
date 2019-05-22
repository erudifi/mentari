import styled from 'styled-components';
import { Color } from '../../../lib';

const PropsWrapper = styled.div`
  ul {
    margin-left: 24px;
    li {
      padding: 8px 0;
      span {
        &:first-child {
          background-color: ${Color.lightBlue};
          padding: 2px 4px;
          border-radius: 4px;
          border: 1px solid ${Color.blue};
          margin-right: 8px;
        }
      }
    }
  }
`;

export default PropsWrapper;
