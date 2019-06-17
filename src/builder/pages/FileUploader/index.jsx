import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import RightbarShared from '../../shared/Rightbar';
import DemoShared from '../../shared/Demo';
import PropsShared from '../../shared/Props';
import CodeShared from '../../shared/Code';
import { Margin, FileUploader, Row, Col, TextField } from '../../../lib';

class FileUploaderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleFileUploadeId: 'Id',
      handleFileUploadeName: 'Name',
      handleFileUploadeLabel: 'Label'
    };
  }

  render() {
    const { handleFileUploadeId, handleFileUploadeName, handleFileUploadeLabel } = this.state;
    const codeString = `import { FileUploader } from '@danacita/mentari';\n<FileUploader ${
      handleFileUploadeId ? `id="${handleFileUploadeId} "` : ''
    }${handleFileUploadeName ? `name="${handleFileUploadeName} "` : ''}${
      handleFileUploadeLabel.length !== 0 ? `label="${handleFileUploadeLabel} "` : `label="Label"`
    }/>`;
    return (
      <ContentWithRightBar>
        <h1>File uploader</h1>
        <p>A element defines a file select field and a Browse button for file uploads.</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>id</span>
              <span>Apply a id to the control element</span>
            </li>
            <li>
              <span>name</span>
              <span>Set the name of Fileuploader field</span>
            </li>
            <li>
              <span>label</span>
              <span>Defines label name Fileuploader field</span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={24}>
            <Row>
              <Col lg={4}>
                <FileUploader
                  id={handleFileUploadeId}
                  name={handleFileUploadeName}
                  label={handleFileUploadeLabel.length === 0 ? 'Label' : handleFileUploadeLabel}
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
        <RightbarShared title="File uploader">
          <Margin bottom={24}>
            <TextField
              autoFocus
              id="handleFileUploadeId"
              label="Fileuploade id"
              withRedux={false}
              value={handleFileUploadeId}
              onChange={e => this.setState({ handleFileUploadeId: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleFileUploadeName"
              label="Fileuploade name"
              withRedux={false}
              value={handleFileUploadeName}
              onChange={e => this.setState({ handleFileUploadeName: e.target.value })}
            />
          </Margin>
          <Margin bottom={24}>
            <TextField
              id="handleFileUploadeLabel"
              label="Fileuploade label"
              withRedux={false}
              value={handleFileUploadeLabel}
              onChange={e => this.setState({ handleFileUploadeLabel: e.target.value })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default FileUploaderPage;
