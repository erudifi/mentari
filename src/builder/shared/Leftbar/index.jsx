/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LeftWrapper } from './Styled';
import { Margin, Color } from '../../../lib';

const activeMenu = {
  fontWeight: 600,
  color: Color.darkBlue
};

const SidebarShared = () => (
  <LeftWrapper>
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
      {/* <li>
        <NavLink exact activeStyle={activeMenu} to="/grid">
          Grid
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink exact activeStyle={activeMenu} to="/typography">
          Typography
        </NavLink>
      </li> */}
    </ul>
    <Margin vertical={20} />
    <h3>Components</h3>
    <ul>
      {/* <li>
        <NavLink exact activeStyle={activeMenu} to="/accordion">
          Accordion
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={activeMenu} to="/avatar">
          Avatar
        </NavLink>
      </li> */}
      <li>
        <NavLink exact activeStyle={activeMenu} to="/button">
          Button
        </NavLink>
      </li>
      {/* <li>
        <NavLink exact activeStyle={activeMenu} to="/checkbox">
          Checkbox
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
        <NavLink exact activeStyle={activeMenu} to="/textarea">
          Textarea
        </NavLink>
      </li>
      <li>
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

export default SidebarShared;
