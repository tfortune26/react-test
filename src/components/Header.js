import React, { Component } from 'react'
import logo from './assets/acme-1.svg'



export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='burger-wrap'>
          <div className='burger-menu'></div>
        </div>
        <div className='logo-wrap'>  
          <img src={logo} className='logo'/>
        </div>
      </div>
    )
  }
}

export default Header
