import React from 'react'
import { Icon, Header } from 'semantic-ui-react'
import { formatLongNumber, capitalizeFirstLetter } from '../../../../utils'

const Parameters = ({horsepower, mileage, color}) => (
    <Header as='h5'>
        <Icon name='whmcs' />
        <Header.Content>
            Parameters
            <Header.Subheader>
                {`Power: ${horsepower} HP`}
                <br />
                {`Mileage: ${formatLongNumber(mileage)} Km`}
                <br />
                {`Color: ${capitalizeFirstLetter(color)}`}
            </Header.Subheader>
        </Header.Content>
    </Header>
);
export default Parameters;