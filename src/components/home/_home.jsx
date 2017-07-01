import React from 'react';
import './home.scss';
import DebbieLogo from './debbie_logo';
import ScrollableHeader from './scrollable_header';
import InfoSection from './info_section';
import DebbieFooter from './debbie_footer';

export default class Home extends React.Component {
  render(){
    return (
      <div>
        <DebbieLogo />
        <ScrollableHeader />
        <InfoSection
          title="Learn to Sing"
          leftContent={
            <img
              alt="signing"
              className="singing"
              src="https://i.ytimg.com/vi/n_ATwl2uvfA/maxresdefault.jpg"
            />
          }
          rightContent={
            <div className="text-block border-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          }
        />
        <InfoSection
          title="Prepare for Auditions"
          leftContent={
            <div className="text-block border-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          }
          rightContent={
            <img
              alt="signing"
              className="singing"
              src="http://www.musicnotesacademy.com/wp-content/uploads/MNA-singing-lessons-600x400.jpg"
            />
          }
          alignRight
        />
        <InfoSection
          title="Have Fun"
          leftContent={
            <img
              alt="signing"
              className="singing"
              src="https://s3-ap-southeast-2.amazonaws.com/cae-wp-user-uploads/app/uploads/2015/10/14034848/PerfArts-Singing_banner.jpg"
            />
          }
          rightContent={
            <div className="text-block border-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          }
        />
        <DebbieFooter />
      </div>
    );
  }
}
