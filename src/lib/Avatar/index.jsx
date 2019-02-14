import React from 'react';
import PropTypes from 'prop-types';

import { AvatarWrapper, AvatarInitial } from './Styled';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  profile: PropTypes.object.isRequired
};

const getInitials = string => {
  const names = string.split(' ');
  const initials = names[0].substring(0, 1).toUpperCase();
  return initials;
};

const Avatar = ({ profile }) => (
  <AvatarWrapper>
    <AvatarInitial>{getInitials(`${profile.firstName}`)}</AvatarInitial>
    <AvatarInitial>{getInitials(`${profile.lastName}`)}</AvatarInitial>
  </AvatarWrapper>
);

Avatar.propTypes = propTypes;

export default Avatar;
