import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Tab, Row, Nav } from 'react-bootstrap';
import Header from '../header/Header';
import TicketList from '../ticketList/TicketList';
import Filter from '../filter/Filter';
import classes from './App.module.scss';

function App({ initState }) {
  const { tabs, filters } = initState;

  const handler = (key) => {
    console.log(tabs, filters);
  };
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.body}>
        <Filter filters={filters} />
        <div className={classes.right}>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="1"
            onSelect={handler}
          >
            <Row className={classes.tabs}>
              <Nav variant="pills" className="flex-row">
                <Nav.Item>
                  <Nav.Link eventKey="1" className={classes.tab}>
                    Самый дешевый
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2" className={classes.tab}>
                    Самый быстрый
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Tab.Container>
          <TicketList />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ initState: state });
export default connect(mapStateToProps)(App)
