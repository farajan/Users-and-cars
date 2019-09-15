import React from 'react'
import { Header, Form } from 'semantic-ui-react'
import { SEX_FEMALE, SEX_MALE } from '../../../../constants';

const genderOptions = [
    { key: 'm', text: 'Male', value: SEX_MALE },
    { key: 'f', text: 'Female', value: SEX_FEMALE },
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