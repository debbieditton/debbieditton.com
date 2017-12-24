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
  description: '30 minute lessons can be scheduled weekly or bi-weekly and are taught on a semester basis. Longer lessons can be arranged at $65/hour. New students are accepted when there are openings, not just at the beginning of each semester and drop in lessons can usually be accommodated. Lessons are taught in my home studio in Providence, Utah.'
}, {
  name: 'ACTING/AUDITION COACHING',
  price: '$65 / HR',
  description: 'Are you working on a vocal audition?  Do you need help with your audition monologue or characterization for a show you are working on? Do you want to polish your acting on a vocal piece you are performing?  Schedule a coaching session with me!'
}, {
  name: 'RECORDING SESSION COACHING',
  price: '$70 / HR',
  description: 'I will travel with you to your session and will coach you as you record.  I have experience working with Jay Richards Recording Studio, but will go with you wherever you are doing your recording.  If traveling outside Cache Valley, additional travel costs can be negotiated. Recording sessions are billed by the hour.'
}, {
  name: 'PAGEANT COACHING',
  price: '$65 / HR',
  description: 'Are you participating in a pageant?  Do you need help with your talent? I have worked with many pageant girls and love helping you be prepared to do your very best!'
}, {
  name: 'WORKSHOP COACHING',
  price: '$140 / 90 MIN',
  description: 'Do you need an Audition workshop for your group? A Vocal Health workshop for your cheer squad? A Group Voice Class for a teen or adult group or fun birthday party idea? A team building experience on Finding Your Voice? I have years of experience teaching and motivating groups. Let me come and create a meaningful learning experience for you. If you don’t want a whole workshop, but just need a speaker, call me and we can talk about pricing. '
}, {
  name: 'ENTERTAINMENT',
  price: '$50 / 20 - 30 MIN',
  description: 'Christmas programs, musical theatre programs, mother’s day programs, Patriotic programs, wedding receptions. I would love to come and sing at your event. Contact me for recordings or references.'
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