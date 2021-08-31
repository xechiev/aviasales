import React from 'react';
import classes from './Travel.module.scss';

export default function Travel() {
  return (
    <div className={classes.travel}>
      <div className={classes.title}>В ПУТИ</div>
      <div className={classes.time}>21ч 15м</div>
    </div>
  );
}
