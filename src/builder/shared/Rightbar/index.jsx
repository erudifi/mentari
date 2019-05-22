import React from 'react';
import PropTypes from 'prop-types';
import { RightbarWrapper } from './Styled';
import { Margin } from '../../../lib';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

const RightbarShared = ({ children, title }) => (
  <RightbarWrapper>
    <h3>Builder component</h3>
    <p>{`You can make a ${title} with the properties provided below`}</p>
    <Margin top={24}>{children}</Margin>
  </RightbarWrapper>
);

RightbarShared.propTypes = propTypes;

export default RightbarShared;
