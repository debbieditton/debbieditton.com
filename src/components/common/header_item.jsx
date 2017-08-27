import React from 'react';
import './common.scss';
export default class HeaderItem extends React.Component {
  render() {
    return (
      <span className={`header-item ${this.props.selected && 'selected'}`} onClick={this.props.onClick}>
        {this.props.text}
      </span>
    );
  }
}