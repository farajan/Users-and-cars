import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { LINK_CAR } from '../../constants'
import { setActiveLink } from '../../actions/urlActiveLinkActions'
import { connect } from 'react-redux'

const CarItem = ({car, setActiveLink, displayFreeOrTaken}) => {

    const rightContent = displayFreeOrTaken ?
        <List.Content floated='right' className={`car ${car.user ? 'red' : 'green'} right content`}>
            {car.user ? 'Taken' : 'Free'}
        </List.Content> : null;

    return(
        <List.Item 
            key={car.id_car} 
            as={Link} name='profile' 
            to={`${LINK_CAR.link}/${car.id_car}`} 
            onClick={() => setActiveLink(LINK_CAR.name)}
        >
            <Image avatar src='/images/avatar/small/helen.jpg'/>
            <List.Content>
                <List.Header>{car.brand}</List.Header>
                {car.model}
            </List.Content>
                {rightContent}
        </List.Item>
    );
}

export default connect(null, { setActiveLink })(CarItem);