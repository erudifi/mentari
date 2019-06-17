import React, { Component } from 'react';
import { Content } from '../Styled';
import { Margin } from '../../../lib';
import { AvatarWrapper, Desc } from './Styled';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const gitApi = fetch('https://api.github.com/orgs/danacita/public_members');
    gitApi
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          data: resJson
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <Content>
        <h1>Mentari</h1>
        <Desc>
          <p>Resources, components, and design guidelines behind Danacita.</p>
          <p>
            UI kits typically include the user interface components that convey meaning and provide
            functionality to users – think buttons, widgets, checkboxes, progress bars, and
            navigation buttons and etc.
          </p>
        </Desc>
        <Margin top={48}>
          <h2>Contributors</h2>
        </Margin>
        <Desc>
          {data.map(res => (
            <a key={res.login} href={res.html_url} target="_blank" rel="noopener noreferrer">
              <AvatarWrapper src={res.avatar_url} alt="Avatar" />
            </a>
          ))}
        </Desc>
      </Content>
    );
  }
}

export default WelcomePage;
