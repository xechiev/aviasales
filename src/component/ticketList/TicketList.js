import React from 'react';
import Ticket from '../ticket/Ticket';

import classes from './TicketList.module.scss';

function TicketList() {
  return (
    <ul className={classes.list}>
      <li className={classes.ticket}>
        <Ticket />
      </li>
    </ul>
  );
}

export default TicketList;
