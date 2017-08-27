import React from 'react';
import _ from 'lodash';
import DebbieLogo from '../common/debbie_logo';
import ScrollableHeader from '../common/scrollable_header';
import DebbieFooter from '../common/debbie_footer';
import './services.scss';
import Service from './service';

const services =  [{
  name: 'VOCAL COACHING',
  price: '$35/30 MIN SESSION',
  description: 'I am some information about vocal coaching. This needs to be a little longer. Or maybe just a brief paragraph.'
}, {
  name: 'AUDITION TRAINING',
  price: '$35/30 MIN SESSION',
  description: 'I am some information about vocal coaching. This needs to be a little longer. Or maybe just a brief paragraph.'
}, {
  name: 'SOME OTHER SERVICE',
  price: '$35/30 MIN SESSION',
  description: 'I am some information about vocal coaching. This needs to be a little longer. Or maybe just a brief paragraph.'
}]

export default class Services extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render(){
    return (
      <div>
        <DebbieLogo />
        <ScrollableHeader currentPath={this.props.location.pathname}/>
        <div className='main-content'>
          {_.map(services, s => <Service service={s} />)}
        </div>
        <DebbieFooter />
      </div>
    );
  }
}