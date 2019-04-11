import React from 'react';
import PropTypes from 'prop-types';
import whatsappLogo from './whatsapp-logo.svg';

const propTypes = {
  phoneNumber: PropTypes.string
};

const defaultProps = {
  phoneNumber: null
};

const FloatingWhatsAppButton = ({ phoneNumber }) => (
  <React.Fragment>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
    >
      <img
        src={whatsappLogo}
        alt="FloatingWhatsAppButton"
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

FloatingWhatsAppButton.propTypes = propTypes;
FloatingWhatsAppButton.defaultProps = defaultProps;

export default FloatingWhatsAppButton;
