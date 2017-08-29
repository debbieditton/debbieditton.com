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
              DEBBIE IS REALLY GREAT
            </div>
            <div style={{clear: 'both'}} />
          </div>
        </div>
        <DebbieFooter />
      </div>
    );
  }
}