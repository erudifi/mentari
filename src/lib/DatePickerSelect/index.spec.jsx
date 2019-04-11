import React from 'react';
import renderer from 'react-test-renderer';

import DatePickerSelect from '.';

describe('DatePickerSelect', () => {
  it('renders correctly', () => {
    const input = {
      value: 'Value',
      onChange: () => {}
    };

    const meta = {
      error: '',
      touched: false
    };

    const tree = renderer.create(<DatePickerSelect input={input} meta={meta} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
