import React from 'react';
import HeaderItem from './header_item';
import _ from 'lodash';
import { hashHistory } from 'react-router';
import './common.scss';
export default class ScrollableHeader extends React.Component {
  constructor(){
    super();
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      fixed: false
    };
  }

  items = [
    {text: 'HOME', to: '/'},
    {text: 'DEBBIE', to: '/about'},
    {text: 'SERVICES', to: '/services'},
    {text: 'BLOG', to: '/blog'},
    // {text: 'CONTACT', to: '/contact'}
  ]

  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll(){
    if(!this.state.fixed && document.body.scrollTop > this.header.offsetTop){
      this.setState({ fixed: true });
    } else if(this.state.fixed && document.body.scrollTop <= this.placeholder.offsetTop){
      this.setState({ fixed: false });
    }
  }

  render(){
    return (
      <div ref={el => this.placeholder = el} className={this.state.fixed ? 'placeholder' : ''}>
        <div className={`scrollable-header ${this.state.fixed ? 'fixed' : ''}`} ref={el => this.header = el}>
          { _.map(this.items, item => (
              <HeaderItem
                key={item.text}
                text={item.text}
                selected={this.props.currentPath === item.to}
                onClick={() => hashHistory.push(item.to)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
