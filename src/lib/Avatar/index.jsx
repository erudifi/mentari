/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { AvatarWrapper, AvatarInitial } from './Styled';

const propTypes = {
  profile: PropTypes.object.isRequired,
  square: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

const defaultProps = {
  square: true,
  className: null,
  style: null
};

const getInitials = string => {
  const names = string.split(' ');
  const initials = names[0].substring(0, 1).toUpperCase();
  return initials;
};

const Avatar = ({ profile, square, className, style }) => (
  <AvatarWrapper square={square} className={className} style={style}>
    <AvatarInitial>{getInitials(`${profile.firstName}`)}</AvatarInitial>
    <AvatarInitial>{getInitials(`${profile.lastName}`)}</AvatarInitial>
  </AvatarWrapper>
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
