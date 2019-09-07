import React from 'react'
import { LINK_SIGN_IN, LINK_REGISTER } from '../../../constants'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const LogoutUser = ({handleClick, activeLink}) => (
    <Menu.Menu position="right">
        <Menu.Item 
            name={LINK_SIGN_IN.name} 
            onClick={handleClick}
            active={activeLink === LINK_SIGN_IN.name}
            as={Link} to={LINK_SIGN_IN.link}
        />
        <Menu.Item 
            name={LINK_REGISTER.name} 
            onClick={handleClick}
            active={activeLink === LINK_REGISTER.name}
            as={Link} to={LINK_REGISTER.link}
        />
    </Menu.Menu>
);   
