import React, { Component } from "react"
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchUserById } from '../../../actions/userActions'
import CarList from "../../cars/CarList"

class User extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchUserById(id);
    }

    render() {
        const { firstName, lastName, cars } = this.props.user;

        return(
            <div>
                <Header as='h2'>{`${firstName} ${lastName}`}</Header>
                
        
                <Header as='h3'>{`${firstName}'s cars`}</Header>
                <CarList carList={cars} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, { fetchUserById })(User);