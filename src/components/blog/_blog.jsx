import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../home/home.scss';
import './blog.scss';
import DebbieLogo from '../common/debbie_logo';
import ScrollableHeader from '../common/scrollable_header';
import BlogpostPreview from '../home/blogpost_preview';
import DebbieFooter from '../common/debbie_footer';
import request from 'superagent';
import secrets from '../../secrets';
import * as BlogpostActions from '../../actions/blogpost';

const select = ({blogpost}) => ({
  posts: blogpost.posts
});

export class Blog extends React.Component {

  componentWillMount() {
    this.fetchPosts().then((res) => {
      this.props.loadPosts(res.body.items);
    });
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  async fetchPosts() {
    return await request.get(
      `https://www.googleapis.com/blogger/v3/blogs/7907262339682456800/posts?key=${secrets.apiKey}`
    );
  }

  render(){
    const previews = _.map(this.props.posts, post => (
      <BlogpostPreview post={post} />
    ));

    return (
      <div>
        <DebbieLogo />
        <ScrollableHeader currentPath={this.props.location.pathname}/>
        <div className='main-content'>
          <h2 className='main-header'>POSTS</h2>
          {previews}
        </div>
        <DebbieFooter />
      </div>
    );
  }
}

export default connect(select, BlogpostActions)(Blog);