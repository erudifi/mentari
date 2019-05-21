import React, { Fragment } from 'react';
import RightbarShared from '../../shared/Rightbar';
import BottombarShared from '../../shared/Bottombar';
import DemoShared from '../../shared/Demo';
import { Button, TextField } from '../../../lib';

const ButtonPage = () => (
  <Fragment>
    <h1>Button</h1>
    <p>Danacita button components</p>
    <DemoShared>
      <Button>Button</Button>
    </DemoShared>
    <BottombarShared>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sunt fuga tempora
        asperiores necessitatibus nemo a quam, dicta, enim rem assumenda maiores repudiandae sint
        animi ipsam corrupti iusto placeat porro.
      </p>
    </BottombarShared>
    <RightbarShared>
      <TextField label="label" withRedux={false} />
    </RightbarShared>
  </Fragment>
);

export default ButtonPage;
