import React from 'react'
import { Icon, Header } from 'semantic-ui-react'
import { capitalizeFirstLetter } from '../../../utils';

const Sex = ({sex}) => (
    sex ?
    <Header as='h5'>
        <Header.Content>
        Sex
        <Header.Subheader>
            <Icon name={sex.toLowerCase()} />
            {` ${capitalizeFirstLetter(sex)}`}
        </Header.Subheader>
        </Header.Content>
    </Header>
    : null
);

export default Sex;