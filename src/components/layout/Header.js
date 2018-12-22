import React from 'react';

import style from './Layout.css';

const Header = () => {
  return (
    <header className={style.header}>
      <p className={style.brand}>Bambu Test</p>
    </header>
  );
};

export default Header;
