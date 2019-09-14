import React from 'react'
import { Icon, Header } from 'semantic-ui-react'
import { formatDate } from '../../../utils';

const Birthday = ({birthday}) => (
    birthday ?
    <Header as='h5'>
        <Header.Content>
        Birthday
        <Header.Subheader>
            <Icon name='birthday' />
            {` ${formatDate(birthday)}`}
        </Header.Subheader>
        </Header.Content>
    </Header>
    : null
);


export default Birthday;