import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from '.';

describe('Avatar', () => {
  it('renders correctly', () => {
    const profile = {
      firstName: 'John',
      lastName: 'Doe'
    };
    const tree = renderer.create(<Avatar profile={profile} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
