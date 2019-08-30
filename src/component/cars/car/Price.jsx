import React from 'react'
import { Icon, Header } from 'semantic-ui-react'
import { formatLongNumber } from '../../../utils'

const Price = ({price}) => (
    <Header as='h5'>
        <Icon name='dollar' />
        <Header.Content>
            Price
            <Header.Subheader>
                {`${formatLongNumber(price)}$`}
            </Header.Subheader>
        </Header.Content>
    </Header>
);

export default Price;