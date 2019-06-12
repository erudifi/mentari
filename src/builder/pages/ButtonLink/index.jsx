import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import RightbarShared from '../../shared/Rightbar';
import CodeShared from '../../shared/Code';
import DemoShared from '../../shared/Demo';
import PropsShared from '../../shared/Props';
import { ButtonLink, TextField, Checkbox, Radio, Margin } from '../../../lib';
import { ContentWithRightBar } from '../Styled';

class ButtonLikPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleButtonLinkId: 'Id',
      handleButtonLinkText: 'Button link',
      handleButtonLinkHref: 'https://danacita.co.id/',
      handleButtonLinkColor: 'defaultButtonColor',
      handleButtonLinkTargetBlank: true,
      handleButtonLinkBlock: false,
      handleButtonLinkDisable: false,
      handleButtonLinkOutline: false,
      handleButtonLinkSize: 'defaultButtonSize'
    };
  }

  render() {
    const {
      handleButtonLinkId,
      handleButtonLinkText,
      handleButtonLinkHref,
      handleButtonLinkTargetBlank,
      handleButtonLinkColor,
      handleButtonLinkBlock,
      handleButtonLinkDisable,
      handleButtonLinkOutline,
      handleButtonLinkSize
    } = this.state;
    const codeString = `import { ButtonLink } from '@danacita/mentari';\n<ButtonLink${
      handleButtonLinkId ? ` id=${handleButtonLinkId}` : ''
    } href="${handleButtonLinkHref}"${handleButtonLinkTargetBlank ? ' target="_blank"' : ''}${
      handleButtonLinkColor !== 'defaultButtonColor' ? ` color="${handleButtonLinkColor}"` : ''
    }${handleButtonLinkSize !== 'defaultButtonSize' ? ` size="${handleButtonLinkSize}"` : ''}${
      handleButtonLinkBlock ? ' block' : ''
    }${handleButtonLinkDisable ? ' disabled' : ''}${
      handleButtonLinkOutline ? ' outline' : ''
    }>${handleButtonLinkText}</ButtonLink>`;
    return (
      <ContentWithRightBar>
        <h1>Button link</h1>
        <p>Button link is element represents a clickable, which can be used in forms</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>id</span>
              <span>Apply a id to the control element</span>
            </li>
            <li>
              <span>children</span>
              <span>Set children for text of Button link</span>
            </li>
            <li>
              <span>type</span>
              <span>The type attribute specifies the type</span>
            </li>
            <li>
              <span>color</span>
              <span>Set the color of Button link</span>
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
              <span>Set size of Button link</span>
            </li>
            <li>
              <span>href</span>
              <span>Set href for specifies the link destination</span>
            </li>
            <li>
              <span>target</span>
              <span>Set target for specifies where to open the linked document </span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={16}>
            <ButtonLink
              block={handleButtonLinkBlock}
              disabled={handleButtonLinkDisable}
              color={handleButtonLinkColor}
              outline={handleButtonLinkOutline}
              size={handleButtonLinkSize}
              href={handleButtonLinkHref}
              target={handleButtonLinkTargetBlank ? '_blank' : null}
            >
              {handleButtonLinkText}
            </ButtonLink>
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
        <RightbarShared title="Button link">
          <Margin bottom={24}>
            <TextField
              id="handleButtonLinkId"
              label="Button link id"
              autoFocus
              withRedux={false}
              value={handleButtonLinkId}
              onChange={e => this.setState({ handleButtonLinkId: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleButtonLinkText"
              label="Button link text"
              autoFocus
              withRedux={false}
              value={handleButtonLinkText}
              onChange={e => this.setState({ handleButtonLinkText: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleButtonLinkHref"
              label="Button link href"
              withRedux={false}
              value={handleButtonLinkHref}
              onChange={e => this.setState({ handleButtonLinkHref: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Color of Button link</h4>
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
              defaultValue={handleButtonLinkColor}
              onChange={e => this.setState({ handleButtonLinkColor: e.target.id })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Size of Button link</h4>
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
              defaultValue={handleButtonLinkSize}
              onChange={e => this.setState({ handleButtonLinkSize: e.target.id })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Button link</h4>
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="handleButtonLinkBlock"
              name="handleButtonLinkBlock"
              label="Block"
              checked={handleButtonLinkBlock}
              withRedux={false}
              onChange={e => this.setState({ handleButtonLinkBlock: e.target.checked })}
            />
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="handleButtonLinkOutline"
              name="handleButtonLinkOutline"
              label="Outline"
              checked={handleButtonLinkOutline}
              disabled={handleButtonLinkColor === 'defaultButtonColor'}
              withRedux={false}
              onChange={e => this.setState({ handleButtonLinkOutline: e.target.checked })}
            />
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="handleButtonLinkDisable"
              name="handleButtonLinkDisable"
              label="Disable"
              checked={handleButtonLinkDisable}
              withRedux={false}
              onChange={e => this.setState({ handleButtonLinkDisable: e.target.checked })}
            />
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="handleButtonLinkTargetBlank"
              name="handleButtonLinkTargetBlank"
              label="New tab"
              checked={handleButtonLinkTargetBlank}
              withRedux={false}
              onChange={e => this.setState({ handleButtonLinkTargetBlank: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default ButtonLikPage;
