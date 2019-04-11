import React from 'react';
import renderer from 'react-test-renderer';

import Select from '.';

describe('Select', () => {
  it('renders correctly', () => {
    const fieldData = [
      {
        id: 1,
        name: 'Test Name'
      }
    ];

    const input = {
      value: 'Value',
      onChange: () => {}
    };

    const meta = {
      error: '',
      touched: false
    };

    const tree = renderer
      .create(<Select fieldData={fieldData} input={input} meta={meta} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
