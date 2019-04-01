// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components & Styles
import Pane from './pane/Pane'
import './GroupedPane.scss';


class GroupedPane extends Component {

  componentWillUpdate() {
    console.log('component will mount');
  }

  render() {

    const first = this.props.activeEmployee;
    const second = this.props.employees[1];
    const third = this.props.employees[2];

    return(
      <div className="grouped-pane">
        <Container fluid={true} className="panes">
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Pane employee={first} className="first-pane"/>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Pane employee={second} className='second-pane' slide={this.props.slide}/>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Pane employee={third} className='third-pane' slide={this.props.slide} />
            </Col>
          </Row>
        </Container> 
      </div>
    );
  }
}

export default GroupedPane;