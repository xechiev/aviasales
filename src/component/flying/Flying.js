import React from "react";
import PropTypes from "prop-types";
import FromTo from "../fromTo/FromTo";
import Travel from "../travel/Travel";
import Transfers from "../transfers";

import classes from "./Flying.module.scss";

export default function Flying({ segments }) {
  return (
    <div className={classes.flying}>
      {segments.map((item) => (
        <div className={classes.there} key={item.date}>
          <FromTo {...item} />
          <Travel {...item} />
          <Transfers {...item} />
        </div>
      ))}
    </div>
  );
}

Flying.propTypes = {
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
