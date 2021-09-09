import React from 'react';
import S7logo from '../../img/S7logo.png';
import Flying from '../flying/Flying';

import classes from './Ticket.module.scss';

export default function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <div className={classes.price}>
          13 400
          <span>&nbsp;P</span>
        </div>
        <div className={classes.logo}>
          <img src={S7logo} className={classes.plane} alt="S7logo" />
        </div>
      </div>
      <div className={classes.info}>
        <Flying />
      </div>
    </div>
  );
}
