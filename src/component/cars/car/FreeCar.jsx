import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { formatLongNumber } from '../../../utils'
import { LINK_SIGN_IN, LINK_REGISTER } from '../../../constants'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setActiveLink } from '../../../actions/urlActiveLinkActions'
import { BuyCarModal } from './BuyCarModal';

class FreeCar extends Component {

    state = {
        open: false,
    };

    render() {
        const { price, setActiveLink, isAuth, buyCar, id_car, loggedUser: { id_user } } = this.props;
        return (
            isAuth ? 
                <Card fluid className="free car">
                <Card.Content>
                    <Card.Header>This car is accessible</Card.Header>
                    <Card.Description>
                    You can buy this car for <strong>{`${formatLongNumber(price)}$`}</strong>.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button positive fluid onClick={() => this.setState({ open: true })}>
                        Buy
                    </Button>
                    <BuyCarModal 
                        open={this.state.open} 
                        handleClose={() => this.setState({ open: false })}
                        hanndleSubmit={() => buyCar(id_user, id_car)}
                    />
                </Card.Content>
                </Card>
            :
                <Card fluid className="free car">
                <Card.Content>
                    <Card.Header>This car is accessible</Card.Header>
                    <Card.Description>
                    You can <strong>sign in</strong> or <strong>register</strong> and buy this car for <strong>{`${formatLongNumber(price)}$`}</strong>.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group fluid>
                        <Button as={Link} to={LINK_SIGN_IN.link} onClick={() => setActiveLink(LINK_SIGN_IN.name)}>Sign in</Button>
                            <Button.Or />
                        <Button positive as={Link} to={LINK_REGISTER.link} onClick={() => setActiveLink(LINK_REGISTER.name)}>Register</Button>
                    </Button.Group>
                </Card.Content>
                </Card>
        )
    }
};

const mapStateToProps = state => ({
    loggedUser: state.auth.user,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setActiveLink })(FreeCar);