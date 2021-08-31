import React from 'react';
import FromTo from '../fromTo/FromTo';
import ToFrom from '../fromTo/ToFrom';
import Travel from '../travel/Travel';
import Transfers from '../transfers';

import classes from './Flying.module.scss';

export default function Flying() {
  return (
    <div className={classes.flying}>
      <div className={classes.there}>
        <FromTo />
        <Travel />
        <Transfers />
      </div>
      <div className={classes.back}>
        <ToFrom />
        <Travel />
        <Transfers />
      </div>
    </div>
  );
}
