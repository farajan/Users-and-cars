import React from 'react'
import { Form } from 'semantic-ui-react'

export const AddPhoneNumber = ({handleChange}) => (
    <div>
        <Form.Input
            fluid
            placeholder='+420 999 999 999'
            onChange={(e) => handleChange(e)}
        />
    </div>
);