import React from 'react';
import Header from '../header/Header';
import TicketList from '../ticketList/TicketList';
import Filter from '../filter/Filter';
import Tab from '../tab/Tab';
import classes from './App.module.scss'

export default function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.body}>
        <Filter />
        <div className={classes.rigth}>
          <div className={classes.tabs}>
            <Tab value="Самый дешевый" />
            <Tab value="Самый быстрый" />
          </div>
          <TicketList />
        </div>
      </div>
    </div>
  );
}

