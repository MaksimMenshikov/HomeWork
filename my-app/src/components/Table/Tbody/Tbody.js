import React, { Component } from 'react'
import Trow from '../Trow/Trow'

export class Tbody extends Component {
  render() {
    return (
        <tbody >
                {this.props.contacts.map((item) => (
                <Trow key={item.id} row={item} onDelete={this.props.onDelete}/>
                ))}
        </tbody>
    )
  }
}

export default Tbody