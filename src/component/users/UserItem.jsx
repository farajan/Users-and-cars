import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { LINK_USER } from '../../constants';
import CustomImage from '../customUI/CustomImage';

const UserItem = ({user}) => {
    return(
        <List.Item  key={user.id_user} as={Link} name='profile' to={`${LINK_USER.link}/${user.id_user}`}>
            {/* <Image avatar src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/> */}
            <CustomImage sex={user.sex} photo={user.photo} avatar />
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