import React from 'react';
import renderer from 'react-test-renderer';

import Switch from '.';

describe('Switch', () => {
  it('renders correctly', () => {
    const input = {
      value: 'Value',
      onChange: () => {}
    };

    const meta = {
      error: '',
      touched: false
    };

    const tree = renderer.create(<Switch input={input} meta={meta} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
