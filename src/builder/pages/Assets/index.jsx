/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Content } from '../Styled';
import { AssetsBoxWrapper, AssetsBox, AssetsDownload } from './Styled';
import { Margin } from '../../../lib';
import danacitaLogoBlueSvg from './images/dana-cita-blue.svg';
import danacitaLogoBluePng from './images/dana-cita-blue.png';
import danacitaLogoWhiteSvg from './images/dana-cita-white.svg';
import danacitaLogoWhitePng from './images/dana-cita-white.png';
import danacitaLogoBlackSvg from './images/dana-cita-black.svg';
import danacitaLogoBlackPng from './images/dana-cita-black.png';

class AssetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <h1>Assets</h1>
        <p>
          Danacita logos and brand assets, PNG downloads have a transparent background, JPGs will
          have a white background.
        </p>
        <Margin top={48} bottom={16}>
          <h4>Logo Danacita</h4>
        </Margin>
        <AssetsBoxWrapper>
          <AssetsBox>
            <img src={danacitaLogoBlueSvg} alt="Logo - Danacita" />
          </AssetsBox>
          <AssetsDownload bordered>
            <a href={danacitaLogoBluePng} download="danacita-blue">
              PNG
            </a>
          </AssetsDownload>
          <AssetsDownload>
            <a href={danacitaLogoWhiteSvg} download="danacita-blue">
              SVG
            </a>
          </AssetsDownload>
        </AssetsBoxWrapper>
        <AssetsBoxWrapper>
          <AssetsBox bg="blue">
            <img src={danacitaLogoWhiteSvg} alt="Logo - Danacita" />
          </AssetsBox>
          <AssetsDownload bordered>
            <a href={danacitaLogoWhitePng} download="danacita-white">
              PNG
            </a>
          </AssetsDownload>
          <AssetsDownload>
            <a href={danacitaLogoWhiteSvg} download="danacita-white">
              SVG
            </a>
          </AssetsDownload>
        </AssetsBoxWrapper>
        <AssetsBoxWrapper>
          <AssetsBox>
            <img src={danacitaLogoBlackSvg} alt="Logo - Danacita" />
          </AssetsBox>
          <AssetsDownload bordered>
            <a href={danacitaLogoBlackPng} download="danacita-black">
              PNG
            </a>
          </AssetsDownload>
          <AssetsDownload>
            <a href={danacitaLogoBlackSvg} download="danacita-black">
              SVG
            </a>
          </AssetsDownload>
        </AssetsBoxWrapper>
      </Content>
    );
  }
}

export default AssetsPage;
