import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setActiveLink } from '../../actions/urlActiveLinkActions'
import { connect } from 'react-redux'
import { LINK_USERS, LINK_CARS, LINK_CAR, LINK_USER } from '../../constants';
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
                name={LINK_USERS.name} 
                active={activeLink === LINK_USERS.name || activeLink === LINK_USER.name} 
                onClick={this.handleItemClick}
                as={Link} to={LINK_USERS.link}
            />
            <Menu.Item
                name={LINK_CARS.name}
                active={activeLink === LINK_CARS.name || activeLink === LINK_CAR.name}
                onClick={this.handleItemClick}
                as={Link} to={LINK_CARS.link}
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