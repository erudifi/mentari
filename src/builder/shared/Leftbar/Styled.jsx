import styled from 'styled-components';

const LeftWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 200px;
  min-height: 100vh;
  padding: 24px 16px;
  border-right: 1px solid #e1e1e1;
  z-index: 2;
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
        color: black;
      }
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { LeftWrapper };
