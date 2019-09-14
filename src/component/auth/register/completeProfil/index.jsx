import React, { Component } from 'react'
import { Grid, Header, Form, Button, Message, Image, Segment } from 'semantic-ui-react'
import UploadProfilePhoto from './UploadProfilePhoto'
import SelectBirthday from './SelectBirthday'
import { SelectSex } from './SelectSex'
import { Link } from 'react-router-dom'
import { updateUser, uploadFile } from '../../../../actions/userActions'
import { connect } from 'react-redux'
import { LINK_USERS } from '../../../../constants'
import { compose } from 'redux'
import { withRouter } from "react-router-dom"
import { AddPhoneNumber } from './AddPhoneNumber'
import { validatePhoneNumber } from '../../../../utils'

class CompleteProfil extends Component {

    state = {
        file: null,
        image: null,
        sex: null,
        birthday: { year: null, month: null, day: null },
        phone: '',
    };

    getFile = () => {
        const { file } = this.state;
        const formData = new FormData();
        formData.append('file', file)
        return formData;
    };

    getBirthday = () => {
        const { birthday: { year, month, day } } = this.state;
        return (year != null && month != null && day != null) ? [year, month, day, 0, 0, 0] : null;
    }

    updateUser = (fileName) => {
        const { user, updateUser } = this.props;
        const { sex, phone } = this.state;
        const birthday = this.getBirthday();

        const requestBody = {
            'id_user': user.id_user,
            ...(birthday && { 'birthday': birthday}),
            ...(sex && { 'sex': sex }),
            ...(phone && { 'phone': phone}),
            ...(fileName && { 'photo': fileName })
        };
        updateUser(requestBody)
    }
    
    handleClick = () => {
        const { sex, phone, file } = this.state;

        if(file == null) {
            if(this.getBirthday() != null && sex != null && phone != null) {
                this.updateUser(null)
            }
        } else{
            const multipartFile = this.getFile();
            this.props.uploadFile(multipartFile, (name) => 
                this.updateUser(name)
            );
        }
        this.props.history.push(LINK_USERS.link);
    };

    handleSelectBirthday = (e, {value, name},) => 
        this.setState({...this.state, birthday: { ...this.state.birthday, [name]: value }})

    handleSelectSex = (e, {value},) => this.setState({ sex: value})

    handleChangePhone = ({target: { value } }) => this.setState({ phone: value })
    
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

                        <Header sub as='h5' size='tiny' content='Phone number' />
                        <AddPhoneNumber handleChange={this.handleChangePhone} />
                        
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
                            disabled={!validatePhoneNumber(this.state.phone) && this.state.phone !== ""}
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
    user: state.auth.user
});

export default compose(
    connect(mapStateToProps, { updateUser, uploadFile }),
    withRouter
)(CompleteProfil);