import React from 'react';
import { classes } from '../../../config/class';
import './index.css';

const Loading = () => {
  const baseClass = classes.baseG;

  return (
    <div className={`${baseClass}divLoader`}>
      <svg
        className={`${baseClass}svgLoader`}
        viewBox="0 0 50 50"
        width="51px"
        height="50px"
        viewBox="0 0 51 50"
      >
        <path
          fill="#9aca3c"
          d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
};

export default Loading;
