import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Row, Nav } from "react-bootstrap";
import { setTabs } from "../../redux/actions/actions";
import classes from "./Tabs.module.scss";

export default function Tabs() {
  const state = useSelector(({ reducer }) => reducer);

  const { tabs } = state;

  const dispatch = useDispatch();

  const handler = (item) => {
    dispatch(setTabs(item));
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="1">
      <Row className={classes.tabs}>
        <Nav variant="pills" className={classes.pills}>
          {tabs.map((tab) => (
            <Nav.Item
              key={tab.id}
              className={classes.item}
              onClick={() => handler(tab)}
            >
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
