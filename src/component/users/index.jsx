import React, { Component } from "react"
import { Header } from 'semantic-ui-react'
import UserList from "./UserList"
import { fetchAllUsers } from "../../actions/userActions"
import { connect } from 'react-redux'

class Users extends Component {

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        return(
            <div>
                <Header as='h2'>Registered users</Header>
                <UserList userList={this.props.userList}/>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    userList: state.user,
});

export default connect(mapStateToProps, { fetchAllUsers })(Users);