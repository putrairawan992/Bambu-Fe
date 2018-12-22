import React from 'react';

import style from './Chart.css';
import { getMovement } from '../../helpers/number';

const Line = props => {
  const {
    maxHeight,
    height,
    highestHeight,
    lowestHeight,
    openHeight,
    closeHeight,
    isBull
  } = getMovement(
    props.lowest,
    props.highest,
    props['3. low'],
    props['2. high'],
    props['1. open'],
    props['4. close']
  );

  const backgroundColor = isBull ? 'green' : 'red';
  const movementStyle = {
    height: `${height}px`,
    marginTop: `${maxHeight - highestHeight}px`,
    marginBottom: `${lowestHeight}px`,
    backgroundColor: backgroundColor
  };

  const openStyle = {
    position: 'absolute',
    width: '5px',
    height: '1px',
    backgroundColor: backgroundColor,
    top: `${maxHeight - openHeight}px`,
    left: '-3px'
  };

  const closeStyle = {
    position: 'absolute',
    width: '5px',
    height: '1px',
    backgroundColor: backgroundColor,
    bottom: `${closeHeight}px`,
    right: '-3px'
  };

  return (
    <div
      className={style.line}
      title={`Open: ${props['1. open']}, High: ${props['2. high']}, Low: ${
        props['3. low']
      }, Close: ${props['4. close']}`}
    >
      <div style={movementStyle}>
        <div style={openStyle} />
        <div style={closeStyle} />
      </div>
    </div>
  );
};

export default Line;
