/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as actions from '../../redux/actions/actions'
import classes from './Filter.module.scss';

function Filter({ initState, setFilters }) {
  const onSelectFilter = (item) => {
		setFilters(item)
	};

  return (
    <div className={classes.filter}>
      <div className={classes.title}>Количество пересадок</div>
      <ul className={classes.list}>
        {initState.filters.map((item, i) => (
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

const mapStateToProps = (state) => ({ initState: state });

export default connect(mapStateToProps, actions)(Filter);
