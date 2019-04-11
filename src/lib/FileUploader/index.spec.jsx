import React from 'react';
import renderer from 'react-test-renderer';

import FileUploader from '.';

describe('FileUploader', () => {
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

    const tree = renderer
      .create(
        <FileUploader
          id="fileUploader"
          label="fileUploader"
          input={input}
          meta={meta}
          uploadDocument={() => {}}
          convertFileToBase64={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
