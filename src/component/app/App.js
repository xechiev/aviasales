import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsData } from '../../redux/asyncActions/asyncActions';
import Header from '../header/Header';
import Tabs from '../tabs/Tabs';
import TicketList from '../ticketList/TicketList';
import Filter from '../filter/Filter';
import classes from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(({ reducer }) => reducer);
  const { filters, tabs } = state;
  
	useEffect(() => {
    dispatch(getTicketsData());
	}, [dispatch]);

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.body}>
        <Filter array={filters} />
        <div className={classes.right}>
          <Tabs tabs={tabs} />
          <TicketList state={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
