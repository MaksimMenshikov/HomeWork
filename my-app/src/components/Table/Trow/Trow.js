import React, { Component } from 'react'
import './Trow.css'

export class Trow extends Component {
    delContact=()=>{
        this.props.onDelete(this.props.row.id);
    };

  render() {
    return (
     <tr className='trow' >
        <td className='td'>{this.props.row.name}</td>
        <td className='td'>{this.props.row.surname}</td>
        <td className='td'>{this.props.row.email}</td>
        <td className='td'> <button onClick={this.delContact}>Delete</button> </td>
    </tr>
    )
  }
}

export default Trow