import React from "react";
import { Alert } from "antd";

import classes from "./AlertMessage.module.scss";

import "antd/dist/antd.css";

export const ErrorServer = () => (
  <Alert
    message="Возникла ошибка, попробуйте запрос позднее"
    type="error"
    className={classes.alert}
  />
);

export const NoTicket = () => (
  <Alert
    message="Рейсов, подходящих под заданные фильтры, не найдено"
    type="info"
    className={classes.info}
  />
);
