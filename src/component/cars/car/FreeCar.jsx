import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { formatLongNumber } from '../../../utils'

export const FreeCar = ({price, buyCar, id_user, id_car}) => (
    <Card fluid className="free car">
      <Card.Content>
        <Card.Header>This car is accessible</Card.Header>
        <Card.Description>
          You can buy this car for <strong>{`${formatLongNumber(price)}$`}</strong>.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Button positive fluid onClick={() => buyCar(id_user, id_car)}>
            Buy
          </Button>
      </Card.Content>
    </Card>
);