import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    state = {
        value: {
            title: '',
        },
        errors: {},
        isDirty: false,
        isValid: false,
    };

    onInputChange = (e) => {
        const value = {
            title: e.target.value,
        };

        const errors = this.validate(value);

        this.setState({
            value: value,
            errors: errors,
            isValid: !Object.keys(errors).length,
            isDirty: true,
           
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.value);
        

        e.target.reset();
    };

    validate({title}) {
        const errors = {};
        if (title === '') {
            errors.title = 'Form is required!';
        }
        return errors;
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="title"
                    value={this.state.value.title}
                    onChange={this.onInputChange}
                />
                <button disabled={!this.state.isValid}>Save</button>
                {this.state.isDirty && this.state.errors.title ? (
                    <div className='error'>
                        {this.state.errors.title}
                    </div>
                ) : null}
            </form>
        );
    }
}