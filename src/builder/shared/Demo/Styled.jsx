import styled from 'styled-components';
import { MaxWidth, Color } from '../../../lib';

const DemoWrapper = styled.div`
  padding: 32px 0;
  border-top: 1px solid ${Color.grey216};
  border-bottom: 1px solid ${Color.grey216};
  margin: 40px 0;
  ${MaxWidth.md`
    padding: 24px 0;
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export { DemoWrapper };
