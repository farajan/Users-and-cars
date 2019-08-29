import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

const Contact = ({phone, email}) => (
     <Header as='h5'>
     <Header.Content>
         Contact
         <Header.Subheader>
         <Icon name='phone' />
         {` ${phone}`}
         <br />
         <Icon name='mail' />
         {` ${email}`}
         </Header.Subheader>
     </Header.Content>
 </Header>
);

export default Contact;