import React from 'react';
import DebbieLogo from '../common/debbie_logo';
import ScrollableHeader from '../common/scrollable_header';
import DebbieFooter from '../common/debbie_footer';

export default class Contact extends React.Component {

  render(){
    return (
      <div>
        <DebbieLogo />
        <ScrollableHeader currentPath={this.props.location.pathname}/>
        <div className='main-content'>
          <h1>Stay tooned, more to come!</h1>
        </div>
        <DebbieFooter />
      </div>
    );
  }
}