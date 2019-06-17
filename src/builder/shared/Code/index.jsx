import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BottombarWrapper, BottombarButtonCopy } from './Styled';

const propTypes = {
  copyCode: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

class CodeShared extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textOfCopy: 'Copy code'
    };
  }

  render() {
    const { children, copyCode } = this.props;
    const { textOfCopy } = this.state;
    return (
      <BottombarWrapper>
        {children}
        <CopyToClipboard text={copyCode}>
          <div style={{ textAlign: 'right' }}>
            <BottombarButtonCopy
              onClick={() =>
                this.setState({ textOfCopy: 'Copied ...' }, () =>
                  setTimeout(() => {
                    this.setState({ textOfCopy: 'Copy code' });
                  }, 1000)
                )
              }
            >
              {textOfCopy}
            </BottombarButtonCopy>
          </div>
        </CopyToClipboard>
      </BottombarWrapper>
    );
  }
}

CodeShared.propTypes = propTypes;

export default CodeShared;
