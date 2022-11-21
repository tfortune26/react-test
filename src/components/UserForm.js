import React, { Component } from 'react'
import Header from './Header';
import StepOneName from './StepOneName';
import StepTwoOptions from './StepTwoOptions';
import StepThreeDate from './StepThreeDate';

export class UserForm extends Component {
    state = {
        step: 1,
        fullName: '',
        options: [],
        day: '',
        month: '',
        year: '',
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        if (step <= 2) {
            this.setState({
                step: step + 1
            })
        }
    }

    //return to previous step
    prevStep = () => {
        const { step } = this.state;
        if (step > 1 ) {
            this.setState({
                step: step - 1
            })
        }
    }

    isCurStep(val) {
        const { step } = this.state;
        if(step === val) {
            return true;
        }
        else {
            return false
        }
    }

    setStep(val) {
        const { step } = this.state;

        this.setState({
            step: val
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { fullName, options, day, month, year } = this.state;
        const values = { fullName, options, day, month, year };

        switch(step) {
            case 1:
                return (
                    <div className='container'>
                        <Header />
                        <StepOneName
                            nextStep = {this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <div className='footer'>
                            <div className={this.isCurStep(1) ? 'active' : ''} onClick={() => this.setStep(1)}></div>
                            <div onClick={() => this.setStep(2)}></div>
                            <div onClick={() => this.setStep(3)}></div>
                        </div>
                    </div>   
                )
            case 2: 
                return (
                    <div className='container'>
                        <Header />
                        <StepTwoOptions
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <div className='footer'>
                            <div onClick={() => this.setStep(1)}></div>
                            <div className={this.isCurStep(2) ? 'active' : ''}  onClick={() => this.setStep(2)}></div>
                            <div onClick={() => this.setStep(3)}></div>
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className='container'>
                        <Header />
                        <StepThreeDate
                            prevStep = {this.prevStep}
                            nextStep = {this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <div className='footer'>
                            <div onClick={() => this.setStep(1)}></div>
                            <div onClick={() => this.setStep(2)}></div>
                            <div className={this.isCurStep(3) ? 'active' : ''} onClick={() => this.setStep(3)}></div>
                        </div>
                    </div>
                )
        }
    }
}

export default UserForm
