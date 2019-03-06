import React from 'react';
import PropTypes from 'prop-types';
import whatsappLogo from './whatsapp-logo.svg';

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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque laboriosam dicta non at
        deleniti sapiente magni dolore illum, debitis molestias enim adipisci tenetur eum
        repudiandae facilis harum vero perspiciatis iste?
      </p>
    </a>
  </React.Fragment>
);

const propTypes = {
  phoneNumber: PropTypes.string
};

const defaultProps = {
  phoneNumber: null
};

FloatingWhatsAppButton.propTypes = propTypes;
FloatingWhatsAppButton.defaultProps = defaultProps;

export default FloatingWhatsAppButton;
