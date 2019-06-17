import styled from 'styled-components';

const PropsWrapper = styled.div`
  ul {
    margin-left: 24px;
    li {
      padding: 10px 0;
      span {
        &:first-child {
          margin-right: 4px;
          font-weight: 600;
        }
      }
    }
  }
`;

export default PropsWrapper;
