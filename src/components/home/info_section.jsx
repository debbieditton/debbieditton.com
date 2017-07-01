import React from 'react';

export default class InfoSection extends React.Component {
  render(){
    return (
      <div className="info-section">
        <h2 className={this.props.alignRight ? 'align-right' : ''}>{this.props.title}</h2>
        <div className="info-part">
          {this.props.leftContent}
        </div>
        <div className="info-part">
          {this.props.rightContent}
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
