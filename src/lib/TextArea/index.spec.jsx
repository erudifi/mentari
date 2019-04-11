import React from 'react';
import renderer from 'react-test-renderer';

import TextArea from '.';

describe('TextArea', () => {
  it('renders correctly', () => {
    const input = {
      value: 'Value',
      onBlur: () => {},
      onChange: () => {}
    };

    const meta = {
      error: '',
      touched: false
    };

    const tree = renderer.create(<TextArea input={input} meta={meta} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
