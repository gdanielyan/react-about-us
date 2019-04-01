import React, { Component } from 'react';
import './Thumbnail.scss';

class Thumbnail extends Component {
  render() {

    let classStr = 'thumbnail ';
    classStr += (this.props.activeEmployee) ? 'active' : '';
    
    return(
      <div className={classStr}>
        <div className="img-wrapper">
          <h6 className="position">{this.props.employee.title}</h6>
          <img src={this.props.thumbnail} alt=""/>
        </div>
      </div>
    )
  }
}
 
export default Thumbnail;