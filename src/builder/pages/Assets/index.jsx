import React, { Component } from 'react';
import { ContentWithRightBar } from '../Styled';

class AssetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ContentWithRightBar>
        <h1>Assets</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </ContentWithRightBar>
    );
  }
}

export default AssetsPage;
