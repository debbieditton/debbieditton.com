import React from 'react';

export default class ScrollableHeader extends React.Component {
  constructor(){
    super();
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      fixed: false
    };
  }

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
          [EVENTS] [BLOG] [ABOUT] [CONTACT]
        </div>
      </div>
    );
  }
}
