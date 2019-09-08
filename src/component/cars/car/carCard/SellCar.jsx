import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sellCar } from '../../../../actions/userActions'
import { Button, Card } from 'semantic-ui-react'
import { SellCarModal } from './SellCarModal'
import { withRouter } from "react-router-dom"
import { LINK_USER } from '../../../../constants';

class SellCar extends Component {

    state = {
        open: false,
    };

    hadnleOpen = () => this.setState({ open: true })
    
    handleClose = () => this.setState({ open: false })

    handleSubmit = () => {
        const { loggedUser: { id_user }, id_car, sellCar } = this.props;
        sellCar(id_user, id_car,
            () => this.props.history.push(`${LINK_USER.link}/${id_user}`)
        );
    }

    render() {
        const { user, loggedUser } = this.props; 
        if(!loggedUser || !user || user.id_user !== loggedUser.id_user) {
            return null;
        }

        const { open } = this.state;
        return(
            <Card.Content extra>
                <Button 
                    negative 
                    fluid
                    onClick={this.hadnleOpen}
                >
                    Sell car
                </Button>
                <SellCarModal 
                    open={open}
                    handleClose={this.handleClose}
                    hanndleSubmit={this.handleSubmit} 
                />
            </Card.Content>
        );
    }

};

const mapStateToProps = state => ({
    loggedUser: state.auth.user,
});

export default compose(
    connect(mapStateToProps, { sellCar }),
    withRouter   
)(SellCar);