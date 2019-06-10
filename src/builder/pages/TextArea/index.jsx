import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import { Margin, TextField, TextArea, Row, Col, Checkbox } from '../../../lib';
import PropsShared from '../../shared/Props';
import DemoShared from '../../shared/Demo';
import CodeShared from '../../shared/Code';
import RightbarShared from '../../shared/Rightbar';

class TextAreaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demoTextArea: '',
      handleIdTextArea: 'Id',
      handleNameTextArea: 'Name',
      handleLabelTextArea: 'Label',
      handlePlaceholderTextArea: 'Placeholder',
      handleDisableTextArea: false
    };
  }

  render() {
    const {
      demoTextArea,
      handleIdTextArea,
      handleNameTextArea,
      handleLabelTextArea,
      handlePlaceholderTextArea,
      handleDisableTextArea
    } = this.state;
    const codeString = `import { TextArea } from '@danacita/mentari';\n<TextArea id="${handleIdTextArea}" name="${handleNameTextArea}" label="${handleLabelTextArea}" placeholder="${handlePlaceholderTextArea}" ${
      handleDisableTextArea ? 'disabled ' : ''
    }/>`;
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
              <span>name</span>
              <span>Specifies a name for a Textarea</span>
            </li>
            <li>
              <span>label</span>
              <span>Defines label name Textarea</span>
            </li>
            <li>
              <span>placeholder</span>
              <span>Apply a short hint that describes the expected value when input focus</span>
            </li>
            <li>
              <span>disabled</span>
              <span>Apply disabled state of Textarea for unusable and unclickable</span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Row>
            <Col sm={12} lg={4}>
              <Margin top={16}>
                <TextArea
                  id={handleIdTextArea}
                  name={handleNameTextArea}
                  label={handleLabelTextArea}
                  placeholder={handlePlaceholderTextArea}
                  disabled={handleDisableTextArea}
                  withRedux={false}
                  value={demoTextArea}
                  onChange={e => this.setState({ demoTextArea: e.target.value })}
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
        <RightbarShared title="Textarea">
          <Margin bottom={24}>
            <TextField
              autoFocus
              id="handleIdTextArea"
              label="Textarea Id"
              withRedux={false}
              value={handleIdTextArea}
              onChange={e => this.setState({ handleIdTextArea: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleNameTextArea"
              label="Textarea Name"
              withRedux={false}
              value={handleNameTextArea}
              onChange={e => this.setState({ handleNameTextArea: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleLabelTextArea"
              label="Textarea Label"
              withRedux={false}
              value={handleLabelTextArea}
              onChange={e => this.setState({ handleLabelTextArea: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handlePlaceholderTextArea"
              label="Textarea Placeholder"
              withRedux={false}
              value={handlePlaceholderTextArea}
              onChange={e => this.setState({ handlePlaceholderTextArea: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Textarea</h4>
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="disable"
              name="disable"
              label="Disable"
              checked={handleDisableTextArea}
              withRedux={false}
              onChange={e => this.setState({ handleDisableTextArea: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default TextAreaPage;
