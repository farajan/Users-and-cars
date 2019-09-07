import React, { Component } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../actions/authActions'
import { setActiveLink } from '../../../actions/urlActiveLinkActions'
import { ACTIVE_LINK_USERS, ACTIVE_LINK_NONE } from '../../../constants'

class LoggedUser extends Component {

    render() {
        const { signOut, user: { id_user, firstName, lastName}, setActiveLink } = this.props;
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
                            <Dropdown.Item text='Account' icon='user' as={Link} to={`/user/${id_user}`} onClick={() => setActiveLink(ACTIVE_LINK_USERS)} />
                            <Dropdown.Item text='Settings' icon='settings' as={Link} to='/settings' onClick={() => setActiveLink(ACTIVE_LINK_NONE)}/>
                            <Dropdown.Divider />
                            <Dropdown.Item text='Sign Out' icon='sign out' onClick={() => signOut()}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu.Menu>
        );  
    } 
};

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps, { signOut, setActiveLink })(LoggedUser);
