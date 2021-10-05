import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { ErrorServer, NoTicket } from '../alertMessage/AlertMessage';
import { sortedTicketsByTab, filteredTickets } from '../../utils';
import Ticket from '../ticket/Ticket';

import classes from './TicketList.module.scss';
import 'antd/dist/antd.css';

export default function TicketList({ state }) {
  const { dataTicket, isLoaded, isError, filters, tabs } = state;

  const isCheckedFilters = filters.filter((filter) => filter.isChecked);

  const isCheckedTab = tabs.findIndex((index) => index.isChecked);

  const filteredData = filteredTickets(isCheckedFilters, dataTicket);

  const dataSorted = sortedTicketsByTab(tabs[isCheckedTab].id, filteredData);

  return isError ? (
    <ErrorServer />
  ) : (
    <ul className={classes.list}>
      {!isCheckedFilters.length ? <NoTicket /> : ' '}
      {isLoaded ? (
        dataSorted.map((ticket) => (
          <li className={classes.ticket} key={Math.random()}>
            <Ticket {...ticket} isLoaded={isLoaded} />
          </li>
        ))
      ) : (
        <Spin tip="Loading..." className={classes.spin} />
      )}
    </ul>
  );
}

TicketList.propTypes = {
  state: PropTypes.shape({
    dataTicket: PropTypes.arrayOf(PropTypes.object).isRequired,
    tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
    filters: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoaded: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
  }).isRequired,
};
