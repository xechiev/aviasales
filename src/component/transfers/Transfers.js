import React from "react";
import PropTypes from "prop-types";
import { correctEndingForm } from "../../utils/index";
import classes from "./Transfers.module.scss";

export default function Transfers({ stops }) {
  return (
    <div className={classes.transfers}>
      <div className={classes.count}>{correctEndingForm(stops.length)}</div>
      <div className={classes.city}>{stops.join(", ")}</div>
    </div>
  );
}

Transfers.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.string).isRequired,
};
