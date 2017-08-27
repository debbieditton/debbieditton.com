import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './blogpost.scss';
import DebbieLogo from '../common/debbie_logo';
import ScrollableHeader from '../common/scrollable_header';
import DebbieFooter from '../common/debbie_footer';
import request from 'superagent';
import secrets from '../../secrets';
import * as BlogpostActions from '../../actions/blogpost';
import FullPost from './full_post';

const select = ({blogpost}) => ({
  posts: blogpost.posts
});

export class Blogpost extends React.Component {

  componentWillMount() {
    if (!this.props.posts || !this.props.posts.length) {
      this.fetchPosts().then((res) => {
        this.props.loadPosts(res.body.items);
      });
    }
  }

  async fetchPosts() {
    return await request.get(
      `https://www.googleapis.com/blogger/v3/blogs/7907262339682456800/posts?key=${secrets.apiKey}`
    );
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render(){
    const post = _.find(this.props.posts, p => p.id === this.props.params.id);
    if (!post) {
      return <div>Loading...</div>;
    } // assume there is a post

    return (
      <div>
        <DebbieLogo />
        <ScrollableHeader currentPath={this.props.location.pathname}/>
        <div className='main-content'>
          <FullPost post={post} />
        </div>
        <DebbieFooter />
      </div>
    );
  }
}

export default connect(select, BlogpostActions)(Blogpost);