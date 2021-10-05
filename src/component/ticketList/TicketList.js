import React from 'react';
import { Alert, Spin } from 'antd';
import { sortedTicketsByTab, filteredTickets } from '../../utils';
import Ticket from '../ticket/Ticket';

import classes from './TicketList.module.scss';
import 'antd/dist/antd.css';

function TicketList({ state }) {
  const { dataTicket, isLoaded, isError, filters, tabs } = state;  

  const isCheckedFilters = filters.filter((filter) => filter.isChecked);
    
  const isCheckedTab = tabs.findIndex((index) => index.isChecked);

  const filteredData = filteredTickets(isCheckedFilters, dataTicket);

  const dataSorted = sortedTicketsByTab(tabs[isCheckedTab].id, filteredData);

  return isError ? (
    <Alert message="Возникла ошибка сервера, попробуйте запрос позднее" type="error" className={classes.alert} />
  ) : (
    <ul className={classes.list}>
      {isLoaded ? (
        dataSorted.map((ticket) => (
          <li className={classes.ticket} key={Math.random()}>
            <Ticket {...ticket} isLoaded={isLoaded} />
            {!dataSorted.length ? <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" /> : ''}
          </li>        
        ))
      ) : (
        <Spin tip="Loading..." className={classes.spin} />
      )}
    </ul>
  )
}

export default TicketList;
