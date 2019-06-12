import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import { Margin, SwitchField, Checkbox } from '../../../lib';
import PropsShared from '../../shared/Props';
import DemoShared from '../../shared/Demo';
import CodeShared from '../../shared/Code';
import RightbarShared from '../../shared/Rightbar';

class SwitchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleSwitchDisable: false
    };
  }

  render() {
    const { handleSwitchDisable } = this.state;
    const codeString = `import { SwitchField } from '@danacita/mentari';\n<SwitchField ${
      handleSwitchDisable ? `disabled ` : ''
    }/>`;
    return (
      <ContentWithRightBar>
        <h1>Switch</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Margin top={24}>
          <PropsShared props>
            <li>
              <span>disabled</span>
              <span>Apply disabled state of Switch for unusable and unclickable</span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={16}>
            <SwitchField withRedux={handleSwitchDisable} disabled={handleSwitchDisable} />
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
        <RightbarShared title="Textfield">
          <Margin bottom={16}>
            <h4>State of Switch</h4>
          </Margin>
          <Margin bottom={16}>
            <Checkbox
              id="handleSwitchDisable"
              name="handleSwitchDisable"
              label="Disable"
              checked={handleSwitchDisable}
              withRedux={false}
              onChange={e => this.setState({ handleSwitchDisable: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default SwitchPage;
