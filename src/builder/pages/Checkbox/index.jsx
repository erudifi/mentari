import React, { Component, Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import RightbarShared from '../../shared/Rightbar';
import DemoShared from '../../shared/Demo';
import PropsShared from '../../shared/Props';
import CodeShared from '../../shared/Code';
import { Margin, Checkbox, TextField } from '../../../lib';

class AvatarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxDemo: false,
      checkboxId: 'Id',
      checkboxName: 'Name',
      checkboxText: 'Checkbox',
      checkboxDisable: false
    };
  }

  render() {
    const { checkboxDemo, checkboxId, checkboxText, checkboxName, checkboxDisable } = this.state;
    const codeString = `import { Checkbox } from '@danacita/mentari';\n<Checkbox id="${checkboxId}" name="${checkboxName}" label="${checkboxText}" ${
      checkboxDisable ? `disabled ` : ''
    }/>`;
    return (
      <Fragment>
        <ContentWithRightBar>
          <h1>Checkbox</h1>
          <p>A checkbox is an input which acts as a boolean.</p>
          <Margin top={24}>
            <PropsShared>
              <li>
                <span>id</span>
                <span>Apply a id to the control element</span>
              </li>
              <li>
                <span>name</span>
                <span>Set the name of Checkbox</span>
              </li>
              <li>
                <span>disabled</span>
                <span>Apply disabled state of Checkbox for unusable and unclickable</span>
              </li>
            </PropsShared>
          </Margin>
          <DemoShared>
            <h4>Demo</h4>
            <p>You can change the props via the component builder on your right</p>
            <Margin top={16}>
              <Checkbox
                id="checkboxDemo"
                name="checkboxDemo"
                label={checkboxText}
                withRedux={false}
                checked={checkboxDemo}
                onChange={() => this.setState({ checkboxDemo: !checkboxDemo })}
                disabled={checkboxDisable}
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
          <RightbarShared title="Checkbox">
            <Margin bottom={24}>
              <TextField
                autoFocus
                id="checkboxId"
                label="Checkbox Id"
                withRedux={false}
                value={checkboxId}
                onChange={e => this.setState({ checkboxId: e.target.value })}
              />
            </Margin>
            <Margin bottom={24}>
              <TextField
                id="checkboxName"
                label="Checkbox Name"
                withRedux={false}
                value={checkboxName}
                onChange={e => this.setState({ checkboxName: e.target.value })}
              />
            </Margin>
            <Margin bottom={24}>
              <TextField
                id="checkboxText"
                label="Checkbox Text"
                withRedux={false}
                value={checkboxText}
                onChange={e => this.setState({ checkboxText: e.target.value })}
              />
            </Margin>
            <Margin bottom={16}>
              <h4>State of Checkbox</h4>
            </Margin>
            <Margin bottom={24}>
              <Checkbox
                id="buttonDisable"
                name="buttonDisable"
                label="Disable"
                checked={checkboxDisable}
                withRedux={false}
                onChange={e => this.setState({ checkboxDisable: e.target.checked })}
              />
            </Margin>
          </RightbarShared>
        </ContentWithRightBar>
      </Fragment>
    );
  }
}

export default AvatarPage;
