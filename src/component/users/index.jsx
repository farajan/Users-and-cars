import React, { Component } from "react"
import { fetchAllUsers } from "../../actions/userActions"
import { connect } from 'react-redux'
import _ from "lodash"

class Users extends Component {

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    renderUser = (user) => {
        return(
            <div key={user.id_user}>
                {`first name: ${user.firstName}`}
            </div>
        );
    };
    
    render() {
        return(
            _.map(this.props.userList, this.renderUser)
        );
    }
};

const mapStateToProps = state => ({
    userList: state.user,
});


export default connect(mapStateToProps, { fetchAllUsers })(Users);