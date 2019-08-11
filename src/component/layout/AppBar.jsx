import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class AppBar extends Component {
  state = { activeItem: 'users' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu inverted size="tiny">
            <Menu.Item>
                <Icon bordered inverted color="black" name="car"/> 
            </Menu.Item>
            <Menu.Item 
                name='Users' 
                active={activeItem === 'Users'} 
                onClick={this.handleItemClick}
                as={Link} to='/users'
            />
            <Menu.Item
                name='Cars'
                active={activeItem === 'Cars'}
                onClick={this.handleItemClick}
                as={Link} to='/cars'
            />
            <Menu.Menu position="right">
                <Menu.Item 
                    name="Sign in" 
                    onClick={this.handleItemClick}
                    active={activeItem === 'Sign in'}
                    as={Link} to='/signin'
                />
                <Menu.Item 
                    name="Register" 
                    onClick={this.handleItemClick}
                    active={activeItem === 'Register'}
                    as={Link} to='/register'
                />
            </Menu.Menu>
        </Menu>
    )
  }
}