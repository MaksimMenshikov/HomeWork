import React, { Component } from 'react'

export class Tfoot extends Component {
    state={
        name:'',
        surname:'',
        email:'',
    };

onInputChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value,
    });

    };

onSaveBtnClick = () => {
 
        this.props.onSave({
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
        }); 

        this.setState({
            name:'',
            surname:'',
            email:'',
        });
       
    };
render() {
    return (
        <tfoot >
            <tr>
                <td>
                    <input 
                        value={this.state.name}
                        name="name"
                        onChange={this.onInputChange}
                        placeholder="Contact name"
                    />
                </td>
                <td>
                    <input
                        value={this.state.surname}
                        name="surname"
                        onChange={this.onInputChange}
                        placeholder="Contact surname"
                    />
                </td>
                <td>
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.onInputChange}
                        placeholder="Contact email"
                    />
                </td>
                <td><button onClick={this.onSaveBtnClick}>Save</button></td>
            </tr>
     </tfoot>
    )
  }
}

export default Tfoot