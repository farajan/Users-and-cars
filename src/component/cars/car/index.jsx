import React, { Component } from "react"
import { Header, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCarById } from '../../../actions/carActions'
import { setActiveLink } from '../../../actions/urlActiveLinkActions'
import Loading from "../../Loading";
import UserCard from "../../users/user/UserCard";
import CarCard from "./CarCard";

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
                <UserCard user={user} />
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
                        
                        <Grid.Column width={6}>
                            <CarCard car={car}/>
                        </Grid.Column>
                        
                        <Grid.Column width={10}>
                            {this.renderUser(car)}
                        </Grid.Column>
                    
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    carList: state.car
});

export default connect(mapStateToProps, { fetchCarById, setActiveLink })(Car);