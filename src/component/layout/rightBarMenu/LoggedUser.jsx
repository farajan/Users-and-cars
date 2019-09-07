import React, { Component } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../actions/authActions'
import { setActiveLink } from '../../../actions/urlActiveLinkActions'
import { LINK_SETTINGS, LINK_USER } from '../../../constants'

class LoggedUser extends Component {

    render() {
        const { signOut, user: { id_user, firstName, lastName}, setActiveLink, activeLink } = this.props;
        const trigger = (
            <span>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /> {`${firstName} ${lastName}`}
            </span>
        )

        return (
            <Menu.Menu position="right">
                <Menu.Item>
                    <Dropdown trigger={trigger} pointing='top left'>
                        <Dropdown.Menu>
                            <Dropdown.Item 
                                text='Profile' 
                                icon='user' 
                                as={Link} to={`${LINK_USER.link}/${id_user}`} 
                                onClick={() => setActiveLink(LINK_USER.name)} 
                            />
                            <Dropdown.Item 
                                text='Settings' 
                                icon='settings' 
                                as={Link} to={LINK_SETTINGS.link} 
                                active={activeLink === LINK_SETTINGS.name} 
                                onClick={() => setActiveLink(LINK_SETTINGS.name)}
                            />
                            <Dropdown.Divider />
                            <Dropdown.Item 
                                text='Sign Out' 
                                icon='sign out' 
                                onClick={() => signOut()}
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu.Menu>
        );  
    } 
};

const mapStateToProps = state => ({
    activeLink: state.activeLink,
    user: state.auth.user,
});

export default connect(mapStateToProps, { signOut, setActiveLink })(LoggedUser);
