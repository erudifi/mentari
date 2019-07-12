import React from 'react';
import renderer from 'react-test-renderer';

import AsyncSelect from '.';

describe('AsyncSelect', () => {
  it('renders correctly', () => {
    const fieldData = [
      {
        id: 1,
        name: 'Test Name'
      }
    ];

    const loadOptions = () => {};

    const input = {
      value: 'Value',
      onChange: () => {}
    };

    const meta = {
      error: '',
      touched: false
    };

    const tree = renderer
      .create(
        <AsyncSelect fieldData={fieldData} loadOptions={loadOptions} input={input} meta={meta} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
