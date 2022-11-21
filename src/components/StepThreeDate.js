import React, { Component } from 'react'
import profile from './assets/profile.svg'

export class StepThreeDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validMo: true,
      validDay: true,
      validYr: true
    }
  }
  

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  reverse = e => {
    e.preventDefault()
    this.props.prevStep();
  }

  validateMo(e) {  
    const regexp = new RegExp(`^([1-9]|1[012])$`);
    const value = e.target.value;

    if (regexp.test(value)) {
      this.setState({
        validMo: true
      });
    } else {
      this.setState({
        validMo: false
      });
    }
  }

  validateDay(e) {
    const regexp = new RegExp(`^(3[01]|[12][0-9]|[1-9])$`);
    const value = e.target.value;

    if (regexp.test(value)) {
      this.setState({
        validDay:true
      });
    } else {
      this.setState({
        validDay:false
      });
    }
  }

  validateYear(e) {
    const regexp = new RegExp(`^19[89][0-9]|20[0-4][0-9]|2050$`);
    const value = e.target.value;

    if (regexp.test(value)) {
      this.setState({
        validYear: true
      });
    } else {
      this.setState({
        validYear: false
      });
    }
  }

  render() {

    return ( 
      <div className='step-one'>
        <div className='top-bar'>
          <div className='background'>
              <div className='left-button' onClick={this.reverse}>

              </div>
              <div className='right-button' onClick={this.continue}>

              </div>
          </div>
          <div className='profile-wrap'>
              <img src={profile} className='profile' />
          </div>
        </div>
        <h1>What Date?</h1>
        <div className='date-selector'>
          <div className='block'>
            <p>Month</p>
            <input className={ this.state.validMo ? '' : 'invalid' } onChange={(event) => this.validateMo(event)} />
          </div>
          <div className='block'>
            <p>Day</p>
            <input className={ this.state.validDay ? '' : 'invalid' } onChange={(event) => this.validateDay(event)}/>
          </div>
          <div className='block'>
            <p>Year</p>
            <input className={ this.state.validYr ? '' : 'invalid' } onChange={(event) => this.validateYear(event)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default StepThreeDate
