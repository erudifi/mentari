import React from 'react';
import PropTypes from 'prop-types';
import { RightbarWrapper } from './Styled';

const propTypes = {
  children: PropTypes.node.isRequired
};

const RightbarShared = ({ children }) => (
  <RightbarWrapper>
    <h3>Builder</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    {children}
  </RightbarWrapper>
);

RightbarShared.propTypes = propTypes;

export default RightbarShared;
