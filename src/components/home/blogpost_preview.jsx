import React from 'react';
import moment from 'moment';
export default class BlogpostPreview extends React.Component {
  render(){
    return (
      <div className="blog-preview">
        <div className="blog-image">
          <img
            src={this.props.post.image}
          />
        </div>
        <div className="blog-preview-text">
          <h5>{moment(this.props.post.published).format('LL')}</h5>
          <h3>{this.props.post.title}</h3>
          {this.props.post.getReactComponent()}
          <div className="fade">
            <div className="read-more">Read More</div>
          </div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
