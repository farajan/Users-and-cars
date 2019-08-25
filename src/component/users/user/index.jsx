import React, { Component } from "react"
import CarList from "../../cars/CarList"
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchUserById } from '../../../actions/userActions'

class User extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        if(!this.props.userList || !this.props.userList[id]) {
            this.props.fetchUserById(id);
        }
    }

    getUser = () => {
        const {id} = this.props.match.params;
        return this.props.userList ? this.props.userList[id] : null;
    }

    render() {
        const user = this.getUser();
        if(!user) {
            return '<Loading />';
        }

        const { firstName, lastName, cars } = user;
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
    userList: state.user
});

export default connect(mapStateToProps, { fetchUserById })(User);