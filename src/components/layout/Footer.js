import React from 'react';

import style from './Layout.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        Made by{' '}
        <a
          href="https://github.com/putrairawan992/Bambu-Fe.git"
          target="_blank"
          className={style.authorLink}
        >
          Putra Irawan
        </a>
      </p>
    </div>
  );
};

export default Footer;
