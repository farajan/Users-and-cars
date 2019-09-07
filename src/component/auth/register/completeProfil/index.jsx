import React, { Component } from 'react'
import { Grid, Header, Form, Button, Message, Image, Segment } from 'semantic-ui-react'
import UploadProfilePhoto from './UploadProfilePhoto'
import SelectBirthday from './SelectBirthday'
import { SelectSex } from './SelectSex'
import { Link } from 'react-router-dom'
import { updateUser } from '../../../../actions/userActions'
import { connect } from 'react-redux'

class CompleteProfil extends Component {

    state = {
        file: null,
        sex: null,
        birthday: { year: null, month: null, day: null },
        image: null,
    };

    formatBirthday = (object) => {
        let birthday = [
            object.year,
            object.month,
            object.day,
            0, 0, 0
        ];
        return birthday;
    }
    
    handleClick = () => {
        const { user, updateUser } = this.props;
        const { birthday: { year, month, day } } = this.state;
        const requestBody = {
            'id_user': user.id_user,
            // 'sex': this.state.sex,
            // 'photo': this.state.photo,
            'birthday': [ year, month, day, 0, 0, 0 ],
        };
        updateUser(requestBody);
        // this.fileUpload(this.state.file);
    };

    handleSelectBirthday = (e, {value, name},) => {
        this.setState({...this.state, birthday: { ...this.state.birthday, [name]: value }});
    };

    handleSelectSex = (e, {value},) => {
        this.setState({ sex: value});
    };

    handleFileChange = e => {
        this.setState({ 
            file: e.target.files[0],
            image: URL.createObjectURL(e.target.files[0])
        });
    };

    resetFile = () => {
        this.setState({
            file: null,
            image: null,
        });
    };

    fileUpload = file => {
        const url = "/some/path/to/post";
        const formData = new FormData();
        formData.append("file", file);
        const config = {
          headers: {
            "Content-type": "multipart/form-data"
          }
        };
        console.log(formData);
      };


    render() {
        return(
            <Grid textAlign='center' style={{ height: '100vh', marginTop: '5%' }} >
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='green' textAlign='center'>
                    <Image src='/logo.png' /> Complete your profile
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <SelectBirthday 
                            handleChange={this.handleSelectBirthday}
                            birthday={this.state.birthday}
                        />
             
                        <SelectSex handleChange={this.handleSelectSex} />
                        
                        <Header sub as='h5' size='tiny' content='Choose your profile photo' />                        
                        <UploadProfilePhoto  
                            handleChange={this.handleFileChange}
                            resetFile={this.resetFile}
                            file={this.state.file}
                            image={this.state.image}
                        />

                        <Button 
                            fluid
                            color='green' 
                            size='large' 
                            onClick={() => this.handleClick()}>
                                Complete now    
                        </Button>
                        <Message>
                            Or you can skip and complete your profile later.
                        </Message>
                        <Button 
                            fluid
                            color='grey' 
                            size='large' 
                            as={Link} 
                            to='/'
                        >
                                Later
                        </Button>
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
        );
    }

};

const mapStateToProps = state => ({
    user: state.auth
});

export default connect(mapStateToProps, { updateUser })(CompleteProfil);