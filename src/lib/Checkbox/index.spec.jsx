import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from '.';

describe('Checkbox', () => {
  it('renders correctly', () => {
    const input = {
      value: 'Value',
      onChange: () => {}
    };

    const meta = {
      error: '',
      touched: false
    };

    const tree = renderer.create(<Checkbox input={input} meta={meta} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
