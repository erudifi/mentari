import React from 'react';
import renderer from 'react-test-renderer';

import MonthPicker from '.';

describe('MonthPicker', () => {
  it('renders correctly', () => {
    const input = {
      value: 'Value',
      onChange: () => {}
    };

    const meta = {
      error: '',
      touched: false
    };

    const tree = renderer.create(<MonthPicker input={input} meta={meta} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
