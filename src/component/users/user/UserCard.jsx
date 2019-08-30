import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Contact from './Contact'
import Birthday from './Birthday'
import Sex from './Sex'
import ExtraContent from './ExtraContent'
import { Link } from 'react-router-dom'

const UserCard = ({user, carCount}) => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content header={`${user.firstName} ${user.lastName}`} as={Link} to={`/user/${user.id_user}`}/>

    <Card.Content>
      <Card.Meta>
        <Contact phone={'+420 7775 216 775'} email={user.email}/>
        <Birthday birthday={user.birthday} />
        <Sex sex={'Male'}/>
      </Card.Meta>
    </Card.Content>

    <Card.Content extra>
        <ExtraContent carCount={carCount} />
    </Card.Content>

  </Card>
);

export default UserCard;