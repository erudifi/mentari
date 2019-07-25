/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Color from '../Styles/bases/Color';
import { InputWrapper, IconSuccess } from './Styled';
import Check from './iconCheckmark.svg';

const propTypes = {
  id: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  defaultLabel: PropTypes.array,
  helpBlock: PropTypes.string,
  withRedux: PropTypes.bool,
  prefix: PropTypes.node,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.any]),
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  }),
  uploadDocument: PropTypes.func,
  convertFileToBase64: PropTypes.func
};

const defaultProps = {
  defaultLabel: [],
  helpBlock: null,
  prefix: null,
  input: {},
  meta: {},
  withRedux: true,
  uploadDocument: null,
  convertFileToBase64: null
};

class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeWithoutRedux = this.handleChangeWithoutRedux.bind(this);
  }

  handleChange() {
    // id variable refers to the field ID
    const { id, input, uploadDocument, convertFileToBase64 } = this.props;
    const file = this.fileUpload.files[0];

    // If empty file uploaded, reset the field
    if (!file) {
      input.onChange({});
      return;
    }

    const fileName = file.name;

    // Set state to persist name of file
    this.setState({ fileName });

    // Set field to store uploaded file data
    convertFileToBase64(file).then(base64Data => {
      input.onChange({ file: base64Data, name: fileName });
      uploadDocument(id, base64Data, fileName);
      return Promise.resolve();
    });
  }

  handleChangeWithoutRedux() {
    const file = this.fileUpload.files[0];
    const fileName = file.name;
    // Set state to persist name of file
    this.setState({ fileName });
  }

  render() {
    const {
      id,
      accept,
      label,
      defaultLabel,
      helpBlock,
      prefix,
      withRedux,
      meta: { error, touched }
    } = this.props;
    const { fileName } = this.state;

    return (
      <Fragment>
        {withRedux ? (
          <InputWrapper touched={touched} error={error}>
            <p htmlFor={id}>{label}</p>
            <IconSuccess>
              {fileName === undefined ? (
                defaultLabel && defaultLabel.length !== 0 ? (
                  <img src={Check} alt="Icon" width="16" />
                ) : (
                  <React.Fragment>{prefix}</React.Fragment>
                )
              ) : (
                <img src={Check} alt="Icon" width="16" />
              )}
            </IconSuccess>
            <input
              id={id}
              type="file"
              onChange={this.handleChange}
              ref={ref => (this.fileUpload = ref)}
              accept={accept}
            />
            <label htmlFor={id} error={error}>
              <span>
                {fileName === undefined
                  ? defaultLabel && defaultLabel.length !== 0
                    ? defaultLabel &&
                      defaultLabel.length !== 0 &&
                      defaultLabel[defaultLabel.length - 1].attachment
                        .split('/')[4]
                        .match(`(?<=%2F)(.*)(?=\\?)`)[0]
                    : label
                  : fileName}
              </span>
            </label>
            {touched && error && <span style={{ color: Color.red }}>{error}</span>}
            {helpBlock ? (
              <p className="help-block">
                *&nbsp;
                {helpBlock}
              </p>
            ) : null}
          </InputWrapper>
        ) : (
          <InputWrapper>
            <p htmlFor={id}>{label}</p>
            <IconSuccess withRedux={withRedux}>
              {fileName === undefined ? (
                defaultLabel && defaultLabel.length !== 0 ? (
                  <img src={Check} alt="Icon" width="16" />
                ) : (
                  <React.Fragment>{prefix}</React.Fragment>
                )
              ) : (
                <img src={Check} alt="Icon" width="16" />
              )}
            </IconSuccess>
            <input
              id={id}
              type="file"
              onChange={this.handleChangeWithoutRedux}
              ref={ref => (this.fileUpload = ref)}
              accept={accept}
            />
            <label htmlFor={id}>
              <span>
                {fileName === undefined
                  ? defaultLabel && defaultLabel.length !== 0
                    ? defaultLabel &&
                      defaultLabel.length !== 0 &&
                      defaultLabel[defaultLabel.length - 1].attachment
                        .split('/')[4]
                        .match(`(?<=%2F)(.*)(?=\\?)`)[0]
                    : label
                  : fileName}
              </span>
            </label>
          </InputWrapper>
        )}
      </Fragment>
    );
  }
}

FileUploader.propTypes = propTypes;
FileUploader.defaultProps = defaultProps;

export default FileUploader;
