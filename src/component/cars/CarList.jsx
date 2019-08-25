import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import _ from "lodash"
import CarItem from './CarItem'

export default class CarList extends Component {

    renderCar = (car) => {
        return(
            <CarItem car={car} key={car.id_car}/>
        );
    };
    
    render() {
        return(
            <List divided celled link selection>
                {_.map(this.props.carList, this.renderCar)}
            </List>
        );
    };
}