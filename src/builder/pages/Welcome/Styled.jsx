import styled from 'styled-components';
import { Color, MaxWidth } from '../../../lib';

const Desc = styled.div`
  width: 600px;
  ${MaxWidth.sm`
    width: 100%;
  `}
`;

const AvatarWrapper = styled.img`
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  margin: 8px;
  border: 2px solid ${Color.grey216};
`;

export { Desc, AvatarWrapper };
