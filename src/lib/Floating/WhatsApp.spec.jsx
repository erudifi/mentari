import React from 'react';
import renderer from 'react-test-renderer';

import WhatsApp from './WhatsApp';

describe('WhatsApp', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WhatsApp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
