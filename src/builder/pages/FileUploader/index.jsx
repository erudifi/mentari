import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import RightbarShared from '../../shared/Rightbar';
import DemoShared from '../../shared/Demo';
import PropsShared from '../../shared/Props';
import CodeShared from '../../shared/Code';
import { Margin } from '../../../lib';

class FileUploaderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const codeString = `import { FileUploader } from '@danacita/mentari';\n<FileUploader/>`;
    return (
      <ContentWithRightBar>
        <h1>File uploader</h1>
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
            <h4>Demo of file uploader</h4>
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
        <RightbarShared title="File uploader">
          <Margin bottom={16}>
            <h4>State of File uploader</h4>
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default FileUploaderPage;
