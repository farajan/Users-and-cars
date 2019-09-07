import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setActiveLink } from '../../actions/urlActiveLinkActions'
import { connect } from 'react-redux'
import { ACTIVE_LINK_USERS, ACTIVE_LINK_CARS } from '../../constants';
import { RightBarMenu } from './rightBarMenu';

class AppBar extends Component {

  handleItemClick = (e, { name }) => this.props.setActiveLink(name)

  render() {
    const { isAuth, activeLink } = this.props;

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
            <RightBarMenu 
                isAuth={isAuth}
                handleClick={this.handleItemClick} 
                activeLink={activeLink}
            />
        </Menu>
    );
  }
};

const mapStateToProps = state => ({
    activeLink: state.activeLink,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setActiveLink })(AppBar);