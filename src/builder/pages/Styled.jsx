import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: inline-block;
  padding: 24px 48px;
  position: relative;
  padding-left: calc(200px + 48px);
`;

const ContentWithRightBar = styled.div`
  width: calc(100% - 320px);
`;

export { ContentWrapper, ContentWithRightBar };
