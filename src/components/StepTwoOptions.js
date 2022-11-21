import React, { Component } from 'react'
import profile from './assets/profile.svg'
import CheckBox from './utils/checkbox';

export class StepTwoOptions extends Component {s
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  reverse = e => {
    e.preventDefault()
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    const listenForSubmit=(event)=> {
        if (event.keyCode === 13) {
            this.continue(event);
        }
    }

    return (
    <div className='step-one'>
      <div className='top-bar'>
        <div className='background'>
            <div className='left-button' onClick={this.reverse}>
              
            </div>
            <div className='right-button'  onClick={this.continue}>

            </div>
        </div>
        <div className='profile-wrap'>
            <img src={profile} className='profile'  />
        </div>
      </div>
      <h1>What do you need help with?</h1>
      <CheckBox 
        id="1"
        label="Option A"
      />
      <CheckBox 
        id="2"
        label="Option B"
      />
      <CheckBox 
        id="3"
        label="Option C"
      />
      <CheckBox 
        id="4"
        label="Option D"
      />
      
  </div>
    )
  }
}

export default StepTwoOptions
