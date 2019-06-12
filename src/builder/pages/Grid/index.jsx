/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import RightbarShared from '../../shared/Rightbar';
import DemoShared from '../../shared/Demo';
import PropsShared from '../../shared/Props';
import CodeShared from '../../shared/Code';
import { Margin, Row, Col, Select } from '../../../lib';
import GridBackground from './styled';

class GridPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleGridColumn: { id: '1', name: '1' }
    };
  }

  handleLoop(column, width) {
    // eslint-disable-next-line prefer-spread
    const array = Array.apply(null, { length: column }).map(Number.call, Number);
    const result = array.map(i => (
      <Col lg={width} key={i}>
        <GridBackground />
      </Col>
    ));
    return result;
  }

  handleRenderCol(handleGridColumn) {
    switch (handleGridColumn) {
      case '2':
        return <Row>{this.handleLoop(handleGridColumn, 6)}</Row>;
      case '3':
        return <Row>{this.handleLoop(handleGridColumn, 4)}</Row>;
      case '4':
        return <Row>{this.handleLoop(handleGridColumn, 3)}</Row>;
      case '6':
        return <Row>{this.handleLoop(handleGridColumn, 2)}</Row>;
      case '12':
        return <Row>{this.handleLoop(handleGridColumn, 1)}</Row>;
      default:
        return (
          <Row>
            <Col lg={12}>
              <GridBackground />
            </Col>
          </Row>
        );
    }
  }

  handleShowCode(handleGridColumn) {
    switch (handleGridColumn) {
      case '2':
        return ` <Col lg={6}>Lorem ipsum dolor.</Col> \n  <Col lg={6}>Lorem ipsum dolor.</Col>`;
      case '3':
        return ` <Col lg={4}>Lorem ipsum dolor.</Col> \n  <Col lg={4}>Lorem ipsum dolor.</Col> \n  <Col lg={4}>Lorem ipsum dolor.</Col>`;
      case '4':
        return ` <Col lg={3}>Lorem ipsum dolor.</Col> \n  <Col lg={3}>Lorem ipsum dolor.</Col> \n  <Col lg={3}>Lorem ipsum dolor.</Col> \n  <Col lg={3}>Lorem ipsum dolor.</Col>`;
      case '6':
        return ` <Col lg={2}>Lorem ipsum dolor.</Col> \n  <Col lg={2}>Lorem ipsum dolor.</Col> \n  <Col lg={2}>Lorem ipsum dolor.</Col> \n  <Col lg={2}>Lorem ipsum dolor.</Col> \n  <Col lg={2}>Lorem ipsum dolor.</Col> \n  <Col lg={2}>Lorem ipsum dolor.</Col>`;
      case '12':
        return ` <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col> \n  <Col lg={1}>Lorem ipsum dolor.</Col>`;
      default:
        return ` <Col lg={12}>Lorem ipsum dolor.</Col>`;
    }
  }

  render() {
    const { handleGridColumn } = this.state;
    const codeString = `import { Row, Col } from '@danacita/mentari';\n<Row>\n ${this.handleShowCode(
      handleGridColumn.id
    )}\n</Row>`;
    return (
      <ContentWithRightBar>
        <h1>Grid</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Margin top={24}>
          <PropsShared>
            <li>
              <span>lg</span>
              <span>Apply width of column desktop</span>
            </li>
            <li>
              <span>md</span>
              <span>Apply width of column tablet landscape</span>
            </li>
            <li>
              <span>sm</span>
              <span>Apply width of column tablet dekstop and mobile</span>
            </li>
            <li>
              <span>xs</span>
              <span>Apply width of column mobile</span>
            </li>
            <li>
              <span>justify</span>
              <span>
                Defines the alignment along the X axis
                <b>&nbsp;(only works on Row component)</b>
              </span>
            </li>
            <li>
              <span>align</span>
              <span>
                Defines the alignment along the Y axis
                <b>&nbsp;(only works on Row component)</b>
              </span>
            </li>
          </PropsShared>
        </Margin>
        <DemoShared>
          <h4>Demo</h4>
          <p>You can change the props via the component builder on your right</p>
          <Margin top={16}>{this.handleRenderCol(handleGridColumn.id)}</Margin>
        </DemoShared>
        <h4>Code</h4>
        <Margin top={16}>
          <CodeShared copyCode={codeString}>
            <SyntaxHighlighter language="jsx" style={atomOneDarkReasonable} showLineNumbers>
              {codeString}
            </SyntaxHighlighter>
          </CodeShared>
        </Margin>
        <RightbarShared title="Grid">
          <Margin top={24} bottom={8}>
            <Select
              label="Select total of column"
              placeholder="Select total of column"
              withRedux={false}
              fieldData={[
                {
                  id: '1',
                  name: '1'
                },
                {
                  id: '2',
                  name: '2'
                },
                {
                  id: '3',
                  name: '3'
                },
                {
                  id: '4',
                  name: '4'
                },
                {
                  id: '6',
                  name: '6'
                },
                {
                  id: '12',
                  name: '12'
                }
              ]}
              valueSelect={handleGridColumn}
              onChange={value => this.setState({ handleGridColumn: value })}
            />
          </Margin>
        </RightbarShared>
      </ContentWithRightBar>
    );
  }
}

export default GridPages;
