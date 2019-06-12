import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import { Margin, TextField, Select, Row, Col, Checkbox } from '../../../lib';
import PropsShared from '../../shared/Props';
import DemoShared from '../../shared/Demo';
import CodeShared from '../../shared/Code';
import RightbarShared from '../../shared/Rightbar';

class SelectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleValueSelect: '',
      handleLabelSelect: 'Label',
      handleDisableSelect: false
    };
  }

  render() {
    const { handleValueSelect, handleLabelSelect, handleDisableSelect } = this.state;
    const codeString = `import { Select } from '@danacita/mentari';\n<Select label="${handleLabelSelect}" placeholder="${handleLabelSelect}"${
      handleDisableSelect ? ' isDisabled' : ''
    } fieldData={[{ id: 'one', name: 'Option one' }, { id: 'two', name: 'Option two' }, { id: 'three', name: 'Option three' }, { id: 'four', name: 'Option four' }, { id: 'five', name: 'Option five' }]} />`;
    return (
      <ContentWithRightBar>
        <h1>Select</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>label</span>
              <span>Defines label name Select</span>
            </li>
            <li>
              <span>placeholder</span>
              <span>Value should the same with label, because this is tweak of React Select</span>
            </li>
            <li>
              <span>isDisabled</span>
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
                <Select
                  label={handleLabelSelect}
                  placeholder={handleLabelSelect}
                  isDisabled={handleDisableSelect}
                  withRedux={false}
                  fieldData={[
                    {
                      id: 'optionOne',
                      name: 'Option one'
                    },
                    {
                      id: 'optionTwo',
                      name: 'Option two'
                    },
                    {
                      id: 'optionThree',
                      name: 'Option three'
                    },
                    {
                      id: 'optionFour',
                      name: 'Option four'
                    },
                    {
                      id: 'optionFive',
                      name: 'Option five'
                    }
                  ]}
                  valueSelect={handleValueSelect}
                  onChange={value => this.setState({ handleValueSelect: value })}
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
        <RightbarShared title="Select">
          <Margin bottom={24}>
            <TextField
              autoFocus
              id="handleLabelSelect"
              label="Select label"
              withRedux={false}
              value={handleLabelSelect}
              onChange={e => this.setState({ handleLabelSelect: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>State of Select</h4>
          </Margin>
          <Margin bottom={24}>
            <Checkbox
              id="disable"
              name="disable"
              label="Disable"
              checked={handleDisableSelect}
              withRedux={false}
              onChange={e => this.setState({ handleDisableSelect: e.target.checked })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default SelectPage;
