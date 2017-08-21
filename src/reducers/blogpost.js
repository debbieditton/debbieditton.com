import _ from 'lodash';
import BlogPost from '../libs/blogpost';
const initialState = {
  posts: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      const posts = []
      _.each(action.posts, post => posts.push(new BlogPost(post)));
      return {...state, posts};
    default:
      return state;
  }
}