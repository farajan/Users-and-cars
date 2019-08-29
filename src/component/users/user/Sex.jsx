import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

const Sex = ({sex}) => (
    <Header as='h5'>
        <Header.Content>
        Sex
        <Header.Subheader>
            <Icon name={sex==='Male' ? 'male' : 'female'} />
            {` ${sex}`}
        </Header.Subheader>
        </Header.Content>
    </Header>
);

export default Sex;