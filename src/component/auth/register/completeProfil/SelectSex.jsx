import React from 'react'
import { Header, Form } from 'semantic-ui-react'

const genderOptions = [
    { key: 'm', text: 'Male', value: 'Male' },
    { key: 'f', text: 'Female', value: 'Female' },
];

export const SelectSex = ({handleChange}) => (
    <div>
        <Header sub as='h5' size='tiny' content='Gender' />
        <Form.Select
            fluid
            name='sex'
            options={genderOptions}
            placeholder='Gender'
            onChange={handleChange}
        />
    </div>
);