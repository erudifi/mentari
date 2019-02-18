/* Background https://codepen.io/bbrady/pen/ozrjKE */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Color from '../Styles/bases/Color';

const propTypes = {
  size: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  text: PropTypes.number.isRequired
};

const Progress = ({ size, text, percent }) => {
  const radius = (size - 4) / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percent) / 100;
  return (
    <Fragment>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={4}
          stroke={Color.lightBlue}
          fill="white"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={4}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          stroke={Color.orange}
          fill="transparent"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }}
        />
        <text
          style={{
            fontWeight: 600,
            fill: Color.darkBlue
          }}
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {text}
        </text>
      </svg>
    </Fragment>
  );
};

Progress.propTypes = propTypes;

export default Progress;
