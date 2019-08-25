import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const CarItem = ({car}) => {
    return(
        <List.Item  key={car.id_car} as={Link} name='profile' to={`/car/${car.id_car}`}>
            <Image avatar src='/images/avatar/small/helen.jpg'/>
            <List.Content>
                <List.Header>{car.brand}</List.Header>
                {car.model}
            </List.Content>
        </List.Item>
    );
}

export default CarItem;