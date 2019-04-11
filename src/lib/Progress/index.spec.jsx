import React from 'react';
import renderer from 'react-test-renderer';

import Progress from '.';

describe('Progress', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Progress size={10} text={1} percent={25} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
