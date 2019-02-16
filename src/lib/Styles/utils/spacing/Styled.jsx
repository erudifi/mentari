import styled, { css } from 'styled-components';

const MarginWrapper = styled.div`
  ${props =>
    props.top
      ? css`
          margin-top: ${props.top}px;
        `
      : null}
  ${props =>
    props.right
      ? css`
          margin-right: ${props.right}px;
        `
      : null}
  ${props =>
    props.bottom
      ? css`
          margin-bottom: ${props.bottom}px;
        `
      : null}
  ${props =>
    props.left
      ? css`
          margin-left: ${props.left}px;
        `
      : null}
  ${props =>
    props.vertical
      ? css`
          margin-top: ${props.vertical}px;
          margin-bottom: ${props.vertical}px;
        `
      : null}
  ${props =>
    props.horizontal
      ? css`
          margin-left: ${props.horizontal}px;
          margin-right: ${props.horizontal}px;
        `
      : null}
`;

const PaddingWrapper = styled.div`
  ${props =>
    props.top
      ? css`
          padding-top: ${props.top}px;
        `
      : null}
  ${props =>
    props.right
      ? css`
          padding-right: ${props.right}px;
        `
      : null}
  ${props =>
    props.bottom
      ? css`
          padding-bottom: ${props.bottom}px;
        `
      : null}
  ${props =>
    props.left
      ? css`
          padding-left: ${props.left}px;
        `
      : null}
  ${props =>
    props.vertical
      ? css`
          padding-top: ${props.vertical}px;
          padding-bottom: ${props.vertical}px;
        `
      : null}
  ${props =>
    props.horizontal
      ? css`
          padding-left: ${props.horizontal}px;
          padding-right: ${props.horizontal}px;
        `
      : null}
`;

export { MarginWrapper, PaddingWrapper };
