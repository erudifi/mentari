import React, { Fragment } from 'react';
import RightbarShared from '../../shared/Rightbar';
import BottombarShared from '../../shared/Bottombar';
import { Button } from '../../../lib';

const ButtonPage = () => (
  <Fragment>
    <h1>Button</h1>
    <p>Danacita button components</p>
    <div>
      <Button block color="blue">
        Button
      </Button>
    </div>
    <BottombarShared />
    <RightbarShared />
  </Fragment>
);

export default ButtonPage;
