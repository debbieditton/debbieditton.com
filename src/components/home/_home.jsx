import React from 'react';
import { connect } from 'react-redux';
import './home.scss';
import DebbieLogo from '../common/debbie_logo';
import ScrollableHeader from '../common/scrollable_header';
import BlogpostPreview from './blogpost_preview';
import DebbieFooter from '../common/debbie_footer';
import request from 'superagent';
import secrets from '../../secrets';
import * as BlogpostActions from '../../actions/blogpost';

const select = ({blogpost}) => ({
  posts: blogpost.posts
});

export class Home extends React.Component {

  componentWillMount() {
    this.fetchPosts().then((res) => {
      this.props.loadPosts(res.body.items);
    });
  }

  async fetchPosts() {
    return await request.get(
      `https://www.googleapis.com/blogger/v3/blogs/7907262339682456800/posts?key=${secrets.apiKey}`
    );
  }

  render(){
    const firstPost = this.props.posts[0];
    if (!firstPost) {
      return <div>Loading...</div>;
    } // assume there is a post

    return (
      <div>
        <DebbieLogo />
        <ScrollableHeader currentPath={this.props.location.pathname}/>
        <div className='main-content'>
          <BlogpostPreview
            post={firstPost}
          />
        </div>
        <DebbieFooter />
      </div>
    );
  }
}

export default connect(select, BlogpostActions)(Home);