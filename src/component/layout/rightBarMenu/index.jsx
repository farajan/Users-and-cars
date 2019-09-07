import React from 'react'
import LoggedUser from './LoggedUser';
import { LogoutUser } from './LogoutUser';

export const RightBarMenu = ({isAuth, handleClick, activeLink}) => 
    isAuth ? <LoggedUser handleClick={handleClick} /> : <LogoutUser handleClick={handleClick} activeLink={activeLink} />;
