import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import RightbarShared from '../../shared/Rightbar';
import CodeShared from '../../shared/Code';
import DemoShared from '../../shared/Demo';
import PropsShared from '../../shared/Props';
import { Button, TextField, Checkbox, Radio, Margin } from '../../../lib';
import { ContentWithRightBar } from '../Styled';

class ButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Button',
      buttonColor: 'defaultButtonColor',
      buttonBlock: false,
      buttonDisable: false,
      buttonOutline: false,
      buttonSize: 'defaultButtonSize'
    };
  }

  render() {
    const {
      buttonText,
      buttonBlock,
      buttonDisable,
      buttonColor,
      buttonOutline,
      buttonSize
    } = this.state;
    const codeString = `import { Button } from '@danacita/mentari';\n<Button${
      buttonColor !== 'defaultButtonColor' ? ` color="${buttonColor}"` : ''
    }${buttonSize !== 'defaultButtonSize' ? ` size="${buttonSize}"` : ''}${
      buttonBlock ? ' block' : ''
    }${buttonDisable ? ' disabled' : ''}${buttonOutline ? ' outline' : ''}>${buttonText}</Button>`;
    return (
      <ContentWithRightBar>
        <h1>Button</h1>
        <p>Button is element represents a clickable, which can be used in forms</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>id</span>
              <span>Apply a id to the control element</span>
            </li>
            <li>
              <span>children</span>
              <span>Set children for text of Button</span>
            </li>
            <li>
              <span>type</span>
              <span>The type attribute specifies the type</span>
            </li>
            <li>
              <span>color</span>
              <span>Set the color of Button</span>
            </li>
            <li>
              <span>block</span>
              <span>Apply the full width of a parent</span>
            </li>
            <li>
              <span>outline</span>
              <span>Apply outline mode based color type Button</span>
            </li>
            <li>
              <span>disabled</span>
              <span>Apply disabled state of button for unusable and unclickable</span>
            </li>
            <li>
              <span>size</span>
              <span>Set size of Button </span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={16}>
            <Button
              block={buttonBlock}
              disabled={buttonDisable}
              color={buttonColor}
              outline={buttonOutline}
              size={buttonSize}
            >
              {buttonText}
            </Button>
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
        <RightbarShared title="Button">
          <Margin bottom={24}>
            <TextField
              id="buttonText"
              label="Button Text"
              autoFocus
              withRedux={false}
              value={buttonText}
              onChange={e => this.setState({ buttonText: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Color of Button</h4>
          </Margin>
          <Margin bottom={24}>
            <Radio
              name="gender"
              fieldData={[
                { id: 'defaultButtonColor', name: 'Default' },
                { id: 'blue', name: 'Blue' }
              ]}
              withRedux={false}
              block
              defaultValue={buttonColor}
              onChange={e => this.setState({ buttonColor: e.target.id })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Size of Button</h4>
          </Margin>
          <Margin bottom={24}>
            <Radio
              name="size"
              fieldData={[
                { id: 'defaultButtonSize', name: 'Default' },
                { id: 'small', name: 'Small' }
              ]}
              withRedux={false}
              block
              defaultValue={buttonSize}
              onChange={e => this.setState({ buttonSize: e.target.id })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Button</h4>
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="buttonBlock"
              name="buttonBlock"
              label="Block"
              checked={buttonBlock}
              withRedux={false}
              onChange={e => this.setState({ buttonBlock: e.target.checked })}
            />
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="buttonOutline"
              name="buttonOutline"
              label="Outline"
              checked={buttonOutline}
              disabled={buttonColor === 'defaultButtonColor'}
              withRedux={false}
              onChange={e => this.setState({ buttonOutline: e.target.checked })}
            />
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="buttonDisable"
              name="buttonDisable"
              label="Disable"
              checked={buttonDisable}
              withRedux={false}
              onChange={e => this.setState({ buttonDisable: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default ButtonPage;
