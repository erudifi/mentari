import React, { Component, Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import { Margin, Radio, Checkbox } from '../../../lib';
import PropsShared from '../../shared/Props';
import DemoShared from '../../shared/Demo';
import CodeShared from '../../shared/Code';
import RightbarShared from '../../shared/Rightbar';

class RadioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleRadioDefault: 'one',
      handleRadioBlock: false,
      handleRadioSlide: false
    };
  }

  render() {
    const { handleRadioDefault, handleRadioBlock, handleRadioSlide } = this.state;
    const codeString = `import { Radio } from '@danacita/mentari';\n<Radio fieldData={[{ id: 'one', name: 'Option one' }, { id: 'two', name: 'Option two' }, { id: 'three', name: 'Option three' }, { id: 'four', name: 'Option four' }]} ${
      handleRadioBlock ? 'block ' : ''
    }${handleRadioSlide ? 'slideOption' : ''}/>`;
    return (
      <Fragment>
        <ContentWithRightBar>
          <h1>Radio</h1>
          <p>
            Radio buttons are an input which acts as a select list. Every radio button acts as a
            boolean, but only one radio button can be selected at any time - one is active by
            default.
          </p>
          <Margin top={24}>
            <PropsShared>
              <li>
                <span>id</span>
                <span>Apply a id to the control element</span>
              </li>
              <li>
                <span>name</span>
                <span>Set the name of Radio</span>
              </li>
              <li>
                <span>name</span>
                <span>Set the name of Radio</span>
              </li>
              <li>
                <span>slideOption</span>
                <span>Apply the options to slide</span>
              </li>
              <li>
                <span>block</span>
                <span>Apply the full width of a parent</span>
              </li>
            </PropsShared>
          </Margin>
          <DemoShared>
            <h4>Demo</h4>
            <p>You can change the props via the component builder on your right</p>
            <Margin top={16}>
              <Radio
                id="radioDemo"
                name="radioDemo"
                fieldData={[
                  { id: 'one', name: 'Option one' },
                  { id: 'two', name: 'Option two' },
                  { id: 'three', name: 'Option three' },
                  { id: 'four', name: 'Option four' }
                ]}
                withRedux={false}
                defaultValue={handleRadioDefault}
                onChange={e => this.setState({ handleRadioDefault: e.target.id })}
                block={handleRadioBlock}
                slideOption={handleRadioSlide}
              />
            </Margin>
          </DemoShared>
          <h4>Code</h4>
          <Margin top={16}>
            <CodeShared copyCode={codeString}>
              <SyntaxHighlighter language="jsx" style={atomOneDarkReasonable} showLineNumbers>
                {codeString}
              </SyntaxHighlighter>
            </CodeShared>
          </Margin>
          <RightbarShared title="Radio">
            <Margin bottom={16}>
              <h4>State of Radio</h4>
            </Margin>
            <Margin bottom={8}>
              <Checkbox
                id="handleRadioBlock"
                name="handleRadioBlock"
                label="Block"
                checked={handleRadioBlock}
                withRedux={false}
                onChange={e => this.setState({ handleRadioBlock: e.target.checked })}
              />
            </Margin>
            <Margin bottom={24}>
              <Checkbox
                id="handleRadioSlide"
                name="handleRadioSlide"
                label="Slide"
                checked={handleRadioSlide}
                withRedux={false}
                onChange={e => this.setState({ handleRadioSlide: e.target.checked })}
              />
            </Margin>
          </RightbarShared>
        </ContentWithRightBar>
      </Fragment>
    );
  }
}

export default RadioPage;
