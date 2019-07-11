import styled, { css } from 'styled-components';
import Select from 'react-select/lib/Creatable';
import Color from '../Styles/bases/Color';
import { Transition } from '../Styles/utils';

const SelectCreatableWrapper = styled.div`
  position: relative;
  font-size: 16px;
  ${props =>
    props.isDisabled
      ? css`
          cursor: not-allowed;
        `
      : null}
  > .has-error {
    .rselect__control {
      border-color: ${Color.red};
      .rselect__placeholder {
        color: ${Color.red} !important;
      }
      &.rselect__control--is-focused {
        .rselect__placeholder {
          color: ${Color.blue} !important;
        }
      }
    }
  }
`;

const SelectCreatableInput = styled(Select)`
  position: relative;
  > .rselect__control {
    border-color: ${Color.grey191};
    box-shadow: none;
    min-height: 48px;
    max-height: 48px;
    .rselect__indicator-separator {
      display: none;
    }
    .rselect__dropdown-indicator {
      ${Transition('all 0.2s')};
      transform: rotate(0deg);
      display: none;
    }
    .rselect__placeholder {
      color: ${Color.grey191};
      ${Transition('all ease-in-out 0.2s')};
    }
    .rselect__value-container {
      padding: 0 16px;
      .rselect__single-value {
        margin: 2px 0 0 0;
      }
    }
    &.rselect__control--is-focused {
      border-color: ${Color.blue};
    }
    &.rselect__control--menu-is-open {
      + .rselect__menu {
        z-index: 30;
      }
      .rselect__single-value {
        display: none;
      }
      .rselect__value-container {
        overflow: visible;
        padding: 0 16px;
        &.rselect__value-container--has-value {
          .rselect__placeholder {
            color: ${Color.blue};
            top: -10px;
            left: 8px;
            background-color: ${Color.white};
            padding: 0 8px;
            font-size: 12px;
            font-weight: 600;
          }
        }
      }
      .rselect__placeholder {
        color: ${Color.blue};
        top: -10px;
        left: 8px;
        background-color: ${Color.white};
        padding: 0 8px;
        font-size: 12px;
        font-weight: 600;
      }
      .rselect__dropdown-indicator {
        transform: rotate(-180deg);
        display: none;
      }
    }
  }
  .rselect__control--is-disabled {
    background-color: ${Color.white};
    border-color: ${Color.grey239};
    color: ${Color.grey239};
    .rselect__placeholder {
      color: ${Color.grey216};
    }
    .rselect__single-value--is-disabled {
      color: ${Color.grey216};
    }
  }
`;

const SelectCreatableLabel = styled.span`
  position: absolute;
  color: ${Color.grey191};
  z-index: 20;
  top: -7px;
  left: 11px;
  background-color: ${Color.white};
  padding: 0 8px;
  font-size: 12px;
  font-weight: 600;
`;

export { SelectCreatableWrapper, SelectCreatableInput, SelectCreatableLabel };
