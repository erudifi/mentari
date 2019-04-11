import React from 'react';
import renderer from 'react-test-renderer';

import Col from './Col';

describe('Col', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Col />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
