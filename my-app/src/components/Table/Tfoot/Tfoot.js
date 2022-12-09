import React, { Component } from 'react'

export class Tfoot extends Component {

onSaveBtnClick = () => {
        let newName=document.getElementById('newContactName');
        let newSurname= document.getElementById('newContactSurname');
        let newEmail=document.getElementById('newContactEmail');
        this.props.onSave({
            name: newName.value,
            surname: newSurname.value,
            email: newEmail.value,
        }); 
        newName.value="";
        newSurname.value="";
        newEmail.value="";
    };
render() {
    return (
        <tfoot >
            <tr>
                <td>
                    <input type="text"
                        id="newContactName"
                        placeholder="Contact name"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        id="newContactSurname"
                        placeholder="Contact surname"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        id="newContactEmail"
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