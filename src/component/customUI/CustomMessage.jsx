import React from 'react'
import { Message } from 'semantic-ui-react'

const CustomMessage = ({messageType, header, note, visible}) => {
    const variant = [false, false, false]; // success, warning, negative
    variant[messageType] = true;
    if(!visible) return null;
    return (
        <Message success={variant[0]} warning={variant[1]} negative={variant[2]}>
            <Message.Header>{header}</Message.Header>
            <p>{note == null ? '' : note}</p>
        </Message>
    );
}

export default CustomMessage