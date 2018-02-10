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

    // handleSubmit = () => {
    //     const eventParticipant = [{
    //         firstName: this.refs.firstName.value,
    //         lastName: this.refs.lastName.value,
    //         email: this.refs.email.value,
    //         eventData: this.refs.eventData.value
    //     }]
    //     this.props.postApplications(eventParticipant);
    // }

    // handleSubmit = (event) => {
    //     alert(`A form was submitted: ${this.state.firstName} ${this.state.lastName} ${this.state.email} ${String(this.state.startData)}`);
    //     axios.post('mongodb://localhost:27017/events', {
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         email: this.state.email,
    //         eventData: this.state.eventData
    //     })
    //         .then(response => {
    //         console.log(response, 'Event added!');
    //         })
    //         .catch(err => {
    //         console.log(err, 'Event not added, try again');
    //     });
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    title="First name"
                    type="text" 
                    name="firstName" 
                    value={this.props.formValues.firstName} 
                    onChange={this.handleChange} 
                    placeholder="Enter name" />
                <FormInput 
                    title="Last name"
                    type="text" 
                    name="lastName" 
                    value={this.props.formValues.lastName} 
                    onChange={this.handleChange} 
                    placeholder="Enter lastname" />
                <FormInput 
                    title="Email"
                    type="email" 
                    name="email" 
                    value={this.props.formValues.email} 
                    onChange={this.handleChange} 
                    placeholder="Enter email" />
                <DatePicker
                    placeholderText="Choose event date"
                    selected={this.props.formValues.startDate ? moment(this.props.formValues.startDate) : null}
                    onChange={this.handleDateChange}
                    minDate={moment()}
                    dateFormat="L"
                    locale="pl"
                    showDisabledMonthNavigation 
                    required />
                <FormInput type="submit" value="Submit" />
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
