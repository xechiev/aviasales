import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Spin } from "antd";
import { ErrorServer, NoTicket } from "../alertMessage/AlertMessage";
import { sortedTicketsByTab, filteredTickets } from "../../utils";
import Ticket from "../ticket/Ticket";

import classes from "./TicketList.module.scss";
import "antd/dist/antd.css";

export default function TicketList() {
  const state = useSelector(({ reducer }) => reducer);

  const { dataTicket, isLoaded, isError, filters, tabs } = state;

  const isCheckedFilters = filters.filter((filter) => filter.isChecked);

  const isCheckedTab = tabs.findIndex((index) => index.isChecked);

  const filteredData = filteredTickets(isCheckedFilters, dataTicket);

  const dataSorted = sortedTicketsByTab(tabs[isCheckedTab].id, filteredData);

  return isError ? (
    <ErrorServer />
  ) : (
    <ul className={classes.ticketList}>
      {!isCheckedFilters.length ? <NoTicket /> : " "}
      {isLoaded ? <Spin tip="Loading..." className={classes.spin} /> : " "}
      {dataSorted.slice(0, 5).map((ticket) => (
        <li className={classes.ticket} key={Math.random()}>
          <Ticket {...ticket} isLoaded={isLoaded} />
        </li>
      ))}
    </ul>
  );
}
