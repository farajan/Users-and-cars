import React from 'react'
import { Card, Image, Header, Icon } from 'semantic-ui-react'
import Price from './Price';
import Parameters from './Parameters';

const CarCard = ({car}) => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content header={car.brand} />

    <Card.Content>
        <Card.Meta>
            <Parameters horsepower={car.horsepower} mileage={car.mileage} color={car.color} />
            <Price price={car.price} />
        </Card.Meta>
    </Card.Content>
  </Card>
);

export default CarCard;