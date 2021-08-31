import React from 'react';
import classes from './Transfers.module.scss';

export default function Transfers() {
  return (
    <div className={classes.transfers}>
      <div className={classes.count}>1 ПЕРЕСАДКА</div>
      <div className={classes.city}>KUL</div>
    </div>
  );
}
