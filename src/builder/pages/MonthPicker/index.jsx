import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import RightbarShared from '../../shared/Rightbar';
import DemoShared from '../../shared/Demo';
import PropsShared from '../../shared/Props';
import CodeShared from '../../shared/Code';
import { Margin, Checkbox, MonthPicker, Row, Col, TextField } from '../../../lib';

class MonthPickerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleMonthPickerId: 'Id',
      handleMonthPickerName: 'Name',
      handleMonthPickerLabel: 'Label',
      handleMonthPickerPlaceholder: 'Placeholder',
      handleMonthPickerDisable: false
    };
  }

  render() {
    const {
      handleMonthPickerLabel,
      handleMonthPickerId,
      handleMonthPickerName,
      handleMonthPickerPlaceholder,
      handleMonthPickerDisable
    } = this.state;
    const codeString = `import { MonthPicker } from '@danacita/mentari';\n<MonthPicker${
      handleMonthPickerId ? ` id="${handleMonthPickerId}"` : ''
    }${handleMonthPickerName ? ` name="${handleMonthPickerName}"` : ''}${
      handleMonthPickerLabel ? ` label="${handleMonthPickerLabel}"` : ''
    }${handleMonthPickerPlaceholder ? ` placeholder="${handleMonthPickerPlaceholder}"` : ''}${
      handleMonthPickerDisable ? ` disabled` : ''
    } />`;
    return (
      <ContentWithRightBar>
        <h1>Monthpicker</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>id</span>
              <span>Apply a id to the control element</span>
            </li>
            <li>
              <span>name</span>
              <span>Defines name input Monthpicker</span>
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
              <span>disabled</span>
              <span>Apply disabled state of Textfield for unusable and unclickable</span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={16}>
            <Row>
              <Col lg={4}>
                <MonthPicker
                  id={handleMonthPickerId}
                  label={handleMonthPickerLabel}
                  placeholder={handleMonthPickerPlaceholder}
                  withRedux={false}
                  disabled={handleMonthPickerDisable}
                />
              </Col>
            </Row>
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
        <RightbarShared title="Monthpicker">
          <Margin bottom={24}>
            <TextField
              id="handleMonthPickerId"
              label="Monthpicker id"
              autoFocus
              withRedux={false}
              value={handleMonthPickerId}
              onChange={e => this.setState({ handleMonthPickerId: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleMonthPickerName"
              label="Monthpicker name"
              autoFocus
              withRedux={false}
              value={handleMonthPickerName}
              onChange={e => this.setState({ handleMonthPickerName: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleMonthPickerLabel"
              label="Monthpicker label"
              withRedux={false}
              value={handleMonthPickerLabel}
              onChange={e => this.setState({ handleMonthPickerLabel: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleMonthPickerPlaceholder"
              label="Monthpicker placeholder"
              withRedux={false}
              value={handleMonthPickerPlaceholder}
              onChange={e => this.setState({ handleMonthPickerPlaceholder: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Monthpicker</h4>
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="handleMonthPickerDisable"
              name="handleMonthPickerDisable"
              label="Disable"
              checked={handleMonthPickerDisable}
              withRedux={false}
              onChange={e => this.setState({ handleMonthPickerDisable: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default MonthPickerPage;
