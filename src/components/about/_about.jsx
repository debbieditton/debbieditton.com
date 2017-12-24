import React from 'react';
import DebbieLogo from '../common/debbie_logo';
import ScrollableHeader from '../common/scrollable_header';
import DebbieFooter from '../common/debbie_footer';
import pic from '../../dd.jpg';
import './about.scss'

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render(){
    return (
      <div>
        <DebbieLogo />
        <ScrollableHeader currentPath={this.props.location.pathname}/>
        <div className='main-content'>
          <div className="pad">
            <div className="pic">
              <img src={pic} />
            </div>
            <div className="bio">
              <div>Thank you for visiting my website.  I love to teach - anything. I especially love to teach others how to use their voices to share their joys and passions in a meaningful way.  Singing is such a powerful way to communicate and connect.  Healthy vocal production is the foundation to singing with freedom and confidence.  I love facilitating discoveries in my students and celebrating alongside them as they overcome fears and perform with joy.</div>
              <br/>
              <div>I have been loving my work for 26 years and will for many years to come!  I graduated from Brigham Young University with my Bachelor of Fine Arts in Music Dance Theatre.  I was privileged to work with Randy Boothe and Jan Sullivan as the Music Dance Theatre program at BYU was in its early years - in fact, I was the first “official” graduate.  I travelled a season with the Young Ambassadors and couldn’t believe how much I loved my education.  Since then, I have performed, vocal directed and directed numerous shows with The Celebrate America Show, Cache Theatre Company, Pickleville Playhouse and most recently with Music Theatre West. My favorite roles have been Ado Annie in “Oklahoma”, Muzzy in “Crazy For You”, Mrs. Fairfax in “Jane Eyre”, Mrs. Pearce in “My Fair Lady” and Mrs. Potts in “Beauty and the Beast”.</div>
              <br/>
              <div>I am continually amazed by the talents of my students and the performers that I am blessed to work with in Cache Valley.</div>
              <br/>
              <div>Of course, I would not be able to do any of this without the support of my wonderful husband and my four amazing children. A special thanks to Madi Ditton - one of my fabulous daughters in law - for her website design and to Joseph- my oldest son - for its development.</div>
            </div>
            <div style={{clear: 'both'}} />
          </div>
        </div>
        <DebbieFooter />
      </div>
    );
  }
}