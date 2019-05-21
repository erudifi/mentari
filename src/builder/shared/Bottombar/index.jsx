import React from 'react';
import PropTypes from 'prop-types';
import { BottombarWrapper } from './Styled';

const propTypes = {
  children: PropTypes.node.isRequired
};

const BottombarShared = ({ children }) => <BottombarWrapper>{children}</BottombarWrapper>;

BottombarShared.propTypes = propTypes;

export default BottombarShared;
