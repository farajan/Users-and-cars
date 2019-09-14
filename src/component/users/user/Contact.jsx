import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

const Contact = ({phone, email}) => {
    const displayPhone = phone  ?   (<span>
                                        <Icon name='phone' />
                                        {` ${phone}`}
                                    </span>)
                                :   null;
    return (
        <Header as='h5'>
            <Header.Content>
                Contact
                <Header.Subheader>
                <Icon name='mail' />
                {` ${email}`}
                <br />
                {displayPhone}
                </Header.Subheader>
            </Header.Content>
        </Header>
    )
};

export default Contact;