import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserItem = ({user}) => {
    return(
        <List.Item  key={user.id_user} as={Link} name='profile' to={`/user/${user.id_user}`}>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/>
            <List.Content>
                <List.Header>{`${user.firstName} ${user.lastName}`}</List.Header>
                {user.email}
            </List.Content>
            <List.Content floated='right'>
                {`Cars: ${user.cars.length}`}
            </List.Content>
        </List.Item>
    );
}

export default UserItem;