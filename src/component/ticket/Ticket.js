import React from 'react';
import S7logo from '../../img/S7logo.png';
import Flying from '../flying/Flying';

import classes from './Ticket.module.scss';

export default function Ticket({ price, carrier, segments }) {
  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <div className={classes.price}>
          {`${price.toLocaleString()} P`}
        </div>
        <div className={classes.logo}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} className={classes.plane} alt={carrier} />
        </div>
      </div>
      <div className={classes.info}>
        <Flying segments={segments} />
      </div>
    </div>
  );
}
