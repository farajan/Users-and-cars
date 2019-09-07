import React, { Component } from 'react'
import { Step } from 'semantic-ui-react'
import RegisterForm from './RegisterForm';
import CompleteProfil from './completeProfil';

class Register extends Component {

    state = {
        active: [ true, false ],
    }

    nextStep = () => {
        this.setState({ active: [ false, true ] });
    };

    render() {
        const { active } = this.state;
        const content = active[0] ? <RegisterForm nextStep={this.nextStep}/> : <CompleteProfil />
        return (
            <div>
                <center>
                    <Step.Group ordered>
                        <Step active={active[0]} completed={active[1]}>
                        <Step.Content>
                            <Step.Title>Register</Step.Title>
                            <Step.Description>Create your account</Step.Description>
                        </Step.Content>
                        </Step>

                        <Step active={active[1]}>
                        <Step.Content>
                            <Step.Title>Complete profile</Step.Title>
                            <Step.Description>Add aditional informations</Step.Description>
                        </Step.Content>
                        </Step>
                    </Step.Group>
                </center>
                {content}
            </div>
        );
    }
}

export default Register;