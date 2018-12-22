import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Stock.css';

const Stock = ({ ticker }) => {
  return (
    <NavLink className={style.stock} activeStyle={{ backgroundColor: '#20e3b2' }} to={`/${ticker}`}>
      <p>{ticker}</p>
    </NavLink>
  );
};

export default Stock;
