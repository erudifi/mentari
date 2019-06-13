/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LeftWrapper } from './Styled';
import { Margin, Color } from '../../../lib';

const activeMenu = {
  fontWeight: 600,
  color: Color.darkBlue
};

const propTypes = {
  menuMobile: PropTypes.bool.isRequired
};

const SidebarShared = ({ menuMobile }) => (
  <LeftWrapper menuMobile={menuMobile}>
    <h3>Introduction</h3>
    <ul>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/">
          Welcome
        </NavLink>
      </li>
    </ul>
    <Margin vertical={20} />
    <h3>Foundation</h3>
    <ul>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/color">
          Color
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/grid">
          Grid
        </NavLink>
      </li>
    </ul>
    <Margin vertical={20} />
    <h3>Components</h3>
    <ul>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/avatar">
          Avatar
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/button">
          Button
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/button-link">
          Button link
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/checkbox">
          Checkbox
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/date-picker-select">
          Datepicker select
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/flash-message">
          Flash message
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/file-uploader">
          File uploader
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/month-picker">
          Monthpicker
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/progress">
          Progress
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/radio">
          Radio
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/select">
          Select
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/switch">
          Switch
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/textarea">
          Textarea
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/textfield">
          Textfield
        </NavLink>
      </li>
      {/* <li>
        <NavLink exact activeStyle={activeMenu} to="/select">
          Select
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink exact activeStyle={activeMenu} to="/textarea">
          Textarea
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink exact activeStyle={activeMenu} to="/textfield">
          Textfield
        </NavLink>
      </li> */}
    </ul>
    {/* <Margin vertical={20} />
    <h3>Utilities</h3>
    <ul>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/responsive">
          Responsive
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/spacing">
          Spacing
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/transition">
          Transition
        </NavLink>
      </li>
    </ul> */}
  </LeftWrapper>
);

SidebarShared.propTypes = propTypes;

export default SidebarShared;
