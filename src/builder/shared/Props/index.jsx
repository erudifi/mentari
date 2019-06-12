import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PropsWrapper from './Styled';

const propTypes = {
  children: PropTypes.node.isRequired,
  empty: PropTypes.bool
};

const defaultProps = {
  empty: false
};

const PropsShared = ({ children, empty }) => (
  <PropsWrapper>
    <h4>Props</h4>
    <p>Common props you may want to specify include</p>
    <ul>
      {!empty ? (
        <Fragment>
          <li>
            <span>className</span>
            <span>Apply a className to the control element</span>
          </li>
          <li>
            <span>style</span>
            <span>Apply inline style to element</span>
          </li>
        </Fragment>
      ) : null}
      {children}
    </ul>
  </PropsWrapper>
);

PropsShared.propTypes = propTypes;
PropsShared.defaultProps = defaultProps;

export default PropsShared;
