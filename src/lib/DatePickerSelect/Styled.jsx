import styled, { css } from 'styled-components';
import Color from '../Styles/bases/Color';

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  select {
    position: relative;
    background-color: white;
    padding: 8px 16px;
    border: 1px solid ${Color.grey191};
    line-height: 1.9;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &.dc-date {
      width: 25%;
    }
    &.dc-month {
      width: calc(50% - 32px);
      margin: 0 16px;
    }
    &.dc-year {
      width: 25%;
    }
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, transparent, transparent);
    background-position: calc(100% - 20px) calc(1.2em + 2px), calc(100% - 15px) calc(1.2em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size: 8px 5px, 6px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }

  ${props =>
    props.touched && props.error
      ? css`
          select {
            border: 1px solid ${Color.red};
          }
        `
      : null};

  ${props =>
    props.disabled
      ? css`
          select {
            background-color: ${Color.white};
            cursor: not-allowed;
            border: 1px solid ${Color.grey239};
          }
        `
      : null};
`;

export default SelectWrapper;
