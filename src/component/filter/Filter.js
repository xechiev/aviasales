/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { setFilters } from "../../redux/actions/actions";
import classes from "./Filter.module.scss";

export default function Filter() {
  const state = useSelector(({ reducer }) => reducer);

  const { filters } = state;

  const dispatch = useDispatch();

  const onSelectFilter = (item) => {
    dispatch(setFilters(item));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.filter}>
        <div className={classes.title}>Количество пересадок</div>
        <ul className={classes.list}>
          {filters.map((item, i) => (
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
    </div>
  );
}
