import React from 'react';

export default class Service extends React.Component {
  render() {
    return (
      <div className="service">
        <div className="description">
          {this.props.service.description}
        </div>
        <div className="name">
          <h3>{this.props.service.name}</h3>
          <div>{this.props.service.price}</div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}