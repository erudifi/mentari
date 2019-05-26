import styled from 'styled-components';
import { Color } from '../../../lib';

const BottombarWrapper = styled.div`
  font-size: 12px;
`;

const BottombarButtonCopy = styled.div`
  padding: 8px;
  display: inline-block;
  cursor: pointer;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid ${Color.grey191};
  cursor: pointer;
`;

export { BottombarWrapper, BottombarButtonCopy };
