import React from 'react'
import { ACTIVE_LINK_SIGN_IN, ACTIVE_LINK_REGISTER } from '../../../constants'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const LogoutUser = ({handleClick, activeLink}) => (
    <Menu.Menu position="right">
        <Menu.Item 
            name={ACTIVE_LINK_SIGN_IN} 
            onClick={handleClick}
            active={activeLink === ACTIVE_LINK_SIGN_IN}
            as={Link} to='/signin'
        />
        <Menu.Item 
            name={ACTIVE_LINK_REGISTER} 
            onClick={handleClick}
            active={activeLink === ACTIVE_LINK_REGISTER}
            as={Link} to='/register'
        />
    </Menu.Menu>
);   
