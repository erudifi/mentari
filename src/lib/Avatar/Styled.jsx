import styled, { css } from 'styled-components';

import Color from '../Styles/bases/Color';

const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  vertical-align: middle;
  background-color: ${Color.grey191};
  justify-content: center;
  align-items: center;
  ${props =>
    props.square
      ? css`
          border-radius: 6px;
        `
      : css`
          border-radius: 100px;
        `}
`;

const AvatarInitial = styled.span`
  font-weight: 600;
  color: ${Color.white};
`;

export { AvatarWrapper, AvatarInitial };
