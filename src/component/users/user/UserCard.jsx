import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Contact from './Contact'
import Birthday from './Birthday'
import Sex from './Sex'
import ExtraContent from './ExtraContent'
import { Link } from 'react-router-dom'
import { LINK_USER } from '../../../constants'
import CustomImage from '../../customUI/CustomImage'

const UserCard = ({user, carCount, setActiveLink}) => (
  <Card fluid>

    <CustomImage sex={user.sex} photo={user.photo} wrapped ui/>
    
    <Card.Content 
      header={`${user.firstName} ${user.lastName}`} 
      as={Link} to={`${LINK_USER.link}/${user.id_user}`}
      onClick={() => setActiveLink ? setActiveLink(LINK_USER.name) : null}
    />

    <Card.Content>
      <Card.Meta>
        <Contact phone={user.phone} email={user.email}/>
        <Birthday birthday={user.birthday} />
        <Sex sex={user.sex}/>
      </Card.Meta>
    </Card.Content>

    <Card.Content extra>
        <ExtraContent carCount={carCount} />
    </Card.Content>

  </Card>
);

export default UserCard;