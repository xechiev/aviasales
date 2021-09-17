import React from 'react';
import { Tab, Row, Nav } from 'react-bootstrap';
import classes from '../app/App.module.scss';

function Tab(props) {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="1" onSelect={handler}>
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
  );
}

export default Tab;