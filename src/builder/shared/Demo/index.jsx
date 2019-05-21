import React from 'react';
import PropTypes from 'prop-types';
import { DemoWrapper } from './Styled';

const propTypes = {
  children: PropTypes.node.isRequired
};

const DemoShared = ({ children }) => <DemoWrapper>{children}</DemoWrapper>;

DemoShared.propTypes = propTypes;

export default DemoShared;
