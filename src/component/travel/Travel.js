import React from 'react';
import { getTimeFromMins } from '../../utils/index';
import classes from './Travel.module.scss';

export default function Travel({ duration }) {
  return (
    <div className={classes.travel}>
      <div className={classes.title}>В ПУТИ</div>
      <div className={classes.time}>{getTimeFromMins(duration)}</div>
    </div>
  );
}
