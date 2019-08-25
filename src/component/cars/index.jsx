import React, { Component } from "react"
import { Header } from 'semantic-ui-react'
import CarList from "./CarList"
import { fetchAllCars } from "../../actions/carActions"
import { connect } from 'react-redux'
import _ from 'lodash'

class Cars extends Component {
   
    componentDidMount() {
        if(_.isEmpty(this.props.carList)) {
            this.props.fetchAllCars();
        }
    }

    render() {
        return(
            <div>
                <Header as='h2'>Cars in database</Header>
                <CarList carList={this.props.carList}/>
           </div>
        );
    }
};

const mapStateToProps = state => ({
    carList: state.car,
});

export default connect(mapStateToProps, { fetchAllCars })(Cars);