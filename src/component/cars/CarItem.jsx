import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ACTIVE_LINK_CARS } from '../../constants'
import { setActiveLink } from '../../actions/urlActiveLinkActions'
import { connect } from 'react-redux'

const CarItem = ({car, setActiveLink}) => {
    return(
        <List.Item 
            key={car.id_car} 
            as={Link} name='profile' 
            to={`/car/${car.id_car}`} 
            onClick={() => setActiveLink(ACTIVE_LINK_CARS)}
        >
            <Image avatar src='/images/avatar/small/helen.jpg'/>
            <List.Content>
                <List.Header>{car.brand}</List.Header>
                {car.model}
            </List.Content>
            <List.Content floated='right'>
                {car.user ? 'Taken' : 'Free'}
            </List.Content>
        </List.Item>
    );
}

export default connect(null, { setActiveLink })(CarItem);