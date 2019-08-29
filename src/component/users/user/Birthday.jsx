import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

const Birthday = ({birthday}) => (
    <Header as='h5'>
        <Header.Content>
        Birthday
        <Header.Subheader>
            <Icon name='birthday' />
            {` ${birthday}`}
        </Header.Subheader>
        </Header.Content>
    </Header>
);

export default Birthday;