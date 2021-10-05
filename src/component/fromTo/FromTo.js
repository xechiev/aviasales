import React from 'react';
import PropTypes from 'prop-types';
import { flightTimeConverter } from '../../utils/index';
import classes from './FromTo.module.scss';

export default function FromTo({ origin, destination, date, duration }) {
  return (
    <div className={classes.fromTo}>
      <div className={classes.cities}>
        {origin}
        -
        {destination}
      </div>
      <div className={classes.time}>{flightTimeConverter(date, duration)}</div>
    </div>
  );
}

FromTo.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};
