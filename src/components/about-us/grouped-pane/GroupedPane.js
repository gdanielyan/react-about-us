// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components & Styles
import Pane from './pane/Pane'
import './GroupedPane.scss';


class GroupedPane extends Component {
  render() {
    return(
      <div className="grouped-pane">
        <Container fluid={true} className="panes">
          <Row>
            { this.props.employees && 
              this.props.employees.map((employee) => 
                <Col xs={12} md={6} lg={4}>
                  <Pane employee={employee} className="" />
                </Col>
              )
            }
          </Row>
        </Container> 
      </div>
    );
  }
}

export default GroupedPane;