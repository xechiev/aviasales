import React from 'react';
import classes from './FromTo.module.scss';

export default function ToFrom() {
  return (
    <div className={classes.fromTo}>
      <div className={classes.cities}>HKT - MOW</div>
      <div className={classes.time}>14:43</div>
    </div>
  );
}
