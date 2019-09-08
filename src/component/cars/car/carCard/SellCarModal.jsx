import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

export const SellCarModal = ({ open, hanndleSubmit, handleClose }) => (
    <Modal size='tiny' open={open} onClose={() => handleClose()}>
        <Modal.Header>Sell car</Modal.Header>
        <Modal.Content>
            <p>Do you really want to sell this car?</p>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => handleClose()}>Cancle</Button>
            <Button
                negative
                icon='delete'
                labelPosition='right'
                content='Yes'
                onClick={() => hanndleSubmit()}
            />
        </Modal.Actions>
    </Modal>
);
