import React, { Component } from "react"
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCarById } from '../../../actions/carActions'
import { setActiveLink } from '../../../actions/urlActiveLinkActions'
import { ACTIVE_LINK_USERS } from "../../../constants"
import { Link } from 'react-router-dom'
import Loading from "../../Loading";

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

    renderUser = ({user}) => {
        if(!user) {
            return null;
        }

        return (
            <div>
                <Header as='h3'>In possession</Header>
                <Link 
                    to={`/user/${user.id_user}`} 
                    onClick={() => this.props.setActiveLink(ACTIVE_LINK_USERS)}
                >
                    {`${user.firstName} ${user.lastName}`}
                </Link>
            </div>
        );
    }

    render() {
        const car = this.getCar();
        if(!car) {
            return <Loading />;
        }

        const { brand, model, color, horsepower, price, mileage } = car;
        
        return(
            <div>
                <Header as='h2'>{`${brand} - ${model}`}</Header>
                {`Color: ${color}, Horsepower: ${horsepower}HP, Price: ${price}$, Mileage: ${mileage}km`}
                {this.renderUser(car)}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    carList: state.car
});

export default connect(mapStateToProps, { fetchCarById, setActiveLink })(Car);