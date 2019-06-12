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
      handleButtonId: 'Id',
      handleButtonText: 'Button',
      handleButtonColor: 'handleBefaultButtonColor',
      handleButtonBlock: false,
      handleButtonDisable: false,
      handleButtonOutline: false,
      handleButtonSize: 'defaulthandleButtonSize'
    };
  }

  render() {
    const {
      handleButtonId,
      handleButtonText,
      handleButtonBlock,
      handleButtonDisable,
      handleButtonColor,
      handleButtonOutline,
      handleButtonSize
    } = this.state;
    const codeString = `import { Button } from '@danacita/mentari';\n<Button${
      handleButtonId ? ` id="${handleButtonId}"` : ''
    }${handleButtonColor !== 'handleBefaultButtonColor' ? ` color="${handleButtonColor}"` : ''}${
      handleButtonSize !== 'defaulthandleButtonSize' ? ` size="${handleButtonSize}"` : ''
    }${handleButtonBlock ? ' block' : ''}${handleButtonDisable ? ' disabled' : ''}${
      handleButtonOutline ? ' outline' : ''
    }>${handleButtonText}</Button>`;
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
              block={handleButtonBlock}
              disabled={handleButtonDisable}
              color={handleButtonColor}
              outline={handleButtonOutline}
              size={handleButtonSize}
            >
              {handleButtonText}
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
              id="handleButtonId"
              label="Button id"
              autoFocus
              withRedux={false}
              value={handleButtonId}
              onChange={e => this.setState({ handleButtonId: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleButtonText"
              label="Button text"
              autoFocus
              withRedux={false}
              value={handleButtonText}
              onChange={e => this.setState({ handleButtonText: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Color of Button</h4>
          </Margin>
          <Margin bottom={24}>
            <Radio
              name="gender"
              fieldData={[
                { id: 'handleBefaultButtonColor', name: 'Default' },
                { id: 'blue', name: 'Blue' }
              ]}
              withRedux={false}
              block
              defaultValue={handleButtonColor}
              onChange={e => this.setState({ handleButtonColor: e.target.id })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Size of Button</h4>
          </Margin>
          <Margin bottom={24}>
            <Radio
              name="size"
              fieldData={[
                { id: 'defaulthandleButtonSize', name: 'Default' },
                { id: 'small', name: 'Small' }
              ]}
              withRedux={false}
              block
              defaultValue={handleButtonSize}
              onChange={e => this.setState({ handleButtonSize: e.target.id })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Button</h4>
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="handleButtonBlock"
              name="handleButtonBlock"
              label="Block"
              checked={handleButtonBlock}
              withRedux={false}
              onChange={e => this.setState({ handleButtonBlock: e.target.checked })}
            />
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="handleButtonOutline"
              name="handleButtonOutline"
              label="Outline"
              checked={handleButtonOutline}
              disabled={handleButtonColor === 'handleBefaultButtonColor'}
              withRedux={false}
              onChange={e => this.setState({ handleButtonOutline: e.target.checked })}
            />
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="handleButtonDisable"
              name="handleButtonDisable"
              label="Disable"
              checked={handleButtonDisable}
              withRedux={false}
              onChange={e => this.setState({ handleButtonDisable: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default ButtonPage;
