import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

export const BuyCarModal = ({ open, hanndleSubmit, handleClose }) => (
    <Modal size='tiny' open={open} onClose={() => handleClose()}>
        <Modal.Header>Buy car</Modal.Header>
        <Modal.Content>
            <p>Do you really want to buy this car?</p>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => handleClose()}>Cancle</Button>
            <Button
                positive
                icon='shop'
                labelPosition='right'
                content='Yes'
                onClick={() => hanndleSubmit()}
            />
        </Modal.Actions>
    </Modal>
);
