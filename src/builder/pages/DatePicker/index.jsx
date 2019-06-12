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
      handleIdDatePickerSelect: 'Id',
      handleLabelDatePickerSelect: 'Label',
      handleDisableDatePickerSelect: false
    };
  }

  render() {
    const {
      handleIdDatePickerSelect,
      handleLabelDatePickerSelect,
      handleDisableDatePickerSelect
    } = this.state;
    const codeString = `import { DatePickerSelect } from '@danacita/mentari';\n<DatePickerSelect id="${handleIdDatePickerSelect}" ${
      handleLabelDatePickerSelect ? `label="${handleLabelDatePickerSelect}"` : ''
    } ${handleDisableDatePickerSelect ? 'disabled ' : ''}/>`;
    return (
      <ContentWithRightBar>
        <h1>Datepicker select</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>id</span>
              <span>Apply a id to the control element</span>
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
                  id={handleIdDatePickerSelect}
                  label={handleLabelDatePickerSelect}
                  disabled={handleDisableDatePickerSelect}
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
              id="handleIdDatePickerSelect"
              label="Datepicker select id"
              withRedux={false}
              value={handleIdDatePickerSelect}
              onChange={e => this.setState({ handleIdDatePickerSelect: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              autoFocus
              id="handleLabelDatePickerSelect"
              label="Datepicker select label"
              withRedux={false}
              value={handleLabelDatePickerSelect}
              onChange={e => this.setState({ handleLabelDatePickerSelect: e.target.value })}
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
              checked={handleDisableDatePickerSelect}
              withRedux={false}
              onChange={e => this.setState({ handleDisableDatePickerSelect: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default DatePickerSelectPage;
