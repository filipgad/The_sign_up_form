import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FormInput } from '../components/FormInput';
import { formUpdateValue, setNewDate } from '../actions/formActions';

class Form extends React.Component {

    handleDateChange = (date) => {
        this.props.setNewDate(date);
    }

    handleChange = (event) => {
        this.props.formUpdateValue(event.target.name, event.target.value);
    }

    render() {
        const { firstName, lastName, email, startDate } = this.props.formValues;
        return (
            <form method="post" action="/insert">
                <h1>SIGN UP FOR THE EVENT</h1>
                <FormInput 
                    title="First name"
                    type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={this.handleChange} 
                    placeholder="Enter name" />
                <FormInput 
                    title="Last name"
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={this.handleChange} 
                    placeholder="Enter last name" />
                <FormInput 
                    title="Email"
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange} 
                    placeholder="Enter email" />
                <label>Event date</label>
                <DatePicker
                    name="eventDate"
                    placeholderText="Choose event date"
                    selected={startDate ? moment(startDate) : null}
                    onChange={this.handleDateChange}
                    minDate={moment()}
                    dateFormat="L"
                    locale="pl"
                    showDisabledMonthNavigation 
                    required />
                <FormInput type="submit" value="Sign up" />
            </form>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        formValues: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        formUpdateValue: (name, value) => dispatch( formUpdateValue(name, value) ),
        setNewDate: (date) => dispatch( setNewDate(date) )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
