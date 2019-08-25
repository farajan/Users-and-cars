import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ACTIVE_LINK_REGISTER } from '../../constants'
import { setActiveLink } from '../../actions/urlActiveLinkActions'
import { connect } from 'react-redux'

class SignIn extends Component {

    state = {
        email: '',
        password: '',
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleClick = () => {
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
    };

    validateEmail = () => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    };

    render() {
        const { password } = this.state;
        return(
            <Grid textAlign='center' style={{ height: '100vh', marginTop: '10%' }} >
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='green' textAlign='center'>
                    <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address' 
                            name='email'
                            error={!this.validateEmail() && this.state.email.length > 0}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name='password'
                            error={password.length < 8 && password.length > 0}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <Button 
                            fluid
                            color='green' 
                            size='large' 
                            disabled={password.length < 8 || !this.validateEmail()}
                            onClick={() => this.handleClick()}>
                                Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <Link to='/register' onClick={() => this.props.setActiveLink(ACTIVE_LINK_REGISTER)}>Sign Up</Link>
                </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(null, { setActiveLink })(SignIn)