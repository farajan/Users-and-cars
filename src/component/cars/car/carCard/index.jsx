import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Price from './Price';
import Parameters from './Parameters';
import SellCar from './SellCar';

const CarCard = ({car}) => (
  <Card fluid>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content header={`Brand: ${car.brand}`} description={`Model: ${car.model}`}/>

    <Card.Content>
        <Card.Meta>
            <Parameters horsepower={car.horsepower} mileage={car.mileage} color={car.color} />
            <Price price={car.price} />
        </Card.Meta>
    </Card.Content>

    <SellCar id_car={car.id_car} user={car.user} />
  </Card>
);

export default CarCard;