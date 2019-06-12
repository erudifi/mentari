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
      buttonLinkText: 'Button link',
      buttonLinkHref: 'https://danacita.co.id/',
      buttonLinkColor: 'defaultButtonColor',
      buttonLinkTargetBlank: true,
      buttonLinkBlock: false,
      buttonLinkDisable: false,
      buttonLinkOutline: false,
      buttonLinkSize: 'defaultButtonSize'
    };
  }

  render() {
    const {
      buttonLinkText,
      buttonLinkHref,
      buttonLinkTargetBlank,
      buttonLinkColor,
      buttonLinkBlock,
      buttonLinkDisable,
      buttonLinkOutline,
      buttonLinkSize
    } = this.state;
    const codeString = `import { ButtonLink } from '@danacita/mentari';\n<ButtonLink href="${buttonLinkHref}"${
      buttonLinkTargetBlank ? ' target="_blank"' : ''
    }${buttonLinkColor !== 'defaultButtonColor' ? ` color="${buttonLinkColor}"` : ''}${
      buttonLinkSize !== 'defaultButtonSize' ? ` size="${buttonLinkSize}"` : ''
    }${buttonLinkBlock ? ' block' : ''}${buttonLinkDisable ? ' disabled' : ''}${
      buttonLinkOutline ? ' outline' : ''
    }>${buttonLinkText}</ButtonLink>`;
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
              block={buttonLinkBlock}
              disabled={buttonLinkDisable}
              color={buttonLinkColor}
              outline={buttonLinkOutline}
              size={buttonLinkSize}
              href={buttonLinkHref}
              target={buttonLinkTargetBlank ? '_blank' : null}
            >
              {buttonLinkText}
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
              id="buttonLinkText"
              label="Button link Text"
              autoFocus
              withRedux={false}
              value={buttonLinkText}
              onChange={e => this.setState({ buttonLinkText: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="buttonLinkHref"
              label="Button link Href"
              withRedux={false}
              value={buttonLinkHref}
              onChange={e => this.setState({ buttonLinkHref: e.target.value })}
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
              defaultValue={buttonLinkColor}
              onChange={e => this.setState({ buttonLinkColor: e.target.id })}
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
              defaultValue={buttonLinkSize}
              onChange={e => this.setState({ buttonLinkSize: e.target.id })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Button link</h4>
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="buttonLinkBlock"
              name="buttonLinkBlock"
              label="Block"
              checked={buttonLinkBlock}
              withRedux={false}
              onChange={e => this.setState({ buttonLinkBlock: e.target.checked })}
            />
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="buttonLinkOutline"
              name="buttonLinkOutline"
              label="Outline"
              checked={buttonLinkOutline}
              disabled={buttonLinkColor === 'defaultButtonColor'}
              withRedux={false}
              onChange={e => this.setState({ buttonLinkOutline: e.target.checked })}
            />
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="buttonLinkDisable"
              name="buttonLinkDisable"
              label="Disable"
              checked={buttonLinkDisable}
              withRedux={false}
              onChange={e => this.setState({ buttonLinkDisable: e.target.checked })}
            />
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="buttonLinkTargetBlank"
              name="buttonLinkTargetBlank"
              label="New tab"
              checked={buttonLinkTargetBlank}
              withRedux={false}
              onChange={e => this.setState({ buttonLinkTargetBlank: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default ButtonLikPage;
