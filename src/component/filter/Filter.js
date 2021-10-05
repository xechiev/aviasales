/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { setFilters } from '../../redux/actions/actions';
import classes from './Filter.module.scss';

export default function Filter({ array }) {
  const dispatch = useDispatch();

  const onSelectFilter = (item) => {
    dispatch(setFilters(item));
  };

  return (
    <div className={classes.filter}>
      <div className={classes.title}>Количество пересадок</div>
      <ul className={classes.list}>
        {array.map((item, i) => (
          <li key={item.id}>
            <label className={classNames(classes.check, classes.option)}>
              <input
                type="checkbox"
                id={i}
                onChange={() => onSelectFilter(item)}
                checked={item.isChecked}
                className={classNames(classes.checkInput, classes.option)}
              />
              <span className={classes.checkBox} />
              <span className={classes.value}>{item.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

Filter.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
};
