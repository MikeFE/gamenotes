import React from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
          <Col sm={3}>
          <Nav variant="pills" className="flex-column">
              <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
          </Nav>
          </Col>
          <Col sm={9}>
          <Tab.Content>
              <Tab.Pane eventKey="first">
              page 1
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              page 2
              </Tab.Pane>
          </Tab.Content>
          </Col>
      </Row>
      </Tab.Container>
    );
  }
}

export default Menu;