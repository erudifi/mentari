import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import { Button, FlashMessage, Margin, Radio, TextField } from '../../../lib';
import PropsShared from '../../shared/Props';
import DemoShared from '../../shared/Demo';
import CodeShared from '../../shared/Code';
import RightbarShared from '../../shared/Rightbar';

class FlushMessagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleTypeFlashMessage: 'success',
      handleContentFlashMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Porro culpa voluptates.'
    };
  }

  render() {
    const { handleTypeFlashMessage, handleContentFlashMessage } = this.state;
    const codeString = `import { FlashMessage } from '@danacita/mentari';\nFlashMessage("${handleTypeFlashMessage}", "${handleContentFlashMessage}")`;
    return (
      <ContentWithRightBar>
        <h1>Radio</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>type</span>
              <span>Defines the message type</span>
            </li>
            <li>
              <span>content</span>
              <span>Show feedback message</span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={16}>
            <Button onClick={() => FlashMessage(handleTypeFlashMessage, handleContentFlashMessage)}>
              Try Flash Message
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
        <RightbarShared title="Flash message">
          <Margin bottom={24}>
            <TextField
              autoFocus
              id="handleContentFlashMessage"
              label="Flash message content"
              withRedux={false}
              value={handleContentFlashMessage}
              onChange={e => this.setState({ handleContentFlashMessage: e.target.value })}
            />
          </Margin>
          <Margin bottom={16}>
            <h4>Type of Flash message</h4>
          </Margin>
          <Margin bottom={24}>
            <Radio
              name="gender"
              fieldData={[{ id: 'success', name: 'Success' }, { id: 'error', name: 'Error' }]}
              withRedux={false}
              block
              defaultValue={handleTypeFlashMessage}
              onChange={e => this.setState({ handleTypeFlashMessage: e.target.id })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default FlushMessagePage;
