import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import { Margin, DatePickerSelect, Row, Col, TextField, Checkbox } from '../../../lib';
import PropsShared from '../../shared/Props';
import DemoShared from '../../shared/Demo';
import CodeShared from '../../shared/Code';
import RightbarShared from '../../shared/Rightbar';

class DatePickerSelectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleDatePickerSelectId: 'Id',
      handleDatePickerSelectLabel: 'Label',
      handleDatePickerSelectDisable: false
    };
  }

  render() {
    const {
      handleDatePickerSelectId,
      handleDatePickerSelectLabel,
      handleDatePickerSelectDisable
    } = this.state;
    const codeString = `import { DatePickerSelect } from '@danacita/mentari';\n<DatePickerSelect${
      handleDatePickerSelectId ? ` id="${handleDatePickerSelectId}"` : ''
    } ${handleDatePickerSelectLabel ? `label="${handleDatePickerSelectLabel}"` : ''} ${
      handleDatePickerSelectDisable ? 'disabled ' : ''
    }/>`;
    return (
      <ContentWithRightBar>
        <h1>Datepicker select</h1>
        <p>
          Datepicker allows users to choose and input a date through by manually the date into the
          input field or by using a dropdown.
        </p>
        <Margin top={24}>
          <PropsShared empty>
            <li>
              <span>id</span>
              <span>Apply a id to the control element</span>
            </li>
            <li>
              <span>label</span>
              <span>Defines label name Datepicker</span>
            </li>
            <li>
              <span>disabled</span>
              <span>Apply disabled state of Datepicker select for unusable and unclickable</span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={16}>
            <Row>
              <Col lg={8}>
                <DatePickerSelect
                  id={handleDatePickerSelectId}
                  label={handleDatePickerSelectLabel}
                  disabled={handleDatePickerSelectDisable}
                  withRedux={false}
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
        <RightbarShared title="Datepicker Select">
          <Margin bottom={24}>
            <TextField
              autoFocus
              id="handleDatePickerSelectId"
              label="Datepicker select id"
              withRedux={false}
              value={handleDatePickerSelectId}
              onChange={e => this.setState({ handleDatePickerSelectId: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              autoFocus
              id="handleDatePickerSelectLabel"
              label="Datepicker select label"
              withRedux={false}
              value={handleDatePickerSelectLabel}
              onChange={e => this.setState({ handleDatePickerSelectLabel: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Datepicker Select</h4>
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="buttonDisable"
              name="buttonDisable"
              label="Disable"
              checked={handleDatePickerSelectDisable}
              withRedux={false}
              onChange={e => this.setState({ handleDatePickerSelectDisable: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default DatePickerSelectPage;
