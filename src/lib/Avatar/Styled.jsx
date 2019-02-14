import styled from 'styled-components';

import Color from '../Styles/bases/Color';

const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  vertical-align: middle;
  background-color: ${Color.grey191};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

const AvatarInitial = styled.span`
  font-weight: 600;
  color: ${Color.white};
`;

export { AvatarWrapper, AvatarInitial };
