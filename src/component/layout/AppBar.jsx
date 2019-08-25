import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setActiveLink } from '../../actions/urlActiveLinkActions'
import { connect } from 'react-redux'
import { ACTIVE_LINK_USERS, ACTIVE_LINK_CARS, ACTIVE_LINK_SIGN_IN, ACTIVE_LINK_REGISTER } from '../../constants';

class AppBar extends Component {

  handleItemClick = (e, { name }) => this.props.setActiveLink(name)

  render() {
    const { activeLink } = this.props;

    return (
        <Menu inverted size="tiny">
            <Menu.Item>
                <Icon bordered inverted color="black" name="car"/> 
            </Menu.Item>
            <Menu.Item 
                name={ACTIVE_LINK_USERS} 
                active={activeLink === ACTIVE_LINK_USERS} 
                onClick={this.handleItemClick}
                as={Link} to='/users'
            />
            <Menu.Item
                name={ACTIVE_LINK_CARS}
                active={activeLink === ACTIVE_LINK_CARS}
                onClick={this.handleItemClick}
                as={Link} to='/cars'
            />
            <Menu.Menu position="right">
                <Menu.Item 
                    name={ACTIVE_LINK_SIGN_IN} 
                    onClick={this.handleItemClick}
                    active={activeLink === ACTIVE_LINK_SIGN_IN}
                    as={Link} to='/signin'
                />
                <Menu.Item 
                    name={ACTIVE_LINK_REGISTER} 
                    onClick={this.handleItemClick}
                    active={activeLink === ACTIVE_LINK_REGISTER}
                    as={Link} to='/register'
                />
            </Menu.Menu>
        </Menu>
    );
  }
};

const mapStateToProps = state => ({
    activeLink: state.activeLink,
});

export default connect(mapStateToProps, { setActiveLink })(AppBar);