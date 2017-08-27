import React from 'react';
import logo from '../../ddlogo.png';
import './common.scss';
export default class DebbieLogo extends React.Component {
  render() {
    return (
      <img className="dd-logo" src={logo} /> 
    )
  }
}
