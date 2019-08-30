import React, { Component } from "react"
import { Header, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchUserById } from '../../../actions/userActions'
import UserCard from "./UserCard";
import UsersCars from "./UsersCars";
import Loading from "../../Loading";

class User extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        if(!this.props.userList || !this.props.userList[id]) {
            this.props.fetchUserById(id);
        }
    }

    getUser = () => {
        const {id} = this.props.match.params;
        return this.props.userList ? this.props.userList[id] : null;
    }

    render() {
        const user = this.getUser();
        if(!user) {
            return <Loading />;
        }

        const { firstName, cars } = user;
        return(
            <div>
                <Header as='h2'>User profile</Header>
                <Grid columns='equal'>
                    <Grid.Row columns={2}>
                       
                        <Grid.Column width={6}>
                            <UserCard user={user} carCount={cars.length}/>
                        </Grid.Column>
                       
                        <Grid.Column width={10}>
                            <UsersCars firstName={firstName} cars={cars} />
                        </Grid.Column>
                    
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    userList: state.user.userList
});

export default connect(mapStateToProps, { fetchUserById })(User);