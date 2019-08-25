import React, { Component } from "react"
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCarById } from '../../../actions/carActions'

class Car extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        if(!this.props.carList || !this.props.carList[id]) {
            this.props.fetchCarById(id);
        }
    }

    getCar = () => {
        const {id} = this.props.match.params;
        return this.props.carList ? this.props.carList[id] : null;
    }

    render() {
        const car = this.getCar();
        if(!car) {
            return '<Loading />';
        }

        const { brand, model, color, horsepower, price, mileage, user } = car;

        return(
            <div>
                <Header as='h2'>{`${brand} - ${model}`}</Header>

                <Header as='h3'>In possession</Header>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    carList: state.car
});

export default connect(mapStateToProps, { fetchCarById })(Car);