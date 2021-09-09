/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as actions from '../actions';
import classes from './Filter.module.scss';

function Filter({ initState, toggleOne, toggleAll }) {
  console.log(actions);
  return (
    <div className={classes.filter}>
      <div className={classes.title}>Количество пересадок</div>
      <div className={classes.transfers}>
        {
          initState.value.map((item) => (
            <label 
              className={classNames(classes.check, classes.option)} 
              key={item.id}
              onClick={() => toggleAll()}
            >
              <input
                type="checkbox"
                id={item.id}
                onClick={console.log(initState.value)}
                className={classNames(classes.checkInput, classes.option)}
              />
              <span className={classes.checkBox} />
              <span className={classes.value}>{item.name}</span>
            </label>
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ initState: state });

export default connect(mapStateToProps, actions)(Filter);
