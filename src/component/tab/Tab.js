import React from 'react';
import PropTypes from 'prop-types';
import classes from './Tab.module.scss';

function Tab({ value }) {
  return (
    <div className={classes.tabs}>
      <div className={classes.tab}>{value}</div>
    </div>
  );
}

Tab.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Tab;
