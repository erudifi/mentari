import React from 'react';
import PropTypes from 'prop-types';
import PropsWrapper from './Styled';

const propTypes = {
  children: PropTypes.node.isRequired
};

const PropsShared = ({ children }) => (
  <PropsWrapper>
    <h4>Props</h4>
    <p>Common props you may want to specify include</p>
    <ul>
      <li>
        <span>className</span>
        <span>Apply a className to the control element</span>
      </li>
      <li>
        <span>style</span>
        <span>Apply inline style to element</span>
      </li>
      {children}
    </ul>
  </PropsWrapper>
);

PropsShared.propTypes = propTypes;

export default PropsShared;
