import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTicketsData } from "../../redux/asyncActions/asyncActions";
import Header from "../header/Header";
import Tabs from "../tabs/Tabs";
import TicketList from "../ticketList/TicketList";
import Filter from "../filter/Filter";
import classes from "./App.module.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTicketsData());
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.body}>
        <Filter />
        <div className={classes.right}>
          <Tabs />
          <TicketList />
        </div>
      </div>
    </div>
  );
}

export default App;
