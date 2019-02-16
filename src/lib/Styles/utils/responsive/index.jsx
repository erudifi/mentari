import { css } from 'styled-components';

const Sizes = {
  xxl: 1700,
  xl: 1440,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576
};

const MaxWidth = Object.keys(Sizes).reduce((accumulator, label) => {
  const emSize = Sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const MinWidth = Object.keys(Sizes).reduce((accumulator, label) => {
  const emSize = Sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export { MaxWidth, MinWidth };
