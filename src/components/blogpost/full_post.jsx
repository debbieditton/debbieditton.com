import React from 'react';

export default class FullPost extends React.Component {
  render() {
    console.log(this.props.post.getReactComponent);
    return  (
      <div className="post">
        <h2>{this.props.post.title}</h2>
        {this.props.post.getReactComponent()}
      </div>
    );
  }
}