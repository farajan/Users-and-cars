import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import _ from "lodash"
import UserItem from './UserItem'

export default class UserList extends Component {

    renderUser = (user) => <UserItem user={user} key={user.id_user}/>

    render() {
        return(
            <List divided celled link selection>
                {_.map(this.props.userList, this.renderUser)}
            </List>
        );
    };
}