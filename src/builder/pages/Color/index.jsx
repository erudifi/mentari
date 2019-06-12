/* eslint-disable no-param-reassign */
import React, { Component, Fragment } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Margin } from '../../../lib';
import { Content } from '../Styled';
import { ColorBox, ColorBoxWrapper, ColorDesc, ColorCopyHex } from './Styled';

const colorDictionary = [
  { id: 'lightBlue', name: 'Light blue', hex: '#dce9fa', textOfCopy: 'Copy hex' },
  { id: 'blue', name: 'Blue', hex: '#4587ef', textOfCopy: 'Copy hex' },
  { id: 'darkBlue', name: 'Dark blue', hex: '#c61b42', textOfCopy: 'Copy hex' },
  { id: 'green', name: 'Green', hex: '#2eb062', textOfCopy: 'Copy hex' },
  { id: 'orange', name: 'Orange', hex: '#fcac42', textOfCopy: 'Copy hex' },
  { id: 'red', name: 'Red', hex: '#c61b42', textOfCopy: 'Copy hex' }
];

class ColorPgae extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleColorDictionaryState: colorDictionary
    };
  }

  render() {
    const { handleColorDictionaryState } = this.state;
    return (
      <Content>
        <h1>Color</h1>
        <p>
          The Danacita brand currently consists of six primary colors that are used in a wide array
          of marketing materials.
        </p>
        <Margin top={48} bottom={16}>
          <h4>Primary</h4>
        </Margin>
        {handleColorDictionaryState.map(color => (
          <ColorBoxWrapper key={color.id}>
            <CopyToClipboard>
              <Fragment>
                <ColorBox bgColor={color.id} />
                <ColorDesc>{color.name}</ColorDesc>
                <CopyToClipboard text={color.hex}>
                  <ColorCopyHex
                    onClick={() => {
                      const allColors = JSON.parse(JSON.stringify(colorDictionary));
                      allColors.map(someColor => {
                        if (someColor.id === color.id) {
                          someColor.textOfCopy = 'Copied...';
                        }
                        return someColor;
                      });
                      this.setState({ handleColorDictionaryState: allColors }, () =>
                        setTimeout(
                          () => this.setState({ handleColorDictionaryState: colorDictionary }),
                          1000
                        )
                      );
                    }}
                  >
                    {color.textOfCopy}
                  </ColorCopyHex>
                </CopyToClipboard>
              </Fragment>
            </CopyToClipboard>
          </ColorBoxWrapper>
        ))}
      </Content>
    );
  }
}

export default ColorPgae;
