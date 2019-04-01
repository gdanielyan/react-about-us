import React, { Component } from 'react';
import './Pane.scss';

class Pane extends Component {
  render() {

    const { employee } = this.props;

    let classStr = 'pane ';
    classStr += (this.props.className) ? this.props.className : '';

    if(this.props.slide) {
      classStr += ' slide';
    }

    return(
      <div className={classStr}>
        <img src={employee.thumbnail} alt="" />
        <div className="description-div">
          <p className="title">{employee.title}</p>
          <p className="description">{employee.description}</p>
        </div>
      </div>
    )
  }
}
 
export default Pane;