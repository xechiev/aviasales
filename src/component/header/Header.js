import React from 'react';
import Logo from '../../img/Logo.svg';
import classes from './Header.module.scss';

export default function Header() {
  return (
    <div className={classes.header}>
      <img src={Logo} alt="header_logo" className={classes.logo} />
    </div>
  );
}
