import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import { Margin, Progress, Select } from '../../../lib';
import PropsShared from '../../shared/Props';
import DemoShared from '../../shared/Demo';
import CodeShared from '../../shared/Code';
import RightbarShared from '../../shared/Rightbar';

class ProgressPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleProgressSelectValue: { id: '30', name: '30' },
      handleProgressSize: { id: '50', name: '50' }
    };
  }

  render() {
    const { handleProgressSelectValue, handleProgressSize } = this.state;
    const codeString = `import { Progress } from '@danacita/mentari';\n<Progress text={${
      handleProgressSelectValue.id
    }} percent={${handleProgressSelectValue.id}} size={${handleProgressSize.id}} />`;
    return (
      <ContentWithRightBar>
        <h1>Progress</h1>
        <p>A progress bar can be used to show a user how far along he/she is in a process.</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>text</span>
              <span>Show a percentage number</span>
            </li>
            <li>
              <span>percent</span>
              <span>Apply a percentage circle active</span>
            </li>
            <li>
              <span>size</span>
              <span>Set size of Progress circle</span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={16}>
            <Progress
              text={handleProgressSelectValue.id ? Number(handleProgressSelectValue.id) : 0}
              percent={handleProgressSelectValue.id ? Number(handleProgressSelectValue.id) : 0}
              size={handleProgressSize.id ? Number(handleProgressSize.id) : 50}
            />
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
        <RightbarShared title="Progress">
          <Margin top={24} bottom={8}>
            <Select
              label="Choose percent active"
              placeholder="Choose percent active"
              withRedux={false}
              fieldData={[
                {
                  id: '10',
                  name: '10'
                },
                {
                  id: '20',
                  name: '20'
                },
                {
                  id: '30',
                  name: '30'
                },
                {
                  id: '40',
                  name: '40'
                },
                {
                  id: '50',
                  name: '50'
                },
                {
                  id: '60',
                  name: '60'
                },
                {
                  id: '70',
                  name: '70'
                },
                {
                  id: '80',
                  name: '80'
                },
                {
                  id: '90',
                  name: '90'
                },
                {
                  id: '100',
                  name: '100'
                }
              ]}
              valueSelect={handleProgressSelectValue}
              onChange={value => this.setState({ handleProgressSelectValue: value })}
            />
          </Margin>
          <Margin top={24} bottom={8}>
            <Select
              label="Choose size progress"
              placeholder="Choose size progress"
              withRedux={false}
              fieldData={[
                {
                  id: '50',
                  name: '50'
                },
                {
                  id: '60',
                  name: '60'
                },
                {
                  id: '70',
                  name: '70'
                },
                {
                  id: '80',
                  name: '80'
                },
                {
                  id: '90',
                  name: '90'
                },
                {
                  id: '100',
                  name: '100'
                }
              ]}
              valueSelect={handleProgressSize}
              onChange={value => this.setState({ handleProgressSize: value })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default ProgressPage;
