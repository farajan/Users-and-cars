import React, { Component } from 'react'
import { Header, Form } from 'semantic-ui-react'

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const yearsOptions = [];

const monthsOptions = [];

class SelectBirthday extends Component {

    state = {
        daysOptions: []
    }

    componentWillMount() {
        const lastYear = new Date().getFullYear()
        for(let i = lastYear; i >= 1900; i--) {
            yearsOptions.push({key: i, text: i, value: i});
        }
        for(let i = 1; i <= 12; i++) {
            monthsOptions.push({key: i, text: i, value: i});
        }
    }

    componentDidUpdate(prevProps) {
        const { month } = this.props.birthday;
        if(prevProps.birthday.month !== month) {
            let daysOptions = [];
            for(let i = 1; i <= daysInMonth[month - 1]; i++) {
                daysOptions.push({key: i, text: i, value: i});
            }
            this.setState({ daysOptions: daysOptions });
        }
    }

    render() {
        const { handleChange } = this.props;
        return (
            <div>
                <Header sub as='h5' size='tiny' content='Birthday' />
                <Form.Group unstackable widths={3}>
                    <Form.Select
                        fluid
                        name='year'
                        options={yearsOptions}
                        placeholder='Year'
                        onChange={handleChange}
                    />
                    <Form.Select
                        fluid
                        name='month'
                        options={monthsOptions}
                        placeholder='Month'
                        onChange={handleChange}
                    />
                    <Form.Select
                        fluid
                        name='day'
                        options={this.state.daysOptions}
                        placeholder='Day'
                        onChange={handleChange}
                    />
                </Form.Group>
            </div>
        );
    }

};

export default SelectBirthday;