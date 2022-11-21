import React, { Component } from 'react'
import profile from './assets/profile.svg'


export class StepOneName extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                    <div className='left-button'>
                    </div>
                    <div className='right-button'  onClick={this.continue}>

                    </div>
                </div>
                <div className='profile-wrap'>
                    <img src={profile} className='profile'  />
                </div>
                </div>
                <h1>What's your name?</h1>
                <input 
                    type="text" 
                    value={values.fullName} 
                    onChange={handleChange('fullName')}
                    onKeyDown={(e) => listenForSubmit(e)}
                />
            </div>
        )
    }
}

export default StepOneName
