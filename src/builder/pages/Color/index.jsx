import React, { Fragment } from 'react';
import { ColorBox } from './Styled';
import { Margin } from '../../../lib';

const ColorPgae = () => (
  <Fragment>
    <h1>Color</h1>
    <p>
      The Danacita brand currently consists of six primary colors
      that are used in a wide array of marketing materials.
    </p>
    <Margin top={48} bottom={16}>
      <h4>Primary</h4>
    </Margin>
    <ColorBox bgColor="lightBlue">Light Blue - #dce9fa</ColorBox>
    <ColorBox bgColor="blue">Blue - #4587ef</ColorBox>
    <ColorBox bgColor="darkBlue">Dark Blue - #3151aa</ColorBox>
    <ColorBox bgColor="green">Green - #2eb062</ColorBox>
    <ColorBox bgColor="orange">Orange - #fcac42</ColorBox>
    <ColorBox bgColor="red">Red - #c61b42</ColorBox>
  </Fragment>
);

export default ColorPgae;
