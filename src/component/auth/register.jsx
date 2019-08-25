import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setActiveLink } from '../../actions/urlActiveLinkActions'
import { connect } from 'react-redux'
import { ACTIVE_LINK_SIGN_IN } from '../../constants';

class Register extends Component {
  
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        signature: false,
    };

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value});
    };

    handleClick = () => {
        console.log(`password: ${this.state.firstName}`);
        console.log(`password: ${this.state.lastName}`);
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
        console.log(`password: ${this.state.signature}`);
    };

    validateEmail = () => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    };

    validateForm = () => {
        const { firstName, lastName, password, password2, signature } = this.state;
        return(firstName.length > 1 
            && lastName.length > 1 
            && password.length >= 8 
            && password2.length >= 8 
            && password === password2 
            && signature);
    }

    render() {
        return(
            <Grid textAlign='center' style={{ height: '100vh', marginTop: '10%' }}>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='green' textAlign='center'>
                    <Image src='/logo.png' /> Create your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input 
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        placeholder='First name' 
                        name='firstName'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input 
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        placeholder='Last name'
                        name='lastName'
                        onChange={(e) => this.handleChange(e)} 
                    />
                    <Form.Input 
                        fluid 
                        icon='at' 
                        iconPosition='left' 
                        placeholder='E-mail address' 
                        name='email'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name='password'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Verify password'
                        type='password'
                        name='password2'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' onChange={() => this.setState({signature: !this.state.signature})}/>
                    </Form.Field>
                    <Button 
                        fluid 
                        color='green' 
                        size='large' 
                        disabled={!this.validateForm()}
                        onClick={() => this.handleClick()}
                    >
                            Create an account
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    Alredy registered? <Link to='/signin' onClick={() => this.props.setActiveLink(ACTIVE_LINK_SIGN_IN)}>Sign In</Link>
                </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(null, { setActiveLink })(Register)