/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { SidebarWrapper } from './Styled';
import { Margin } from '../../../lib';

const SidebarShared = () => (
  <SidebarWrapper>
    <h3>Introduction</h3>
    <ul>
      <li>
        <a href="/">Welcome</a>
      </li>
    </ul>
    <Margin vertical={20} />
    <h3>Foundation</h3>
    <ul>
      <li>
        <a href="">Color</a>
      </li>
      <li>
        <a href="">Grid</a>
      </li>
      <li>
        <a href="">Typography</a>
      </li>
    </ul>
    <Margin vertical={20} />
    <h3>Components</h3>
    <ul>
      <li>
        <a href="">Accordion</a>
      </li>
      <li>
        <a href="">Avatar</a>
      </li>
      <li>
        <a href="/button">Button</a>
      </li>
      <li>
        <a href="">Checkbox</a>
      </li>
      <li>
        <a href="">Radio</a>
      </li>
      <li>
        <a href="">Select</a>
      </li>
      <li>
        <a href="">Textarea</a>
      </li>
      <li>
        <a href="">Textfield</a>
      </li>
    </ul>
    <Margin vertical={20} />
    <h3>Utilities</h3>
    <ul>
      <li>
        <a href="">Responsive</a>
      </li>
      <li>
        <a href="">Spacing</a>
      </li>
      <li>
        <a href="">Transition</a>
      </li>
    </ul>
  </SidebarWrapper>
);

export default SidebarShared;
