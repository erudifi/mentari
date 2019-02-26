import React from 'react';
import PropTypes from 'prop-types';
import whatsappLogo from './whatsapp-logo.svg';

const FloatingWhastapp = ({ phoneNumber }) => (
  <React.Fragment>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
    >
      <img
        src={whatsappLogo}
        alt="FloatingWhastapp"
        style={{
          position: 'fixed',
          bottom: '88px',
          width: '71px',
          right: '12px',
          zIndex: 100
        }}
      />
    </a>
  </React.Fragment>
);

const propTypes = {
  phoneNumber: PropTypes.string
};

const defaultProps = {
  phoneNumber: null
};

FloatingWhastapp.propTypes = propTypes;
FloatingWhastapp.defaultProps = defaultProps;

export default FloatingWhastapp;
