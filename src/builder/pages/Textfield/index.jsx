import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import { Margin, TextField, Row, Col, Radio, Checkbox } from '../../../lib';
import PropsShared from '../../shared/Props';
import DemoShared from '../../shared/Demo';
import CodeShared from '../../shared/Code';
import RightbarShared from '../../shared/Rightbar';

class TextfieldPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demoTextField: '',
      handleTypeTextField: 'text',
      handleIdTextField: 'Id',
      handleLabelTextField: 'Label',
      handlePlaceholderTextField: 'Placeholder',
      handleAutoFocusTextField: false,
      handleTooltipTextField: false,
      handleDisableTextField: false,
      handleTooltipDescTextField:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Porro culpa voluptates.'
    };
  }

  render() {
    const {
      demoTextField,
      handleTypeTextField,
      handleIdTextField,
      handleLabelTextField,
      handlePlaceholderTextField,
      handleAutoFocusTextField,
      handleTooltipTextField,
      handleTooltipDescTextField,
      handleDisableTextField
    } = this.state;
    const codeString = `import { TextField } from '@danacita/mentari';\n<TextField id="${handleIdTextField}" ${
      handleTypeTextField !== 'text' ? `type='${handleTypeTextField}' ` : ''
    }${
      handleAutoFocusTextField ? `autoFocus ` : ''
    }label="${handleLabelTextField}" placeholder="${handlePlaceholderTextField}" ${
      handleTooltipTextField ? `tooltip="${handleTooltipDescTextField}" ` : ''
    }${handleDisableTextField ? 'disabled ' : ''}/>`;
    return (
      <ContentWithRightBar>
        <h1>Textfield</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>id</span>
              <span>Apply a id to the control element</span>
            </li>
            <li>
              <span>type</span>
              <span>Defines the input type</span>
            </li>
            <li>
              <span>label</span>
              <span>Defines label name Textfield</span>
            </li>
            <li>
              <span>placeholder</span>
              <span>Apply a short hint that describes the expected value when input focus</span>
            </li>
            <li>
              <span>autoFocus</span>
              <span>Automatically get focus when the page loads</span>
            </li>
            <li>
              <span>disabled</span>
              <span>Apply disabled state of Textfield for unusable and unclickable</span>
            </li>
            <li>
              <span>tooltip</span>
              <span>Additional information when user hover in area input</span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Row>
            <Col sm={12} lg={4}>
              <Margin top={16}>
                <TextField
                  id={handleIdTextField}
                  label={handleLabelTextField}
                  placeholder={handlePlaceholderTextField}
                  type={handleTypeTextField}
                  withRedux={false}
                  value={demoTextField}
                  onChange={e => this.setState({ demoTextField: e.target.value })}
                  autoFocus={handleAutoFocusTextField}
                  tooltip={handleTooltipTextField ? handleTooltipDescTextField : ''}
                  disabled={handleDisableTextField}
                />
              </Margin>
            </Col>
          </Row>
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
          <Margin bottom={24}>
            <TextField
              autoFocus
              id="handleIdTextField"
              label="Textfield Id"
              withRedux={false}
              value={handleIdTextField}
              onChange={e => this.setState({ handleIdTextField: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleIdTextField"
              label="Textfield Label"
              withRedux={false}
              value={handleLabelTextField}
              onChange={e => this.setState({ handleLabelTextField: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handlePlaceholderTextField"
              label="Textfield Placeholder"
              withRedux={false}
              value={handlePlaceholderTextField}
              onChange={e => this.setState({ handlePlaceholderTextField: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Type of Textfield</h4>
          </Margin>
          <Margin bottom={24}>
            <Radio
              name="gender"
              fieldData={[
                { id: 'text', name: 'Text' },
                { id: 'number', name: 'Number' },
                { id: 'password', name: 'Password' }
              ]}
              withRedux={false}
              block
              defaultValue={handleTypeTextField}
              onChange={e => this.setState({ handleTypeTextField: e.target.id })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Textfield</h4>
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="autoFocus"
              name="autoFocus"
              label="Auto focus"
              checked={handleAutoFocusTextField}
              withRedux={false}
              onChange={e => this.setState({ handleAutoFocusTextField: e.target.checked })}
            />
          </Margin>
          <Margin bottom={8}>
            <Checkbox
              id="disable"
              name="disable"
              label="Disable"
              checked={handleDisableTextField}
              withRedux={false}
              onChange={e => this.setState({ handleDisableTextField: e.target.checked })}
            />
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="tooltip"
              name="tooltip"
              label="Tooltip"
              checked={handleTooltipTextField}
              withRedux={false}
              onChange={e => this.setState({ handleTooltipTextField: e.target.checked })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleTooltipDescTextField"
              label="Textfield Tooltip"
              withRedux={false}
              disabled={!handleTooltipTextField}
              value={handleTooltipDescTextField}
              onChange={e => this.setState({ handleTooltipDescTextField: e.target.value })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default TextfieldPage;
