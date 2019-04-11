import React from 'react';
import renderer from 'react-test-renderer';

import Radio from '.';

describe('Radio', () => {
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

    const tree = renderer.create(<Radio fieldData={fieldData} input={input} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
