import React from 'react';
import renderer from 'react-test-renderer';

import Row from './Row';

describe('Row', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Row />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
