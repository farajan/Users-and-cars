import React, { Component } from "react"
import { Header, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCarById } from '../../../actions/carActions'
import { countCars, buyCar } from '../../../actions/userActions'
import { setActiveLink } from '../../../actions/urlActiveLinkActions'
import Loading from "../../customUI/Loading";
import UserCard from "../../users/user/UserCard";
import CarCard from "./CarCard";
import FreeCar from "./FreeCar";

class Car extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        if(!this.props.carList || !this.props.carList[id]) {
            this.props.fetchCarById(id);
        }

        if(!this.props.carCount) {
            this.props.countCars(id);
        }
    }

    getCar = () => {
        const {id} = this.props.match.params;
        return this.props.carList ? this.props.carList[id] : null;
    }

    buyCar = (id_user, id_car) => this.props.buyCar(id_user, id_car)

    renderUser = ({user, price, id_car}) => {
        if(!user) {
            return  <FreeCar 
                        price={price} 
                        id_car={id_car} 
                        buyCar={this.buyCar}
                    />;
        }

        return (
            <div>
                <Header as='h3'>In possession</Header>
                <UserCard 
                    user={user} 
                    carCount={this.props.carCount} 
                    setActiveLink={this.props.setActiveLink}
                />
            </div>
        );
    }

    render() {
        const car = this.getCar();
        if(!car) {
            return <Loading />;
        }

        return(
            <div>
                <Header as='h2'>{`${car.brand} - ${car.model}`}</Header>
                <Grid>
                    <Grid.Row columns={2}>
                        
                        <Grid.Column  className="car card">
                            <CarCard car={car} />
                        </Grid.Column>
                        
                        <Grid.Column>
                            {this.renderUser(car)}
                        </Grid.Column>
                    
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    carList: state.car,
    carCount: state.user.carCount,
});

export default connect(mapStateToProps, { fetchCarById, setActiveLink, countCars, buyCar })(Car);