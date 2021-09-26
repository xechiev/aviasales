import React from 'react';
import { useDispatch } from 'react-redux';
import { Tab, Row, Nav } from 'react-bootstrap';
import { setTabs } from '../../redux/actions/actions'
import classes from '../app/App.module.scss';

function Tabs({ tabs }) {
  const dispatch = useDispatch();

  const handler = (item) => {
    dispatch(setTabs(item))
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="1">
      <Row className={classes.tabs}>
        <Nav variant="pills" className="flex-row">
          {tabs.map((tab) => (
            <Nav.Item key={tab.id} onClick={() => handler(tab)}>
              <Nav.Link eventKey={tab.id} className={classes.tab}>
                {tab.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Row>
    </Tab.Container>
  );
}

export default Tabs;
