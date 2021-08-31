import React from 'react';
import Checkbox from '../checkbox/Checkbox';

import classes from './Filter.module.scss'

function Filter(props) {
  return (
    <div className={classes.filter}>
      <div className={classes.title}>Количество пересадок</div>
      <div className={classes.transfers}>
        <Checkbox value="Все" />
        <Checkbox value="Без пересадок" />
        <Checkbox value="1 пересадка" />
        <Checkbox value="2 пересадки" />
        <Checkbox value="3 пересадки" />
      </div>
    </div>
  );
}

export default Filter;
