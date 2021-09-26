import React from 'react';
import { Spin } from 'antd';
import Ticket from '../ticket/Ticket';

import 'antd/dist/antd.css';

import classes from './TicketList.module.scss';

function TicketList({ state, isLoaded }) {
  return (
    <>
      {isLoaded ? (
        <ul className={classes.list}>
          {state.dataTicket.map((ticket) => (
            <li className={classes.ticket} key={Math.random()}> 
              <Ticket {...ticket} />
            </li>        
          ))}
        </ul>
      ) : (
        <Spin tip="Loading..." />
      )}
    </>
  );
}

export default TicketList;
