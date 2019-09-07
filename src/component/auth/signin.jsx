import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { LINK_REGISTER, ERROR_MESSAGE } from '../../constants'
import { setActiveLink } from '../../actions/urlActiveLinkActions'
import { signIn, fetchLoggedUser } from '../../actions/authActions'
import { connect } from 'react-redux'
import { validateEmail, getSignInBody } from '../../utils'
import CustomMessage from '../customUI/CustomMessage'

class SignIn extends Component {

    state = {
        email: '',
        password: '',
        showError: false,
    };

    handleChange = (e) => this.setState({[e.target.name]: e.target.value});

    handleClick = () => {
        const signInBody = getSignInBody(this.state.email, this.state.password);
        this.props.signIn(signInBody, (success) => {
            if(success) {
                this.props.fetchLoggedUser(() => null);
                this.props.history.push('/');
            } else {
                this.setState({showError: true});
            }
        });
    };

    render() {
        const { email, password } = this.state;
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
                            error={!validateEmail(email) && email.length > 0}
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
                            disabled={password.length < 8 || !validateEmail(email)}
                            onClick={this.handleClick}>
                                Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <Link to={LINK_REGISTER.link} onClick={() => this.props.setActiveLink(LINK_REGISTER.name)}>Sign Up</Link>
                </Message>
                <CustomMessage 
                    messageType={ERROR_MESSAGE} 
                    header="You have entered an invalid username or password."
                    note="Please try it again."
                    visible={this.state.showError} 
                />
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(null, { setActiveLink, signIn, fetchLoggedUser })(SignIn)