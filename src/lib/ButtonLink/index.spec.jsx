import React from 'react';
import renderer from 'react-test-renderer';

import ButtonLink from '.';

describe('ButtonLink', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonLink />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
