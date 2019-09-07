import React, { Component } from 'react'
import { Button, Image } from 'semantic-ui-react'

class UploadProfilePhoto extends Component {

    fileInputRef = React.createRef();

    render() {
        const uploadButton = this.props.file ?
        <Button.Group fluid>
            <Button
                className='upload button'
                content="Choose another photo"
                labelPosition="left"
                icon="file"
                onClick={() => this.fileInputRef.current.click()}
            />
            <Button.Or />
            <Button 
                className='upload button'
                negative
                content='Delete'
                onClick={() => this.props.resetFile()}
            />
        </Button.Group>
        : 
        <Button
            fluid
            className='upload button'
            content="Choose photo"
            labelPosition="left"
            icon="file"
            onClick={() => this.fileInputRef.current.click()}
        /> ;

        return (
            <div>
                <div className='profile photo content'>
                    {uploadButton}
                    <input
                        hidden
                        ref={this.fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={this.props.handleChange}
                        onClick={(event)=> { event.target.value = null }}
                    />
                    <Image src={this.props.image} />
                </div>
            </div>
        );
    }

};

export default UploadProfilePhoto;